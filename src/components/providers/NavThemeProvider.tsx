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
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-bg]')
    );

    if (!sections.length) return;

    const updateTheme = () => {
      const navbarOffset = 20;

      let activeSection: HTMLElement | null = null;

      // First: find the section directly underneath the navbar
      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarOffset && rect.bottom > navbarOffset) {
          activeSection = section;
          break;
        }
      }

      // Fallback: find the section closest to the navbar
      if (!activeSection) {
        let closestDistance = Infinity;

        for (const section of sections) {
          const rect = section.getBoundingClientRect();

          const distance = Math.abs(rect.top - navbarOffset);

          if (distance < closestDistance) {
            closestDistance = distance;
            activeSection = section;
          }
        }
      }

      const shouldBeWhite =
        activeSection?.dataset.navBg === 'white';

      setIsWhiteBg((current) =>
        current === shouldBeWhite ? current : shouldBeWhite
      );
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        updateTheme();
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', updateTheme);

    updateTheme();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateTheme);
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