declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

export const track = (event: string, params: Record<string, any>) => {
  try {
    window.gtag?.("event", event, params);
    window.dataLayer?.push({ event, ...params });
    window.clarity?.("event", event);
  } catch {}
};

export const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;

export const getDevice = () => (isMobileViewport() ? "mobile" : "desktop");

export const getViewportWidth = () =>
  typeof window !== "undefined" ? window.innerWidth : 0;
