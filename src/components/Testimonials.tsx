import { Star } from "lucide-react";

const testimonials = [
  { name: "Michael R.", location: "Texas", quote: "Setup took five minutes and I got an alert about a breach the next morning. FortizIQ caught what my bank didn't." },
  { name: "Sandra L.", location: "Florida", quote: "When my SSN showed up on the dark web, their US-based team handled everything. I never had to make a single panicked phone call." },
  { name: "James T.", location: "Ohio", quote: "Having all three bureaus monitored in one dashboard is exactly what I needed. The interface is clean and the alerts are instant." },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Trusted Nationwide</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Real members. Real peace of mind.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-tech card-tech-hover rounded-2xl p-7">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="pt-5 border-t border-primary/15">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
