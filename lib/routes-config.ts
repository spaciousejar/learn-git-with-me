/** @format */

// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
        /* items: [
          { title: "Windows", href: "/windows" },
          { title: "Mac", href: "/mac" },
          { title: "Linux", href: "/linux" },
        ],*/
      },
    ],
  },
  {
    title: "Basic Concepts",
    href: "/basic-concepts",
    noLink: true,
    items: [
      { title: "Why Use git", href: "/why-use-git" },
      {
        title: "Tip to Master Git",
        href: "/tips",
      },
    ],
  },

  {
    title: "Essential Commands",
    href: "/essential-commands",
    noLink: true,
    items: [
      { title: "Configure Git", href: "/configure-git" },
      { title: "Initialize Git", href: "/Initialize-Git-repository" },
      { title: "Check status", href: "/git-status" },
      { title: "Add files to staging", href: "/git-add" },
      { title: "Commit changes", href: "/git-commit" },
      { title: "Push changes", href: "/git-push" },
      { title: "Pull changes", href: "/git-pull" },
      { title: "Clone repository", href: "/git-clone" },
      {
        title: "Branching",
        href: "/branching",
        noLink: true,
        items: [
          { title: "Create branch", href: "/create-branch" },
          { title: "List branches", href: "/git-branch" },
          { title: "Switch branch", href: "/git-checkout" },
          { title: "Merge branch", href: "/git-merge" },
          { title: "Delete branch", href: "/delete-branch" },
        ],
      },
      { title: "View commit history", href: "/git-log" },
      { title: "View changes", href: "/git-diff" },
      { title: "Fetch changes", href: "/git-fetch" },
      { title: "Remote repositories", href: "/git-remote" },
      { title: "Reset changes", href: "/git-reset" },
      { title: "Revert changes", href: "/git-revert" },
    ],
  },
  {
    title: "File Management in Git",
    href: "/file-management-in-git",
    noLink: true,
    items: [{ title: "The .gitignore File", href: "/the-gitignore-file" }],
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
