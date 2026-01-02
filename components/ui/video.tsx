import {HeroVideoDialog} from "@/components/ui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/git_explained_in_100_seconds.mp4"
        thumbnailSrc="/docsw.png"
        thumbnailAlt="Git tutorial video thumbnail - Learn Git basics in 100 seconds"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/git_explained_in_100_seconds.mp4"
        thumbnailSrc="/docs.png"
        thumbnailAlt="Git tutorial video thumbnail - Learn Git basics in 100 seconds (dark theme)"
      />
    </div>
  );
}
