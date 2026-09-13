import { useEffect, useState } from 'react'

function useIsDesktop(breakpoint = 1024, minHeight = 900) {
  const getQuery = () =>
    `(min-width: ${breakpoint}px), (min-height: ${minHeight}px)`

  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return false 
    return window.matchMedia(getQuery()).matches
  })

  useEffect(() => {
    const mq = window.matchMedia(getQuery())
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', listener)
    return () => mq.removeEventListener('change', listener)
  }, [breakpoint, minHeight])

  return isDesktop
}

export default useIsDesktop