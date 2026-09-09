'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function useNavTheme() {
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let intersectionObserver: IntersectionObserver | null = null;

    const attachObserver = (sections: NodeListOf<HTMLElement>) => {
      intersectionObserver?.disconnect();

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible) {
            setIsWhiteBg(visible.target.getAttribute('data-nav-bg') === 'white');
          }
        },
        {
          rootMargin: '-80px 0px -80% 0px',
          threshold: 0,
        }
      );

      sections.forEach((section) => intersectionObserver!.observe(section));
    };

    const initialSections = document.querySelectorAll<HTMLElement>('[data-nav-bg]');
    if (initialSections.length > 0) {
      attachObserver(initialSections);
    }

    const mutationObserver = new MutationObserver(() => {
      const sections = document.querySelectorAll<HTMLElement>('[data-nav-bg]');
      if (sections.length > 0) {
        attachObserver(sections);
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      intersectionObserver?.disconnect();
    };
  }, [pathname]);

  return isWhiteBg;
}