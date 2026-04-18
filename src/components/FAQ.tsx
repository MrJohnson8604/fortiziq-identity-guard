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
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Questions, answered.</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="card-tech rounded-2xl px-6 border-primary/15 data-[state=open]:border-primary/50 data-[state=open]:glow-soft transition-all"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline hover:text-primary [&>svg]:text-primary [&>svg]:h-5 [&>svg]:w-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
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
