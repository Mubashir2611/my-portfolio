import * as React from "react"

const MOBILE_BREAKPOINT = 768
const EXTRA_SMALL_BREAKPOINT = 475

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useIsExtraSmall() {
  const [isExtraSmall, setIsExtraSmall] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${EXTRA_SMALL_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsExtraSmall(window.innerWidth < EXTRA_SMALL_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsExtraSmall(window.innerWidth < EXTRA_SMALL_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isExtraSmall
}
