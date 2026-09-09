'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';

const NavThemeContext = createContext(false);

export function NavThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      '[data-nav-bg]'
    );

    if (!sections.length) return;

    const updateTheme = () => {
      const navbarOffset = 80;

      let activeSection: HTMLElement | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= navbarOffset &&
          rect.bottom > navbarOffset
        ) {
          activeSection = section;
        }
      });
      // @ts-expect-error type missing
      const shouldBeWhite = activeSection?.getAttribute('data-nav-bg') === 'white';

      setIsWhiteBg((current) => {
        if (current === shouldBeWhite) {
          return current;
        }

        return shouldBeWhite;
      });
    };

    const observer = new IntersectionObserver(
      () => {
        requestAnimationFrame(updateTheme);
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', updateTheme, {
      passive: true,
    });

    requestAnimationFrame(updateTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateTheme);
    };
  }, [pathname]);

  return (
    <NavThemeContext.Provider value={isWhiteBg}>
      {children}
    </NavThemeContext.Provider>
  );
}

export function useNavTheme() {
  return useContext(NavThemeContext);
}