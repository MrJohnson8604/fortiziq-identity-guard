import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is identity theft protection and why do I need it?",
    a: "Identity theft protection is a continuous monitoring service that watches your personal data — Social Security Number, credit profile, bank accounts, and digital identity — across credit bureaus and the dark web. With over 1 million identity theft cases reported every year, proactive monitoring is the difference between catching fraud in hours versus discovering it months later when the damage is already done.",
  },
  {
    q: "What's the difference between Gold and Platinum?",
    a: "Gold ($26.99/mo) includes 1-bureau credit monitoring, the full Identity Bundle, $1M insurance, and US-based resolution. Platinum ($36.99/mo) upgrades you to 3-bureau credit monitoring and reporting across Experian, Equifax, and TransUnion — giving you the most complete view of your credit profile possible.",
  },
  {
    q: "What happens if my identity is stolen?",
    a: "Our US-based recovery specialists take over the entire process. They contact creditors, file disputes, work with law enforcement, and restore your identity end-to-end. You're also covered by up to $1M in identity theft insurance, underwritten by AIG, to reimburse stolen funds, legal fees, and lost wages.",
  },
  {
    q: "Is my personal information secure with FortizIQ?",
    a: "Absolutely. FortizIQ is SOC 2 compliant and uses bank-grade AES-256 encryption for all data in transit and at rest. Your information is never sold, shared, or used for marketing — it's only used to monitor and protect your identity.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts, no cancellation fees, and no hidden charges. You can cancel your subscription at any time directly from your account dashboard.",
  },
  {
    q: "Is my $26.99 or $36.99 per month — what exactly am I paying for?",
    a: "Gold ($26.99/mo) gives you single-bureau credit monitoring, the full Identity Bundle (SSN, bank accounts, credit/debit, driver's license, medical ID, passport, email, phone, NCOA, sex offender), $1M in identity theft insurance, and US-based recovery — perfect for individuals who want strong, focused protection. Platinum ($36.99/mo) includes everything in Gold plus 3-bureau credit monitoring and reports across Experian, Equifax, and TransUnion, giving you the most complete view of your credit profile and the fastest possible fraud detection.",
  },
  {
    q: "What do I do if I think my identity is already stolen?",
    a: "Subscribe immediately and contact our US-based resolution specialists — included in both Gold and Platinum plans. They'll take over the entire restoration process: contacting creditors, filing fraud disputes, working with law enforcement, freezing accounts, and rebuilding your credit profile end-to-end. You're also covered by up to $1M in AIG-backed insurance to reimburse stolen funds, legal fees, and lost wages.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-24 md:py-32 relative">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 sm:mb-16">
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
  );
};

export default FAQ;
