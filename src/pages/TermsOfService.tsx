import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import logo from "@/assets/fortiziq-shield.png";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | FortizIQ";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-primary/15">
        <div className="container py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="FortizIQ" className="h-9 w-9 rounded-full" />
            <span className="font-display font-bold text-lg text-chrome">FortizIQ</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="container py-16 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-chrome mb-3">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By subscribing to or using FortizIQ services, you agree to be bound by these Terms of Service
              and our Privacy Policy. If you do not agree, do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">2. Eligibility</h2>
            <p>
              You must be at least 18 years old, a US resident, and have a valid Social Security Number to
              subscribe to FortizIQ identity protection services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">3. Subscription & Billing</h2>
            <p className="mb-3">
              FortizIQ subscriptions are billed monthly at the rate displayed at signup ($26.99/mo for Gold,
              $36.99/mo for Platinum). Subscriptions auto-renew until canceled.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may cancel anytime from your account dashboard with no cancellation fee.</li>
              <li>Cancellations take effect at the end of the current billing cycle.</li>
              <li>We do not offer prorated refunds for partial months.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">4. Services Provided</h2>
            <p>
              FortizIQ provides credit monitoring (1- or 3-bureau depending on plan), dark web monitoring,
              SSN monitoring, real-time fraud alerts, US-based recovery specialist support, and identity
              theft insurance underwritten by AIG. Coverage limits and terms are subject to the master
              insurance policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">5. No Guarantee Against Identity Theft</h2>
            <p>
              While FortizIQ uses industry-leading monitoring tools, no service can guarantee prevention of
              identity theft. Our role is to detect, alert, and assist with recovery. You remain responsible
              for safeguarding your credentials and personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">6. Insurance Coverage</h2>
            <p>
              Identity theft insurance is provided under a master policy issued by AIG. Coverage is subject
              to policy terms, conditions, and exclusions. Coverage is not available in all jurisdictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">7. Acceptable Use</h2>
            <p>
              You agree not to misuse our services, attempt to access another user's account, reverse
              engineer our platform, or use FortizIQ for any unlawful purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, FortizIQ's total liability for any claim arising from
              these Terms or your use of our services is limited to the amount you paid us in the 12 months
              preceding the claim, plus any applicable insurance coverage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">9. Changes to These Terms</h2>
            <p>
              We may update these Terms periodically. Material changes will be communicated by email or
              through the service at least 30 days before taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">10. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href="mailto:legal@fortiziq.com" className="text-primary hover:underline">
                legal@fortiziq.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
