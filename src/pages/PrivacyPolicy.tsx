import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import logo from "@/assets/fortiziq-shield.png";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | FortizIQ";
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
        <h1 className="font-display text-4xl md:text-5xl font-bold text-chrome mb-3">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              FortizIQ ("we," "us," or "our") is committed to protecting the privacy of our subscribers. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              use our identity protection, credit monitoring, and dark web monitoring services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-3">To provide our monitoring services, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identifiers: name, address, date of birth, Social Security Number</li>
              <li>Financial information: credit file data from the three major bureaus</li>
              <li>Account credentials and email addresses for dark web monitoring</li>
              <li>Payment information processed by our PCI-compliant payment provider</li>
              <li>Device, browser, and usage data when you access our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <p>
              We use your information to monitor your credit file, scan the dark web for compromised
              credentials, deliver real-time alerts, provide US-based recovery support, process payments,
              and comply with our legal and regulatory obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">4. Information Sharing</h2>
            <p>
              We share your information only with credit bureaus, our identity theft insurance underwriter
              (AIG), recovery specialists, and service providers strictly as necessary to deliver our
              services. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">5. Data Security</h2>
            <p>
              FortizIQ maintains SOC 2-aligned controls including encryption in transit and at rest,
              least-privilege access, and continuous security monitoring to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p>
              Depending on your state of residence, you may have the right to access, correct, delete, or
              port your personal information, and to opt out of certain processing activities. Contact us
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">7. Retention</h2>
            <p>
              We retain your information for as long as your subscription is active and as required by law.
              You may cancel anytime, after which we will delete or anonymize your data per our retention schedule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">8. Contact Us</h2>
            <p>
              Questions about this Privacy Policy? Email us at{" "}
              <a href="mailto:privacy@fortiziq.com" className="text-primary hover:underline">
                privacy@fortiziq.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
