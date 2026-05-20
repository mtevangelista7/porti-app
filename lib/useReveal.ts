"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const fallback = setTimeout(() => setSeen(true), 250);
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      return () => clearTimeout(fallback);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            clearTimeout(fallback);
            setSeen(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(ref.current);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return [ref, seen] as const;
}
