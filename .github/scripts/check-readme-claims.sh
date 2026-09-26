#!/usr/bin/env bash
# Fails if the README claims something the repo does not have.
#
# The bug class: a hand-written README lists a tool, a license, or a release
# that was never actually added. It shipped twice (a Prettier claim with no
# dependency, an MIT claim with no LICENSE file), so it is checked
# mechanically instead of remembered.
#
# Four assertions:
#   1. a claimed license has a LICENSE/COPYING file, and the file agrees
#   2. a claimed CI badge points at a workflow that exists
#   3. a claimed tool has a dependency, a config file, or an allowlist entry
#   4. instructions that say "download/boot the release" have a release
#
# Reports every failure, not just the first.
#
# ponytail: tool matching is substring-based, so a claim is satisfied by a
# *related* package (claim "MDX" passes on next-mdx-remote). Deliberately
# loose: a false pass is cheaper than a false alarm here, and the allowlist
# at check_claim() absorbs the known non-npm claims. If a claim ever slips
# through, add a case there -- do not build a README parser.

set -uo pipefail
cd "$(dirname "$0")/../.." || exit 2

README=${1:-README.md}
[ -f "$README" ] || { echo "::error::no $README"; exit 2; }

fail=0
note() { echo "::error::$1"; fail=1; }
norm() { printf '%s' "$1" | tr -cd '[:alnum:]' | tr '[:upper:]' '[:lower:]'; }

# ---------------------------------------------------------------- 1. license
LIC='MIT|Apache|GPL|BSD|MPL|LGPL|ISC|Unlicense|AGPL|CDDL|EPL'
claims_license=no
grep -qiE "^#+ *license" "$README" && claims_license=yes
[ -f package.json ] && grep -qE "\"license\" *: *\"($LIC)" package.json && claims_license=yes

if [ "$claims_license" = yes ]; then
  # not `ls LICENSE* COPYING*` -- that exits non-zero when either glob misses
  licfile=""
  for f in LICENSE LICENSE.md LICENSE.txt LICENCE COPYING COPYING.md; do
    [ -f "$f" ] && { licfile=$f; break; }
  done
  if [ -z "$licfile" ]; then
    note "$README claims a license but there is no LICENSE/COPYING file at the repo root"
  else
    declared=$(grep -oE "\"license\" *: *\"($LIC)" package.json 2>/dev/null | grep -oE "$LIC" | head -1)
    [ -n "${declared:-}" ] && ! grep -qiE "$declared" "$licfile" &&
      note "package.json declares '$declared' but $licfile does not contain that word"
  fi
fi

# ------------------------------------------------------------- 2. CI badges
while read -r ref; do
  [ -n "$ref" ] || continue
  [ -f ".github/$ref" ] || note "$README links $ref but .github/$ref does not exist"
done < <(grep -oE "workflows/[A-Za-z0-9_.-]+\.ya?ml" "$README" | sort -u)

# ------------------------------------------------------------------ 3. tools
check_claim() {
  c=$(norm "$1")
  [ -n "$c" ] || return 0

  # shadcn/ui is a CLI, not a dependency -- its marker file is the evidence
  case "$c" in *shadcn*) [ -f components.json ] && return 0 ;; esac

  # a config file named after the tool counts as having the tool
  for f in .[!.]* *rc *.config.* *rc.json tsconfig*.json components.json; do
    [ -e "$f" ] || continue
    case "$(norm "$f")" in *"$c"*) return 0 ;; esac
  done

  # a directory named after the tool counts too -- non-npm projects (a distro,
  # a shell toolkit) ship the thing as a package directory, not a dependency
  while read -r d; do
    case "$(norm "$d")" in *"$c"*) return 0 ;; esac
  done < <(find . -maxdepth 3 -type d -not -path './.git*' -not -path './node_modules*' 2>/dev/null)

  # a dependency counts when either name contains the other
  if [ -f package.json ]; then
    while read -r dep; do
      d=$(norm "$dep")
      [ -n "$d" ] || continue
      case "$c" in *"$d"*) return 0 ;; esac
      case "$d" in *"$c"*) return 0 ;; esac
    done < <(grep -oE '"[@a-zA-Z0-9/._-]+":' package.json | tr -d '":')
  fi

  # not npm packages at all
  case "$c" in *vercel*|*nextjs*|*nextfont*|*html*|*css*|*shell*|*linux*|*arch*) return 0 ;; esac

  return 1
}

if grep -qE '^[[:space:]]*[-*][[:space:]]*\*\*\[' "$README"; then
  while read -r claim; do
    [ -n "$claim" ] || continue
    check_claim "$claim" || note "$README claims '$claim' but nothing in the repo provides it"
  done < <(grep -oE '\*\*\[[^]]+\]' "$README" | sed 's/^\*\*\[//; s/\]$//' | sort -u)
fi

# ------------------------------------------- 4. documented-but-unreleased
# A warning, not an error: unlike the three above, this is a judgment call
# about doc completeness, not a provable falsehood. Failing CI over it would
# only train people to delete the paragraph.
if grep -qiE "(download|boot|install) (the )?[a-z]* ?iso" "$README" || \
   grep -qiE "trigger an? (iso )?release" "$README"; then
  tags=$(git ls-remote --tags origin 2>/dev/null | wc -l)
  rel=$(command -v gh >/dev/null && gh release list 2>/dev/null | wc -l)
  if [ "$tags" -eq 0 ] && [ "$rel" -eq 0 ]; then
    echo "::warning::$README documents a download/boot/release flow, but the repo has 0 tags and 0 releases -- either publish one or say so in the README"
  fi
fi

[ "$fail" -eq 0 ] && echo "readme-claims: OK"
exit "$fail"
