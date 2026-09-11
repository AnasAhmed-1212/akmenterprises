"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { images } from "./site-data";

const slides = [
  { src: images.field, label: "Agricultural fields", alt: "Green agricultural fields stretching toward the horizon" },
  { src: images.sesame, label: "Natural sesame seeds", alt: "Close-up of natural sesame seeds" },
  { src: images.corn, label: "Yellow corn", alt: "Golden yellow corn kernels" },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState<boolean[]>([false, false, false]);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActive(current => {
        for (let offset = 1; offset < slides.length; offset++) {
          const next = (current + offset) % slides.length;
          if (ready[next]) return next;
        }
        return current;
      });
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, ready]);

  return <>
    <div className="hero-slideshow" aria-label="Agricultural photographs">
      {slides.map((slide, index) => <div
        key={slide.src}
        className={`hero-slide${index === active ? " is-active" : ""}`}
        aria-hidden={index !== active}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          unoptimized
          sizes="100vw"
          priority={index === 0}
          loading={index === 0 ? undefined : "eager"}
          onLoad={() => setReady(current => current.map((value, i) => i === index || value))}
        />
      </div>)}
    </div>
    <div className="hero-slideshow-controls" role="group" aria-label="Hero slideshow controls">
      {slides.map((slide, index) => <button
        key={slide.label}
        type="button"
        className={`slide-dot${active === index ? " is-active" : ""}`}
        aria-label={`Show ${slide.label.toLowerCase()}`}
        aria-pressed={active === index}
        disabled={!ready[index]}
        onClick={() => { setActive(index); setPaused(true); }}
      ><span /></button>)}
      {!reducedMotion && <button
        type="button"
        className="slideshow-pause"
        onClick={() => setPaused(value => !value)}
        aria-label={paused ? "Play slideshow" : "Pause slideshow"}
      >{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
    </div>
  </>;
}
