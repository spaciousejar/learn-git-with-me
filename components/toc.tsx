import { getDocsTocs } from "@/lib/markdown";
import TocObserver from "./toc-observer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BugIcon, LightbulbIcon, PencilIcon } from "lucide-react";
import Link from "next/link";
import { getGithubFileUrl, getGitHubIssueUrl } from "@/lib/github";


export default async function Toc({ path }: { path: string }) {
  const tocs = await getDocsTocs(path);
  const contributeLinks = [
    {
      text: "Report an issue",
      icon: BugIcon,
      href: getGitHubIssueUrl({
        owner: "spaciousejar",
        repo: "learn-git-with-me",
        title: `[bug]: ${path}`,
        labels: ["bug", "documentation"],
        template: "bug_report.md",
      }),
    },
    {
      text: "Request a feature",
      icon: LightbulbIcon,
      href: getGitHubIssueUrl({
        owner: "spaciousejar",
        repo: "learn-git-with-me",
        title: `[feat]: ${path}`,
        labels: ["enhancement"],
        template: "feature_request.md",
      }),
    },
    {
      text: "Edit this page",
      icon: PencilIcon,
      href: getGithubFileUrl(path),
    },
  ];


  return (
    <div className="xl:flex toc hidden w-[20rem] py-9 sticky top-16 pl-6">
      <div className="flex flex-col gap-3 w-full pl-2">
        <h3 className="font-medium text-sm">On this page</h3>
        <ScrollArea className="pb-2 pt-0.5 overflow-y-auto">
          <TocObserver data={tocs} />
        </ScrollArea>

        <div className="space-y-2 mt-10">
      <p className="font-medium">Contribute</p>
      <ul className="m-0 list-none">
        {contributeLinks.map((link, index) => (
          <li key={index} className="mt-0 pt-2">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="mr-2 size-4" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
      
</div>
  
);
}
