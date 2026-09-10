import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on route changes that aren't just a hash jump. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
