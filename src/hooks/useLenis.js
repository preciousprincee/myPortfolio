import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initializes Lenis smooth scrolling for the app lifetime, and makes it aware
 * of in-page anchor links (nav, dock, hero buttons). Without this, clicking
 * a link like href="#projects" triggers the browser's native instant jump,
 * which Lenis's own scroll-position tracking doesn't know about — the next
 * frame it renders can snap the page back toward its last known position,
 * making nav links look like they "don't work". Routing every hash click
 * through lenis.scrollTo() keeps Lenis and the real scroll position in sync.
 */
export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function handleAnchorClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: -84, duration: 1.1 });
      window.history.replaceState(null, "", hash);
    }
    document.addEventListener("click", handleAnchorClick);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [enabled]);
}
