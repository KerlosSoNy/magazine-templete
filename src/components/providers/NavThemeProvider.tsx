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
    const updateTheme = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-nav-bg]');
      if (!sections.length) return;
      const navbarOffset = 20;
      let activeSection: HTMLElement | null = null;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarOffset && rect.bottom > navbarOffset) {
          activeSection = section;
          break;
        }
      }
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
    const observer = new MutationObserver(handleScroll);
    observer.observe(document.body, { childList: true, subtree: true });

    updateTheme();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateTheme);
      observer.disconnect();
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