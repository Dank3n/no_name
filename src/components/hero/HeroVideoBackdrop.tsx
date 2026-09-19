"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";

export default function HeroVideoBackdrop() {
  const { ui } = useLocale();
  const { hero } = siteConfig;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    const play = () => {
      void video.play().catch(() => undefined);
    };
    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <img
        src={hero.backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      {!reduceMotion && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={hero.backgroundImage}
          aria-hidden
        >
          <source src={hero.atmosphereVideo} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <span className="sr-only">{ui("hero.videoLabel")}</span>
    </div>
  );
}
