// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
{
  title: "1. Getting Started",
  href: "/1-getting-started",

  items: [
    {title: "What is Git", href: "/what-is-git"},
    { title: "Version Control Basics", href: "/version-control-basics" },
    { title: "Why Use Version Control", href: "/why-use-version-control" },
    { title: "Git vs Other VCS", href: "/git-vs-other" },
  ],
},
{
  title: "2. Git Basics",
  href: "/2-git-basics",
  noLink: true,
  items: [
    { title: "Installation", href: "/installation"},
    {
      title: "Setup",
      href: "/setup",
      items: [
        { title: "Git Config", href: "/git-config" },
        { title: "Local vs Global Config", href: "/local-vs-global-config" },
      ],
    },
    {
      title: "Core Commands",
      href: "/commands",
      items: [
        { title: "Git Init", href: "/git-init" },
        { title: "Git Status", href: "/git-status" },
        { title: "Git Add", href: "/git-add" },
        { title: "Git Commit", href: "/git-commit" },
        { title: "Git Log", href: "/git-log" },
        { title: "Git Diff", href: "/git-diff" },
        { title: "Viewing Commit History", href: "/viewing-commit-history" },
        { title: "Viewing Diffs", href: "/viewing-diffs" },
        { title: "Git Log Options", href: "/git-log-options" },
        { title: "Git Commit --amend", href: "/git-commit---amend" },
        { title: "Git Reset", href: "/git-reset" },
        { title: "Git Revert", href: "/git-revert" },
        { title: "Git Reflog", href: "/git-reflog" },
        { title: "Git Checkout", href: "/git-checkout" },
      ],
    },
    {
      title: "Working with Files",
      href: "/working-with-files",
      items: [
        { title: ".gitignore", href: "/gitignore" },
        { title: ".gitkeep", href: "/gitkeep" },
        { title: "Git Attributes", href: "/git-attributes" },
        { title: "Staging Area", href: "/staging-area" },
        { title: "Working Directory", href: "/working-directory" },
        { title: "Staged Changes", href: "/staged-changes" },
        { title: "Unstaged Changes", href: "/unstaged-changes" },
        { title: "Adding & Updating Files", href: "/adding--updating" },
      ],
    },
  ],
},
{
  title: "3. Git Branching",
  href: "/3-git-branching",
  noLink: true,
  items: [
    {
      title: "Branch Basics", 
      href: "/basics",
      items: [
        { title: "Branching Overview", href: "/branching-basics" },
        { title: "Create Branch", href: "/create-branch" },
        { title: "List Branches", href: "/list-branches" },
        { title: "Switch Branches", href: "/switch-branches" },
        { title: "Delete Branch", href: "/delete-branch" },
        { title: "Rename Branch", href: "/renaming-branch" },
        { title: "Branch Naming Conventions", href: "/branch-naming" },
        { title: "HEAD", href: "/head" },
        { title: "Detached HEAD", href: "/detached-head" },
        { title: "What is Version Control", href: "/what-is-version-control" },
      ],
    },
    {
      title: "Merging",
      href: "/merging",
      items: [
        { title: "Merging Basics", href: "/merging-basics" },
        { title: "Git Merge", href: "/git-merge" },
        { title: "Handling Conflicts", href: "/handling-conflicts" },
        { title: "Merge Strategies", href: "/merge-strategies" },
        { title: "Fast-Forward vs Non-FF", href: "/fast-forward-vs-non-ff" },
        { title: "Linear vs Non-Linear", href: "/Linear-vs-Non-Linear" },
      ],
    },
    {
      title: "Remote Operations",
      href: "/remote",
      items: [
        { title: "Cloning Repositories", href: "/git-clone" },
        { title: "Git Push", href: "/git-push" },
        { title: "Git Pull", href: "/git-pull" },
        { title: "Git Fetch", href: "/git-fetch" },
        { title: "Git Remote", href: "/git-remote" },
        { title: "Pushing & Pulling Changes", href: "/pushing--pulling-changes" },
        { title: "Fetch Without Merge", href: "/fetch-without-merge" },
      ],
    },
  ],
},
{
  title: "4. Advanced Git",
  href: "/4-git-advanced",
  noLink: true,
  items: [
    {
      title: "Rewriting History",
      href: "/rewriting-history",
      items: [
        { title: "Overview", href: "/overview" },
        { title: "Git Rebase", href: "/git-rebase" },
        { title: "Cherry-Picking", href: "/cherry-picking-commits" },
        { title: "Amending Commits", href: "/amending-commits" },
        { title: "Squashing Commits", href: "/squashing-commits" },
        { title: "Git Filter Branch", href: "/git-filter-branch" },
        { title: "Clean Git History", href: "/clean-git-history" },
        { title: "Git Commit --amend", href: "/git-commit---amend" },
        { title: "Git Push --force", href: "/git-push---force" },
      ],
    },
    {
      title: "Advanced Tools",
      href: "/tools",
      items: [
        { title: "Git Bisect", href: "/git-bisect" },
        { title: "Git Stash", href: "/git-stash" },
        { title: "Git Stash Basics", href: "/git-stash-basics" },
        { title: "Git LFS", href: "/git-lfs" },
        { title: "Git Worktree", href: "/git-worktree" },
        { title: "Git Patch", href: "/git-patch" },
        { title: "Submodules", href: "/submodules" },
        { title: "--hard", href: "/--hard" },
        { title: "--soft", href: "/--soft" },
        { title: "--mixed", href: "/--mixed" },
        { title: "Basic Git Usage", href: "/basic-git-usage" },
        { title: "Fetch Without Merge", href: "/fetch-without-merge" },
      ],
    },
    {
      title: "Recovery & Fixes",
      href: "/recovery",
      items: [
        { title: "Git Reflog", href: "/git-reflog" },
        { title: "Git Reset", href: "/git-reset" },
        { title: "Git Revert", href: "/git-revert" },
        { title: "Undoing Changes", href: "/undoing-changes" },
      ],
    },
  ],
},
{
  title: "5. GitHub",
  href: "/5-github",
  noLink: true,
  items: [
    {
      title: "GitHub Basics",
      href: "/basics",
      items: [
        { title: "GitHub Interface", href: "/interface" },
        { title: "Creating an Account", href: "/creating-account" },
        { title: "Setting Up Profile", href: "/setting-up-profile" },
        { title: "Profile README", href: "/profile-readme" },
        { title: "Creating Repositories", href: "/creating-repositories" },
        { title: "Repository Management", href: "/repository-management" },
        { title: "Contribution Guidelines", href: "/contribution-guidelines" },
        { title: "What Are These", href: "/what-are-these" },
        { title: "GitHub Models", href: "/github-models" },
        { title: "Mentions", href: "/mentions" },
        { title: "Private vs Public", href: "/private-vs-public" },
        { title: "Saved Replies", href: "/saved-replies" },
        { title: "Reactions", href: "/reactions" },
        { title: "GitHub Wikis", href: "/github-wikis" },
        { title: "GitHub Marketplace", href: "/github-marketplace" },
        { title: "Scheduled Workflows", href: "/scheduled-worfklows" },
        { title: "Webhooks", href: "/webhooks" },
        { title: "Creating Apps", href: "/creating-apps" },
        { title: "GitHub Organizations", href: "/github-organizations" },
        { title: "Teams Within Organization", href: "/teams-within-organization" },
        { title: "Collaborators", href: "/collaborators" },
        { title: "Collaborators & Members", href: "/collaborators--members" },
      ],
    },
    {
      title: "Collaboration",
      href: "/collaboration",
      items: [
        { title: "Pull Requests", href: "/pull-requests" },
        { title: "Issues", href: "/issues" },
        { title: "Code Reviews", href: "/code-reviews" },
        { title: "GitHub Discussions", href: "/github-discussions" },
        { title: "Issue Management", href: "/issue-management" },
        { title: "PR Guidelines", href: "/pr-guidelines" },
        { title: "PR From a Fork", href: "/pr-from-a-fork" },
        { title: "Labelling Issues & PRs", href: "/labelling-issues--prs" },
        { title: "Collaboration", href: "/collaboration" },
        { title: "Collaboration on GitHub", href: "/collaboration-on-github" },
      ],
    },
    {
      title: "GitHub Features",
      href: "/features",
      items: [
        { title: "GitHub Actions", href: "/github-actions" },
        { title: "GitHub Pages", href: "/github-pages" },
        { title: "GitHub Packages", href: "/github-packages" },
        { title: "GitHub Projects", href: "/github-projects" },
        { title: "GitHub Releases", href: "/github-releases" },
        { title: "GitHub Security", href: "/github-security" },
        { title: "GitHub Gists", href: "/github-gists" },
        { title: "GitHub Sponsors", href: "/github-sponsors" },
        { title: "Static Site Generators", href: "/static-site-generators" },
        { title: "Custom Domains", href: "/custom-domains" },
        { title: "Deploying Static Websites", href: "/deploying-static-websites" },
        { title: "Citation Files", href: "/citation-files" },
        { title: "Kanban Boards", href: "/kanban-boards" },
        { title: "Project Planning", href: "/project-planning" },
        { title: "Roadmaps", href: "/roadmaps" },
      ],
    },
    {
      title: "Integrations",
      href: "/integrations",
      noLink: true,
      items: [
        { title: "GitHub Codespaces", href: "/github-codespaces" },
        { title: "GitHub Copilot", href: "/github-copilot" },
        { title: "GitHub CLI", href: "/github-cli" },
        { title: "GitHub API", href: "/api" },
        { title: "REST API", href: "/rest-api" },
        { title: "GraphQL API", href: "/graphql-api" },
        { title: "OAuth Apps", href: "/oauth-apps" },
        { title: "GitHub Apps", href: "/github-apps" },
        { title: "GitHub Education", href: "/github-education" },
        { title: "GitHub Classroom", href: "/github-classroom" },
        { title: "Student Developer Pack", href: "/student-developer-pack" },
        { title: "Campus Program", href: "/campus-program" },
      ],
    },
  ],
},
{
  title: "6. Workflows",
  href: "/6-workflows",
  noLink: true,
  items: [
    {
      title: "Workflow Models",
      href: "/models",
      items: [
        { title: "GitHub Flow", href: "/github-flow" },
        { title: "Git Flow", href: "/git-flow" },
        { title: "Cherry Picking", href: "/cherry-picking" },
        { title: "Git Rebase", href: "/git-rebase" },
      ],
    },
    {
      title: "Best Practices",
      href: "/best-practices",
      noLink: true,
      items: [
        { title: "Commit Messages", href: "/commit-messages" },
        { title: "Branch Naming", href: "/branch-naming" },
        { title: "Documentation", href: "/documentation" },
        { title: "Project README", href: "/project-readme" },
        { title: "Markdown", href: "/markdown" },
        { title: "What and Why", href: "/what-and-why" },
        { title: "What and Why Use", href: "/what-and-why-use" },
        { title: "PR Guidelines", href: "/pr-guidelines" },
        { title: "Pre Commit", href: "/pre-commit" },
        { title: "Post Update", href: "/post-update" },
        { title: "YAML Syntax", href: "/yaml-syntax" },
      ],
    },
    // {
    //   title: "Team Collaboration",
    //   href: "/team-collaboration",
    //   noLink: true,
    //   items: [
    //     { title: "Working in a Team", href: "/working-in-a-team" },
    //     { title: "Forking vs Cloning", href: "/forking-vs-cloning" },
    //     { title: "Between Branches", href: "/between-branches" },
    //     { title: "Between Commits", href: "/between-commits" },
    //   ],
    // },
  ],
},
{
  title: "7. Automation",
  href: "/7-automation",
  noLink: true,
  items: [
    {
      title: "CI/CD",
      href: "/ci-cd",
      noLink: true,
      items: [
        { title: "GitHub Actions", href: "/github-actions" },
        { title: "Automations", href: "/automations" },
        { title: "Use in Automation", href: "/use-in-automation" },
        { title: "Workflow Context", href: "/workflow-context" },
        { title: "Workflow Runners", href: "/workflow-runners" },
        { title: "Workflow Status", href: "/workflow-status" },
        { title: "Workflow Triggers", href: "/workflow-triggers" },
        { title: "Marketplace Actions", href: "/marketplace-actions" },
        { title: "Secrets and Env Vars", href: "/secrets-and-env-vars" },
        { title: "Caching Dependencies", href: "/caching-dependencies" },
        { title: "Storing Artifacts", href: "/storing-artifacts" },
      ],
    },
    {
      title: "Git Hooks",
      href: "/git-hooks",
      noLink: true,
      items: [
        { title: "Pre Commit", href: "/pre-commit" },
        { title: "Commit Msg", href: "/commit-msg" },
        { title: "Post Checkout", href: "/post-checkout" },
        { title: "Pre Push", href: "/pre-push" },
        { title: "Post Update", href: "/post-update" },
        { title: "Client vs Server Hooks", href: "/client-vs-server-hooks" },
        { title: "Git Hooks", href: "/git-hooks" },
      ],
    },
    {
      title: "Useful Scripts",
      href: "/scripts",
      noLink: true,
      items: [
        { title: "Checkout Tags", href: "/checkout-tags" },
        { title: "Managing Tags", href: "/managing-tags" },
        { title: "Pushing Tags", href: "/pushing-tags" },
        { title: "Tagging", href: "/tagging" },
      ],
    },
  ],
},
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
