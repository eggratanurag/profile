"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      // Allow native scrolling within containers
      wheelMultiplier: 1,
      touchMultiplier: 1,
      // Stop propagation for elements with specific classes
      stopPropagation: true,
    });

    // Log scroll position
    lenis.on("scroll", ({ scroll, progress }) => {
    });

    // Add event listeners to allow native scrolling in specific containers
    const handleWheel = (e) => {
      const target = e.target.closest('.spotify, .rotator, [data-lenis-prevent]');
      if (target) {
        e.stopPropagation();
        lenis.stop();
        // Resume lenis after a short delay
        setTimeout(() => {
          lenis.start();
        }, 100);
      }
    };

    const handleTouchStart = (e) => {
      const target = e.target.closest('.spotify, .rotator, [data-lenis-prevent]');
      if (target) {
        lenis.stop();
      }
    };

    const handleTouchEnd = (e) => {
      const target = e.target.closest('.spotify, .rotator, [data-lenis-prevent]');
      if (target) {
        // Resume lenis after touch interaction
        setTimeout(() => {
          lenis.start();
        }, 100);
      }
    };

    // Add event listeners
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      lenis.destroy();
    };
  }, []);

  return null;
}
