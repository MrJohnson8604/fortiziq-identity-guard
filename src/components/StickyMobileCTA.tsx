import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { track, getDevice, getViewportWidth } from "@/lib/analytics";

const PLATINUM_URL =
  "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DofPrDoav76redcYszZJ4AG5oCoWuMHuByvustiwWeANtu6mgZxNTn7newhFpakE+znkfLUU9Ubq6+hsEzEo/P23blW7u34KtSt0OasuwlkN0g==";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const impressionFired = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 600;
      setVisible(show);
      if (show && !impressionFired.current) {
        impressionFired.current = true;
        track("cta_impression", {
          cta_id: "sticky_mobile_bar",
          cta_location: "sticky_bottom",
          device: getDevice(),
          viewport_width: getViewportWidth(),
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    track("cta_click", {
      cta_id: "sticky_mobile_bar",
      cta_location: "sticky_bottom",
      destination: PLATINUM_URL,
      device: getDevice(),
      viewport_width: getViewportWidth(),
    });
  };

  return (
    <div
      className={`sm:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
      aria-hidden={!visible}
    >
      <div className="rounded-2xl border-2 border-primary/70 bg-card/95 backdrop-blur-md shadow-[0_-8px_30px_-10px_hsl(var(--primary)/0.5)] p-2.5 flex items-center gap-2.5">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
          <ShieldCheck className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] text-muted-foreground leading-tight">Protect your identity today</p>
          <p className="text-sm font-semibold text-foreground leading-tight">From $21.99/mo · $1M coverage</p>
        </div>
        <a
          href={PLATINUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          data-analytics-id="sticky_mobile_bar"
          className="shrink-0 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-[0_0_24px_hsl(var(--primary)/0.5)] active:scale-95 transition-transform"
        >
          Get Protected
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
