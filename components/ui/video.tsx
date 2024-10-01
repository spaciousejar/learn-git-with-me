import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/demo.mp4"
        thumbnailSrc="/docs.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/demo.mp4"
        thumbnailSrc="docs.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
