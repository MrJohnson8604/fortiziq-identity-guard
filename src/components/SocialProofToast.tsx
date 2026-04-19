import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

const messages = [
  "Marcus from Houston just subscribed to Platinum",
  "Jennifer from Atlanta just subscribed to Gold",
  "David from Phoenix just upgraded to Platinum",
  "Sarah from Denver just subscribed to Platinum",
  "Robert from Chicago just subscribed to Gold",
  "Emily from Miami just upgraded to Platinum",
  "James from Seattle just subscribed to Gold",
  "Linda from Boston just subscribed to Platinum",
];

const SocialProofToast = () => {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 6000);
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % messages.length);
        setVisible(true);
      }, 500);
    }, 25000);
    return () => {
      clearTimeout(show);
      clearInterval(cycle);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-[280px] sm:max-w-xs transition-all duration-500 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="card-tech rounded-xl px-4 py-3 border-l-4 border-l-primary flex items-start gap-3 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)]">
        <div className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
          <Lock className="h-3.5 w-3.5 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-foreground/90 leading-snug">{messages[i]}</p>
          <p className="text-[10px] text-muted-foreground mt-1">Just now</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
