const GOLD_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DodLPeCWi7K3sh2I4WOhajBV2Jg0iQyzrXsK/Y4kuZBv6NQIZTRctrZa56RbaJUa4gQQCDdhxGbv5nTaK+wxXkAIcFJQ0DXoZEpYSNz2IVSs9g==";
const PLATINUM_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DofPrDoav76redcYszZJ4AG5oCoWuMHuByvustiwWeANtu6mgZxNTn7newhFpakE+znkfLUU9Ubq6+hsEzEo/P23blW7u34KtSt0OasuwlkN0g==";

const PreFooterCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden border-y border-primary/15" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container relative text-center max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
          Your Identity Won't <span className="text-cyan-glow">Protect Itself.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-5">
          <a
            href={GOLD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-primary text-primary text-sm sm:text-base font-semibold hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all"
          >
            Start Gold — $26.99/mo
          </a>
          <a
            href={PLATINUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-shadow"
          >
            Start Platinum — $36.99/mo
          </a>
        </div>
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-primary/80 font-medium">
          Monitor • Protect • Empower
        </p>
      </div>
    </section>
  );
};

export default PreFooterCTA;
