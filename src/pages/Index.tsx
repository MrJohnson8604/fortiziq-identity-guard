import { useEffect, lazy, Suspense, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
const Pricing = lazyWithRetry(() => import("@/components/Pricing"));
const CreditReportInfo = lazyWithRetry(() => import("@/components/CreditReportInfo"));
const Testimonials = lazyWithRetry(() => import("@/components/Testimonials"));
const FAQ = lazyWithRetry(() => import("@/components/FAQ"));
const PreFooterCTA = lazyWithRetry(() => import("@/components/PreFooterCTA"));
const Footer = lazyWithRetry(() => import("@/components/Footer"));
const SocialProofToast = lazyWithRetry(() => import("@/components/SocialProofToast"));
const ExitIntentPopup = lazyWithRetry(() => import("@/components/ExitIntentPopup"));

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

const Index = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
        <LazySection id="pricing"><Pricing /></LazySection>
        <LazySection><Testimonials /></LazySection>
        <LazySection id="faq"><FAQ /></LazySection>
        <LazySection minHeight="200px"><PreFooterCTA /></LazySection>
      </main>
      <LazySection minHeight="200px"><Footer /></LazySection>
      <Suspense fallback={null}>
        <SocialProofToast />
        <ExitIntentPopup />
      </Suspense>
    </div>
  );
};

export default Index;
