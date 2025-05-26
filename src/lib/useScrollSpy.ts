// src/hooks/useScrollSpy.ts
import { useEffect, useState } from "react";

export default function useScrollSpy(selectors: string[], offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentId = "";
      for (const selector of selectors) {
        const el = document.querySelector(selector);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top < offset) currentId = selector.slice(1);
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectors, offset]);

  return activeId;
}