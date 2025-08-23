import { DownloadButton } from "@/components/animated-download-button";
import { GET } from "@/components/get-started";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Video } from "@/components/ui/video";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import CanvasCursor from "@/components/CanvasCursor";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn Git With Me - Master Git Version Control',
  description: 'Learn Git and GitHub with our comprehensive beginner\'s guide. Master version control, branching, collaboration, and workflows through interactive tutorials and real-world examples.',
}

export default function Home() {
  return (
    <><div className="flex sm:min-h-[71vh] min-h-[68vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/spaciousejar/learn-git-with-me.git"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        Learn Git And GitHub
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
       It is designed to be simple and easy to understand for
        beginners.
      </p>
      <div className="flex flex-row items-center gap-5">
         <GET/>
         <CanvasCursor />
         <DownloadButton/>
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> ~ git init
      </span>
    </div>
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Video/>
          <BorderBeam size={250} duration={12} delay={9} />
    </div>
    </>
  );
}
