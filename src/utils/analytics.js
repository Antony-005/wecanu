import { siteConfig } from "../data/content";

// Loads GA4's gtag.js once, only in production, and only if a real
// Measurement ID has been set (skips silently on the placeholder so
// nothing breaks in local dev before you've created the GA4 property).
export function initAnalytics() {
  if (import.meta.env.DEV) return;
  const id = siteConfig.gaMeasurementId;
  if (!id || id === "G-XXXXXXXXXX") return;
  if (window.gtag) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false });
}

export function trackPageView(path) {
  const id = siteConfig.gaMeasurementId;
  if (!window.gtag || !id || id === "G-XXXXXXXXXX") return;
  window.gtag("event", "page_view", {
    page_path: path,
    send_to: id,
  });
}