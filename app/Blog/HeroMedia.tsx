"use client";

type HeroMediaProps = {
  videoSrc: string;
};

export default function HeroMedia({ videoSrc }: HeroMediaProps) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/zoyaa-bg.png"
      className="h-full w-full object-cover animate-[slowZoom_14s_ease-in-out_infinite]"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}

