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

      { title: "Introduction",
         href: "/introduction",
        
      },  
      {
        title: "Installation",
        href: "/installation",
       /* items: [
          { title: "Windows", href: "/windows" },
          { title: "Mac", href: "/mac" },
          { title: "Linux", href: "/linux" },
        ],*/
      },
      
  ]
},
{ 
  title: "Basic Concepts",
  href: "/basic-concepts",
noLink: true,
  items: [
    { title: "Why Use git", href: "/why-use-git" },
  ]},
{
  title: "Tip to Master Git and GitHub",
  href: "/Tips-to-Master-Git-&-Github",
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
      { title: "Branching",
         href: "/branching",
         noLink: true,
         items: [
          { title: "Create branch", href: "/create-branch" },
          { title: "List branches", href: "/git-branch" },
          { title: "Switch branch", href: "/git-checkout" },
          { title: "Merge branch", href: "/git-merge" },
          { title: "Delete branch", href: "/delete-branch" },
         ]},
      { title: "View commit history", href: "/git-log" },
      { title: "View changes", href: "/git-diff" },
      { title: "Fetch changes", href: "/git-fetch" },
      { title: "Remote repositories", href: "/git-remote" },
      { title: "Reset changes", href: "/git-reset" },
      { title: "Revert changes", href: "/git-revert" },     
    ]

},

/*
{
  title: "Advanced Commands",
  href: "/advanced-commands",
  noLink: true,
  items: [
    { title: "Cherry-pick", href: "/git-cherry-pick" },
    { title: "Rebase", href: "/git-rebase" },
    { title: "Squash commits", href: "/git-squash" },
    { title: "Interactive rebase", href: "/git-interactive-rebase" },
    { title: "Submodules", href: "/git-submodules" },
    { title: "Bisect", href: "/git-bisect" },
    { title: "Reflog", href: "/git-reflog" },
    { title: "Worktrees", href: "/git-worktrees" },
    { title: "Hooks", href: "/git-hooks" },
    { title: "Tags", href: "/git-tags" },
    { title: "Stash", href: "/git-stash" },
    { title: "Blame", href: "/git-blame" },
    { title: "Stash changes", href: "/git-stash" },
      
    { title: "Undo changes", href: "/git-restore" },
    { title: "Remove files", href: "/git-rm" },
    { title: "Move files", href: "/git-mv" },
   ]
}
*/
    
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
