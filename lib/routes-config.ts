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
      
  ]
},
{ 
  title: "Git Tutorial",
  href: "/git-tutorial",
  noLink: true,
    items: [
      { title: "Git Started", href: "/git-started" },
      { title: "Git New File", href: "/git-new-file" },
    ]

}
    
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
