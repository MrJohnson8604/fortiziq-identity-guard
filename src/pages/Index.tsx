import { useEffect, lazy, Suspense, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import SEO from "@/components/SEO";

// Auto-recover from stale chunk errors after a deploy by reloading once.
const lazyWithRetry = <T,>(factory: () => Promise<{ default: React.ComponentType<T> }>) =>
  lazy(async () => {
    try {
      return await factory();
    } catch (err) {
      const key = "chunk-reload-attempted";
      if (typeof window !== "undefined" && !sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
        // Return a never-resolving promise while the page reloads.
        return await new Promise<{ default: React.ComponentType<T> }>(() => {});
      }
      throw err;
    }
  });

// Lazy-load below-the-fold components
const FearRelief = lazyWithRetry(() => import("@/components/FearRelief"));
const HowItWorks = lazyWithRetry(() => import("@/components/HowItWorks"));
const Features = lazyWithRetry(() => import("@/components/Features"));

const CreditReportInfo = lazyWithRetry(() => import("@/components/CreditReportInfo"));
const LoginSection = lazyWithRetry(() => import("@/components/LoginSection"));
const ComparisonTable = lazyWithRetry(() => import("@/components/ComparisonTable"));
const Testimonials = lazyWithRetry(() => import("@/components/Testimonials"));
const FAQ = lazyWithRetry(() => import("@/components/FAQ"));
const PreFooterCTA = lazyWithRetry(() => import("@/components/PreFooterCTA"));
const Footer = lazyWithRetry(() => import("@/components/Footer"));
const SocialProofToast = lazyWithRetry(() => import("@/components/SocialProofToast"));
const ExitIntentPopup = lazyWithRetry(() => import("@/components/ExitIntentPopup"));
const StickyMobileCTA = lazyWithRetry(() => import("@/components/StickyMobileCTA"));

// Renders children only when the placeholder scrolls near the viewport
const LazySection = ({
  children,
  id,
  minHeight = "400px",
  rootMargin = "300px",
}: {
  children: React.ReactNode;
  id?: string;
  minHeight?: string;
  rootMargin?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div id={id} ref={ref} className="scroll-mt-16" style={!visible ? { minHeight } : undefined}>
      {visible ? (
        <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>
      ) : null}
    </div>
  );
};

const HAS_VISITED_KEY = "fortiziq_has_visited_v3";

const Index = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const shouldScrollToPricing =
      window.location.hash === "#pricing" ||
      (!window.location.hash && !localStorage.getItem(HAS_VISITED_KEY));

    if (!shouldScrollToPricing) {
      window.scrollTo(0, 0);
      return;
    }

    localStorage.setItem(HAS_VISITED_KEY, "true");
    window.scrollTo(0, 0);

    // Poll until the pricing cards exist, then force-scroll after layout settles.
    let attempts = 0;
    const tick = () => {
      attempts++;
      const el = document.getElementById("pricing") || document.getElementById("pricing-cards");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 12;
        window.scrollTo({ top, behavior: "auto" });
        requestAnimationFrame(() => window.scrollTo({ top, behavior: "smooth" }));
        return;
      }
      if (attempts < 60) setTimeout(tick, 100);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 sm:pb-0">
      <SEO
        title="FortizIQ | Identity Protection & Credit Monitoring"
        description="FortizIQ monitors your credit, SSN, and the dark web 24/7. Up to $1M identity theft coverage with US-based recovery specialists. Plans from $21.99/mo."
        path="/"
      />
      <Navbar />
      <main>
        <Hero />
        <LazySection><FearRelief /></LazySection>
        <LazySection id="how"><HowItWorks /></LazySection>
        <LazySection id="features"><Features /></LazySection>
        <LazySection><CreditReportInfo /></LazySection>
        <div><Pricing /></div>
        <LazySection><ComparisonTable /></LazySection>
        <LazySection><Testimonials /></LazySection>
        <LazySection><LoginSection /></LazySection>
        <LazySection id="faq"><FAQ /></LazySection>
        <LazySection minHeight="200px"><PreFooterCTA /></LazySection>
      </main>
      <LazySection minHeight="200px"><Footer /></LazySection>
      <Suspense fallback={null}>
        <SocialProofToast />
        <ExitIntentPopup />
        <StickyMobileCTA />
      </Suspense>
    </div>
  );
};

export default Index;
