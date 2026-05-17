import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";
import { track, getDevice, getViewportWidth } from "@/lib/analytics";

const CREDIT_REPORT_URL =
  "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DoeVI/RgAiaiSO1J1IcIJzmMtIvc0QIthpZP+kEIE0FXu3aNkCY/JI6SUo1eBFXjseoNow040w7j9bgtoDs7+vjMniFsETB+Y+gIZ1IrkH8aXQ==";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const [isTiny, setIsTiny] = useState(false);
  const impressionFired = useRef(false);

  useEffect(() => {
    const onResize = () => setIsTiny(window.innerWidth < 380);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 600;
      setVisible(show);
      if (show && !impressionFired.current) {
        impressionFired.current = true;
        track("cta_impression", {
          cta_id: "sticky_mobile_credit_report",
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
      cta_id: "sticky_mobile_credit_report",
      cta_location: "sticky_bottom",
      destination: CREDIT_REPORT_URL,
      price: "20",
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
      <div className="rounded-2xl border-2 border-primary/70 bg-card/95 backdrop-blur-md shadow-[0_-8px_30px_-10px_hsl(var(--primary)/0.5)] p-2.5 flex items-center gap-2">
        <div className="shrink-0 w-9 h-9 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
          <FileText className="h-4.5 w-4.5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-muted-foreground leading-tight">
            One-time · <span className="font-bold text-primary">$20</span> · No subscription
          </p>
          <p className="text-[13px] font-semibold text-foreground leading-tight truncate">
            {isTiny ? "3 Reports + 3 Scores" : "All 3 Reports + All 3 Scores"}
          </p>
        </div>
        <a
          href={CREDIT_REPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          data-analytics-id="sticky_mobile_credit_report"
          className="shrink-0 px-3.5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold active:scale-95 transition-transform animate-glow-pulse whitespace-nowrap"
        >
          {isTiny ? "$20" : "Get · $20"}
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
