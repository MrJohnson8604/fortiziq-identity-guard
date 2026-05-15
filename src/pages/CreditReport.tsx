import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, BarChart3, Lock, Zap, CheckCircle2, MousePointerClick, ShieldCheck, Sparkles, Home, Car, CreditCard, Building2, ShieldAlert, ClipboardList } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CircuitBackground from "@/components/CircuitBackground";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PURCHASE_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DoeVI/RgAiaiSO1J1IcIJzmMtIvc0QIthpZP+kEIE0FXu3aNkCY/JI6SUo1eBFXjseoNow040w7j9bgtoDs7+vjMniFsETB+Y+gIZ1IrkH8aXQ==";

const CTA = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={PURCHASE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex max-w-full items-center justify-center text-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-shadow ${className}`}
  >
    {children}
  </a>
);

const bureaus = [
  { name: "Experian", body: "Your complete Experian credit report — every account, inquiry, and piece of history on file — plus your Experian credit score. Both included." },
  { name: "Equifax", body: "Your complete Equifax credit report and your Equifax credit score. Equifax is one of the most commonly used bureaus by mortgage lenders." },
  { name: "TransUnion", body: "Your complete TransUnion credit report and your TransUnion credit score. Some lenders and landlords check only TransUnion — so this one matters more than most people realize." },
];

const supports = [
  { icon: Lock, title: "Encrypted & Secure", body: "Your information is protected the entire way through — the same level of security used by major banks and financial institutions." },
  { icon: Zap, title: "Delivered Instantly", body: "As soon as your identity is confirmed, your reports and scores are available right away. No waiting, no mailing." },
  { icon: CheckCircle2, title: "One-Time Purchase Only", body: "You are charged once and only once. There is no subscription, no automatic renewal, and no hidden fees." },
];

const comparison = [
  { option: "AnnualCreditReport.com (free by law)", reports: "All 3 bureaus", scores: "No scores included", cost: "Free — but incomplete", reportsOk: true, scoresOk: false },
  { option: "Buy scores separately from each bureau", reports: "Not included", scores: "One bureau at a time", cost: "$15–$20 per bureau", reportsOk: false, scoresOk: true },
  { option: "myFICO 3-Bureau Bundle", reports: "All 3 bureaus", scores: "All 3 scores", cost: "$59.85+ per pull", reportsOk: true, scoresOk: true },
  { option: "FortizIQ One-Time Purchase", reports: "All 3 bureaus", scores: "All 3 scores", cost: "One simple price at checkout", reportsOk: true, scoresOk: true, highlight: true },
];

const steps = [
  { icon: MousePointerClick, title: "Click the Button Below", body: "You'll be taken to our secure checkout. The whole process takes just a few minutes." },
  { icon: ShieldCheck, title: "Confirm Who You Are", body: "You'll answer a few quick questions to verify your identity. This is required by law before anyone — including you — can pull your official credit reports. It keeps your information safe." },
  { icon: Zap, title: "Get Your Reports and Scores Instantly", body: "All three credit reports and all three credit scores are delivered right away. Review them at your own pace and know exactly where you stand." },
];

const stats = [
  { stat: "3 Reports + 3 Scores", desc: "One purchase. Complete picture." },
  { stat: "100M+", desc: "Members protected on our platform" },
  { stat: "Instant Access", desc: "Delivered right after identity confirmation" },
];

const audiences = [
  { icon: Home, title: "You're buying or refinancing a home", body: "Mortgage lenders almost always check all three bureaus and use the middle score to set your rate. A difference of even 20 points could cost you thousands over the life of your loan — or change whether you're approved at all. Know your numbers first." },
  { icon: Car, title: "You're financing a car", body: "Auto lenders often check TransUnion or Equifax specifically. Knowing all three scores lets you walk into the dealership knowing exactly what rate you qualify for — before they tell you." },
  { icon: CreditCard, title: "You're applying for a credit card or loan", body: "Different lenders pull from different bureaus. Seeing all three means no surprises when they run their check." },
  { icon: Building2, title: "You're applying for an apartment or a job", body: "Many landlords check credit before approving a lease. Some employers do too. Make sure your report is accurate before someone else reviews it." },
  { icon: ShieldAlert, title: "You're worried about identity theft", body: "Unfamiliar accounts, addresses you've never lived at, or credit checks you didn't authorize are early warning signs of fraud. Reviewing all three reports is the fastest way to catch them — often before the damage gets worse." },
  { icon: ClipboardList, title: "It's just been a while", body: "Most financial experts recommend reviewing your credit at least once a year. If you haven't looked recently, right now is the right time." },
];

const faqs = [
  { q: "Is this really a one-time purchase?", a: "Yes. You are charged one time, at checkout, for $20. There is no subscription, no trial that converts into a recurring plan, and no automatic renewal. You will not see another charge from us unless you choose to come back and buy another report or sign up for one of our monthly monitoring plans." },
  { q: "What happens immediately after I check out?", a: "Right after your payment goes through, you'll be asked a few quick identity-verification questions. This is required by law before anyone — including you — can pull official credit reports. Once your identity is confirmed (usually within a couple of minutes), all three credit reports and all three credit scores are unlocked in your account right away. No waiting, no email delays, no mailed paperwork." },
  { q: "Where do I view my reports and scores after I buy?", a: "You'll be taken straight into your secure account as soon as identity verification finishes. Your full Experian, Equifax, and TransUnion reports — plus your score from each bureau — are all displayed there. You can review them at your own pace and come back to view them again any time using your login." },
  { q: "Will I be charged again later?", a: "No. This purchase is a single charge of $20 and that's it. We do not store anything that would allow a recurring charge. If you ever want a fresh pull in the future, you would need to come back and choose to buy another one." },
  { q: "What if my identity verification fails or I get stuck at checkout?", a: "If the verification questions don't go through on the first try, you'll be given another chance or guided to an alternate way to confirm who you are. If anything still doesn't work, our United States-based support team can help you finish the process — and if we can't deliver your reports, you are not charged." },
  { q: "What's the difference between a credit report and a credit score?", a: "Your credit report is your full history — every account you've opened, every payment you've made or missed, and every time a lender checked your credit. Your credit score is a single number calculated from that history that lenders use to make quick decisions. You need both — and they're sold separately almost everywhere else. This purchase gives you both, from all three bureaus." },
  { q: "Why do I need all three bureaus — can't I just check one?", a: "Each bureau — Experian, Equifax, and TransUnion — keeps its own separate file on you. Not every company reports to all three, so your history and score can look different at each one. Different lenders check different bureaus. Seeing all three is the only way to have the full picture — and the only way to make sure there are no errors hiding at a bureau you haven't checked." },
  { q: "Will checking my own credit lower my score?", a: "No. Checking your own credit — what's called a 'soft check' — has zero effect on your score. Only applications for new credit, like a loan or credit card, count as a 'hard check' that can temporarily affect your score." },
  { q: "Is my personal information safe?", a: "Yes. Everything is processed through a fully protected platform that meets the same independently verified security standards used by major banks and financial institutions. Your information is never sold, never shared with marketers, and only used to pull your credit reports." },
  { q: "What if I want to keep monitoring my credit going forward?", a: "Ongoing credit monitoring and full identity protection plans start at $21.99/month. After your one-time report, you'll have the option to add ongoing monitoring if you'd like — but it's completely optional." },
];

const CreditReport = () => {
  useEffect(() => {
    document.title = "3-Bureau Credit Report + Scores | FortizIQ";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <CircuitBackground />
        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[11px] sm:text-xs font-medium text-primary mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            One-Time Purchase • No Subscription
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-6 animate-fade-up">
            Your Free Credit Report Doesn't Include Your Score. <span className="text-cyan-glow">Ours Does.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up">
            Get your full credit report AND your credit score from all three bureaus — Experian, Equifax, and TransUnion — in one secure, one-time purchase. No subscription. No recurring charges. No surprises.
          </p>

          <div className="card-tech rounded-2xl p-5 sm:p-6 max-w-3xl mx-auto mb-8 text-left border-l-4 border-l-primary">
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              <span className="font-semibold text-primary">💡 Did you know?</span> The free credit reports you're entitled to by law don't come with your scores. To get your scores separately from each bureau, you'd pay an additional <span className="font-semibold">$15–$20 per bureau</span> — on top of the report. FortizIQ gives you both, from all three bureaus, together, at one simple price.
            </p>
          </div>

          <CTA>Get My Reports + Scores Now →</CTA>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 sm:py-24 relative">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Reality</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Here's What Most People Don't Know About Their Credit</h2>
          </div>
          <div className="card-tech rounded-2xl p-6 sm:p-8 space-y-4 text-muted-foreground leading-relaxed text-base">
            <p>You may have heard that you're entitled to a free credit report every year. That's true. But here's what most people find out too late:</p>
            <p className="text-foreground font-semibold">That free report does not include your credit score.</p>
            <p>Your report and your score are two completely different things:</p>
            <ul className="space-y-2 pl-5 list-disc marker:text-primary">
              <li>Your credit <span className="text-foreground font-semibold">REPORT</span> is the full history — every account, every payment, every time someone checked your credit, and any negative marks.</li>
              <li>Your credit <span className="text-foreground font-semibold">SCORE</span> is the number lenders actually use to make decisions — approve or deny, and at what interest rate.</li>
            </ul>
            <p>You need both. And you need them from all three bureaus — because Experian, Equifax, and TransUnion each keep a separate file on you. Your score can be meaningfully different at each one, and different lenders check different bureaus.</p>
            <p className="italic text-foreground/80">Seeing only one bureau is like checking the weather in one city when you're traveling to three.</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 sm:py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">What's Included</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What You Get — Report AND Score from Every Bureau</h2>
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-12">
            Each bureau is a separate company that tracks your credit independently. Here's exactly what this one purchase includes:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-6">
            {bureaus.map((b) => (
              <div key={b.name} className="relative rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-primary/10 to-card border-2 border-primary/40 hover:border-primary transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-[11px] font-bold uppercase tracking-wider text-primary mb-3">
                  Report + Score
                </span>
                <h3 className="font-display text-2xl font-bold mb-2">{b.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {supports.map((s) => (
              <div key={s.title} className="card-tech card-tech-hover rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE COMPARISON */}
      <section className="py-20 sm:py-24 relative">
        <div className="container max-w-5xl">
          <div className="text-center mb-4">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">Comparison</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What Does It Actually Cost to Get This Elsewhere?</h2>
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-10">
            Here's how FortizIQ compares to the alternatives most people don't know they're missing:
          </p>

          <div className="card-tech rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-primary/20 bg-primary/5">
                    <th className="text-left p-4 font-display font-bold">Option</th>
                    <th className="text-left p-4 font-display font-bold">Reports</th>
                    <th className="text-left p-4 font-display font-bold">Scores</th>
                    <th className="text-left p-4 font-display font-bold">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr
                      key={row.option}
                      className={`border-b border-primary/10 last:border-0 ${
                        row.highlight ? "bg-primary text-primary-foreground" : ""
                      }`}
                    >
                      <td className="p-4 font-semibold">{row.option}</td>
                      <td className="p-4">{row.reportsOk ? "✅" : "❌"} {row.reports}</td>
                      <td className="p-4">{row.scoresOk ? "✅" : "❌"} {row.scores}</td>
                      <td className="p-4">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-muted-foreground italic text-center mt-6 max-w-3xl mx-auto">
            *AnnualCreditReport.com is a legitimate federally mandated site. We encourage using it. This page is for people who want the complete picture — reports AND scores — in one place, at one time.
          </p>

          <div className="text-center mt-10">
            <CTA>Get the Complete Picture →</CTA>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-24 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it Works</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Three Simple Steps to Your Full Credit Picture</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.title} className="card-tech card-tech-hover rounded-2xl p-6 sm:p-7 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
                    <div className="relative w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <span className="font-display text-4xl font-bold text-chrome opacity-40">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-16 relative">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {stats.map((s) => (
              <div key={s.stat} className="card-tech rounded-2xl p-6 text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-cyan-glow mb-2">{s.stat}</div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            Your information is protected by the same independently verified security standards used by major financial institutions. It is never sold, never shared, and only used to retrieve your reports.
          </p>
        </div>
      </section>

      {/* WHO SHOULD DO THIS */}
      <section className="py-20 sm:py-24 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">Who It's For</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Is Right Now a Good Time to Check?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {audiences.map((a) => (
              <div key={a.title} className="card-tech card-tech-hover rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-primary rounded-r-full shadow-[0_0_18px_hsl(var(--primary)/0.8)]" />
                <div className="pl-2">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{a.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 relative">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Questions, answered.</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-tech rounded-2xl px-4 sm:px-6 border-primary/15 data-[state=open]:border-primary/50 data-[state=open]:glow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold hover:no-underline hover:text-primary [&>svg]:text-primary [&>svg]:h-5 [&>svg]:w-5 gap-3">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="container relative text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-wider text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Complete Picture
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Don't Just Know Your Report. <span className="text-cyan-glow">Know Your Score.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8">
            Most people check one. Most people check none. Get the complete picture — all three reports, all three scores — in one secure, one-time purchase.
          </p>
          <CTA>Get My 3-Bureau Reports + Scores Now →</CTA>
          <p className="text-xs text-muted-foreground mt-5">
            🔒 Encrypted and secure&nbsp;&nbsp;|&nbsp;&nbsp;No subscription&nbsp;&nbsp;|&nbsp;&nbsp;Your information is never sold or shared
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditReport;
