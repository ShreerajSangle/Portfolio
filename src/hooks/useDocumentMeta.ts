import { useEffect } from "react";

const DEFAULT_TITLE = "Shreeraj Sangle — AI & Full-Stack Product Builder";
const DEFAULT_DESCRIPTION =
  "Shreeraj Sangle — MSc AI graduate and full-stack product builder working across machine learning, data analytics, and web engineering. Portfolio of AI systems, full-stack apps, and forecasting projects.";

/**
 * Sets document.title and the description meta tag for the current route.
 * No head-management library needed for a site this size — just a plain
 * effect that writes the two tags and restores the site defaults on
 * unmount, so navigating away from a project page doesn't leave its
 * title/description behind.
 */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? DEFAULT_DESCRIPTION;
    meta?.setAttribute("content", description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const previousOgTitle = ogTitle?.getAttribute("content") ?? DEFAULT_TITLE;
    ogTitle?.setAttribute("content", title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    const previousOgDescription = ogDescription?.getAttribute("content") ?? DEFAULT_DESCRIPTION;
    ogDescription?.setAttribute("content", description);

    return () => {
      document.title = DEFAULT_TITLE;
      meta?.setAttribute("content", previousDescription);
      ogTitle?.setAttribute("content", previousOgTitle);
      ogDescription?.setAttribute("content", previousOgDescription);
    };
  }, [title, description]);
}
