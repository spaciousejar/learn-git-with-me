import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative">
      {/* Mobile-first approach: Show image with play button, defer video loading */}
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/git_explained_in_100_seconds.mp4"
        thumbnailSrc="/docsw.png"
        thumbnailAlt="Git Explained Video - Click to Play"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/git_explained_in_100_seconds.mp4"
        thumbnailSrc="/docs.png"
        thumbnailAlt="Git Explained Video - Click to Play"
      />
    </div>
  );
}
