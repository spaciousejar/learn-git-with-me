import {HeroVideoDialog} from "@/components/ui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative">
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="/git_explained_in_100_seconds.mp4"
        thumbnailSrc="/video-thumbnail.webp"
        thumbnailAlt="Frame from the Git in 100 seconds explainer video"
      />
    </div>
  );
}
