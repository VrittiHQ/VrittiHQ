import { Hero } from "@/components/marketing/Hero";
import { SocialProofStrip } from "@/components/marketing/SocialProofStrip";
import { TheGap } from "@/components/marketing/TheGap";
import { Stats } from "@/components/marketing/Stats";
import { PlatformVision } from "@/components/marketing/PlatformVision";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { TheEngine } from "@/components/marketing/TheEngine";
import { TrustSignals } from "@/components/marketing/TrustSignals";
import { ClosingCTA } from "@/components/marketing/ClosingCTA";
import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { StickyCTA } from "@/components/marketing/StickyCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VrittiHR — The Operating System for Indian Organizations",
  description:
    "AI-native HR platform with biometric attendance, automated payroll, and intelligent workforce management. Built for India. Start with HR, scale to everything.",
};

export default function LandingPage() {
  return (
    <div className="mk-page">
      <Nav />
      <main>
        <Hero />
        <SocialProofStrip />
        <TheGap />
        <Stats />
        <PlatformVision />
        <ProductShowcase />
        <TheEngine />
        <TrustSignals />
        <ClosingCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
