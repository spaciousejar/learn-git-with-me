import { DownloadButton } from "@/components/animated-download-button";
import { GET } from "@/components/get-started";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <><div className="flex sm:min-h-[80vh] min-h-[80vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-10">
      <Link
        href="https://github.com/spaciousejar/learn-git-with-me.git"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        Learn Git with me
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        Learn Git with me is a free and open-source platform to learn Git and
        GitHub. It is designed to be simple and easy to understand for
        beginners.
      </p>
      <div className="flex flex-row items-center gap-5">
         <GET/>
         <DownloadButton/>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> ~ git init
      </span>
    </div>
    
    </>
  );
}
