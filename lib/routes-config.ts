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
        items: [
          { title: "Linux", href: "/linux" },
          { title: "MacOS", href: "/macOS" }, 
          { title: "Windows", href: "/windows" },
          { title: "Android", href: "/android" },
        ],
      },
    ],
  },
  {
    title: "Basic Concepts",
    href: "/basic-concepts", 
    noLink: true,
    items: [
      { title: "Why Use Git", href: "/why-use-git" }, 
      { title: "Tips to Master Git", href: "/tips" }, 
    ],
  },
  {
    title: "Essential Commands",
    href: "/essential-commands",
    noLink: true,
    items: [
      { title: "Configure Git", href: "/configure-git" },
      { title: "Initialize Repository", href: "/git-init" },
      { title: "Check Status", href: "/git-status" },
      { title: "Stage Changes", href: "/git-add" },
      { title: "Commit Changes", href: "/git-commit" },
      { title: "Push Changes", href: "/git-push" },
      { title: "Pull Changes", href: "/git-pull" },
      { title: "Clone Repository", href: "/git-clone" },
      {
        title: "Branch Management", 
        href: "/branches",
        noLink: true,
        items: [
          { title: "Create Branch", href: "/create-branch" },
          { title: "List Branches", href: "/git-branch" },
          { title: "Switch Branches", href: "/git-checkout" },
          { title: "Merge Branches", href: "/git-merge" },
          { title: "Delete Branch", href: "/delete-branch" },
        ],
      },
      { title: "View History", href: "/git-log" }, 
      { title: "View Changes", href: "/git-diff" },
      { title: "Fetch Changes", href: "/git-fetch" },
      { title: "Manage Remotes", href: "/git-remote" },
      { title: "Reset Changes", href: "/git-reset" },
      { title: "Revert Changes", href: "/git-revert" },
    ],
  },
  {
    title: "File Management",
    href: "/file-management",
    noLink: true,
    items: [
      { title: ".gitignore File", href: "/gitignore" },
      { title: ".gitkeep File", href: "/gitkeep" },
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
