import { FileText, Check, X } from "lucide-react";

const REPORT_URL = "https://www.identityprotection-services.com/0.NewAccounts/Register.aspx?ID=JWsYxCTa8+ui/RTaN3TMEHPjiJ30+ASRm0lMtgV9DoeVI/RgAiaiSO1J1IcIJzmMtIvc0QIthpZP+kEIE0FXu3aNkCY/JI6SUo1eBFXjseoNow040w7j9bgtoDs7+vjMniFsETB+Y+gIZ1IrkH8aXQ==";

const bureauCards = [
  {
    title: "Experian",
    body: "Your complete Experian credit report — every account, inquiry, and piece of history on file — plus your actual Experian credit score. Both included.",
  },
  {
    title: "Equifax",
    body: "Your full Equifax credit report and your Equifax credit score. Equifax is one of the most commonly used bureaus by mortgage lenders.",
  },
  {
    title: "TransUnion",
    body: "Your complete TransUnion credit report and your TransUnion credit score. Some lenders and landlords check only TransUnion — so this one matters more than most people realize.",
  },
];

const useCases = [
  {
    icon: "🏠",
    title: "Buying or refinancing a home",
    body: "Mortgage lenders almost always check all three bureaus and use the middle score to set your rate. A difference of even 20 points can cost you thousands over the life of your loan — or change whether you're approved at all.",
  },
  {
    icon: "🚗",
    title: "Financing a car",
    body: "Auto lenders often check one specific bureau. Knowing all three scores means you walk into the dealership knowing exactly what rate you qualify for — before they tell you.",
  },
  {
    icon: "💳",
    title: "Applying for a credit card or loan",
    body: "Different lenders pull from different bureaus. Seeing all three means no surprises when they run their check.",
  },
  {
    icon: "🏢",
    title: "Applying for an apartment or a job",
    body: "Many landlords check credit before approving a lease. Some employers do too. Make sure your report is accurate before someone else reviews it.",
  },
  {
    icon: "🛡️",
    title: "Concerned about identity theft",
    body: "Accounts you don't recognize, addresses you've never lived at, or credit checks you didn't authorize are early warning signs. Reviewing all three reports is the fastest way to catch them early.",
  },
  {
    icon: "📋",
    title: "It's just been a while",
    body: "Most financial experts recommend reviewing your credit at least once a year. If you haven't looked recently, right now is the right time.",
  },
];

const comparisonRows = [
  {
    option: "Free annual reports (federally provided)",
    reports: { ok: true, label: "All 3 bureaus" },
    scores: { ok: false, label: "Not included" },
    cost: "Free — but incomplete",
  },
  {
    option: "Buying scores separately from each bureau",
    reports: { ok: false, label: "Not included" },
    scores: { ok: true, label: "One bureau at a time" },
    cost: "$15–$20 per bureau",
  },
  {
    option: "myFICO 3-bureau bundle",
    reports: { ok: true, label: "All 3 bureaus" },
    scores: { ok: true, label: "All 3 scores" },
    cost: "$59.85+ per pull",
  },
];

const CreditReportInfo = () => {
  return (
    <section id="credit-report-info" className="py-20 sm:py-24 md:py-32 relative scroll-mt-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Credit Report + Scores
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your Free Credit Report Doesn't Include Your Score. Ours Does.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Get your full credit report AND your credit score from all three credit bureaus — Experian, Equifax, and TransUnion — in a single, one-time purchase. No subscription. No recurring charges.
          </p>
        </div>

        {/* Callout banner */}
        <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5 max-w-2xl mx-auto text-sm text-foreground/80 mb-12">
          💡 Did you know? The free credit reports you're entitled to by law do not come with your scores. To get your score from each bureau separately, you would pay an additional $15–$20 per bureau on top of the report cost. FortizIQ gives you both — the full report AND the score — from all three bureaus, in one secure, one-time purchase.
        </div>

        {/* Problem block */}
        <div className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-16 space-y-4">
          <h3 className="text-foreground font-semibold text-xl mb-4 text-center">
            Here's What Most People Find Out Too Late
          </h3>
          <p>A credit report and a credit score are two completely different things — and most places only give you one.</p>
          <p>Your credit REPORT is your full history — every account you've opened, every payment you've made or missed, and every time a lender has checked your credit.</p>
          <p>Your credit SCORE is the number lenders actually use when deciding whether to approve you — and at what interest rate.</p>
          <p>You need both. And you need them from all three bureaus, because Experian, Equifax, and TransUnion each keep a separate file on you. Your score can look different at each one, and different lenders check different bureaus.</p>
          <p>Seeing only one is like checking the weather in one city when you're traveling to three.</p>
        </div>

        {/* What's included cards */}
        <h3 className="text-center font-semibold text-lg mb-8">What This One Purchase Gives You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bureauCards.map((c) => (
            <div key={c.title} className="card-tech rounded-3xl p-6 sm:p-8">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center mb-4">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <span className="inline-block bg-primary/10 text-primary text-xs rounded-full px-2 py-0.5 mb-3">
                Report + Score
              </span>
              <h4 className="font-display text-xl font-bold mb-2">{c.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <h3 className="text-center font-semibold text-lg mt-16 mb-6">How Does FortizIQ Compare?</h3>
        <div className="max-w-4xl mx-auto card-tech rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/15 text-foreground">
                  <th className="text-left p-4 font-semibold">Option</th>
                  <th className="text-left p-4 font-semibold">Reports</th>
                  <th className="text-left p-4 font-semibold">Scores</th>
                  <th className="text-left p-4 font-semibold">Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.option} className="border-b border-primary/10 text-muted-foreground">
                    <td className="p-4 text-foreground/90">{r.option}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5">
                        {r.reports.ok ? <Check className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-destructive" />}
                        {r.reports.label}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5">
                        {r.scores.ok ? <Check className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-destructive" />}
                        {r.scores.label}
                      </span>
                    </td>
                    <td className="p-4">{r.cost}</td>
                  </tr>
                ))}
                <tr className="bg-primary text-primary-foreground border-l-4 border-primary">
                  <td className="p-4 font-semibold">FortizIQ One-Time Credit Report</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4" /> All 3 bureaus
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4" /> All 3 scores
                    </span>
                  </td>
                  <td className="p-4">One simple price — see below ↓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3 italic max-w-3xl mx-auto">
          *The free annual report site is legitimate and we encourage using it. This purchase is for people who want the complete picture — reports and scores together — in one place, right now.
        </p>

        {/* Who should do this */}
        <h3 className="text-center font-semibold text-lg mt-16 mb-8">Is Right Now a Good Time to Check?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((u) => (
            <div key={u.title} className="card-tech rounded-3xl p-6 sm:p-8">
              <div className="text-3xl mb-3">{u.icon}</div>
              <h4 className="font-display text-lg font-bold mb-2">{u.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">
            Don't Just Know Your Report. Know Your Score.
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            All three reports. All three scores. One purchase. No subscription. Delivered right after you confirm who you are.
          </p>
          <a
            href={REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-all"
          >
            Get My Reports + Scores Now →
          </a>
          <p className="text-xs text-muted-foreground text-center mt-3">
            🔒 Protected the entire way through — the same way your bank protects your account. Your information is never sold or shared.
          </p>
          <a href="#pricing" className="block text-xs text-primary text-center mt-4 hover:underline">
            Ready to compare plans? See pricing below ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreditReportInfo;
