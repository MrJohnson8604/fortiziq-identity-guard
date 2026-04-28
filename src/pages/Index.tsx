import { useEffect, lazy, Suspense, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy-load below-the-fold components
const FearRelief = lazy(() => import("@/components/FearRelief"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Features = lazy(() => import("@/components/Features"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const PreFooterCTA = lazy(() => import("@/components/PreFooterCTA"));
const Footer = lazy(() => import("@/components/Footer"));
const SocialProofToast = lazy(() => import("@/components/SocialProofToast"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));

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
      <Navbar />
      <main>
        <Hero />
        <LazySection><FearRelief /></LazySection>
        <LazySection id="how"><HowItWorks /></LazySection>
        <LazySection id="features"><Features /></LazySection>
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
