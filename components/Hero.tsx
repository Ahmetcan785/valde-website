"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(Array.from(contentRef.current.children), {
          opacity: 0,
          y: 28,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          delay: 0.4,
        });
      }

      if (scrollLineRef.current) {
        gsap.fromTo(
          scrollLineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            transformOrigin: "top center",
            duration: 0.9,
            ease: "power2.inOut",
            delay: 1.4,
            repeat: -1,
            repeatDelay: 0.6,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  console.log("[Hero] component rendered");

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        />

        {/* Content */}
        <div
          ref={contentRef}
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <h1
            className="font-[var(--font-inter)] font-light text-white leading-none"
            style={{
              fontSize: "clamp(4rem, 10vw, 9rem)",
              letterSpacing: "0.3em",
            }}
          >
            VALDÉ
          </h1>

          <p
            className="font-[var(--font-inter)] italic mt-5"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Gut aussehen. Ohne Aufwand.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div
            ref={scrollLineRef}
            className="w-px bg-white"
            style={{ height: "40px" }}
          />
          <span
            className="font-[var(--font-inter)] uppercase"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* Section separator */}
      <div className="w-full h-px bg-[#e8f0ea]" />
    </>
  );
}
