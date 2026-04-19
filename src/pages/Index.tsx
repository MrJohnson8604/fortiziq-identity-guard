import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FearRelief from "@/components/FearRelief";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import SocialProofToast from "@/components/SocialProofToast";
import ExitIntentPopup from "@/components/ExitIntentPopup";

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
        <FearRelief />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <PreFooterCTA />
      <Footer />
      <SocialProofToast />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
