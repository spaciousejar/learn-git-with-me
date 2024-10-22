import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/git_explained_in_100_seconds.mp4"
        thumbnailSrc="/docsw.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/git_explained_in_100_seconds.mp4"
        thumbnailSrc="/docs.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
