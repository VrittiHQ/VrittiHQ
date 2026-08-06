import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { MarketingSmoothScroll } from "@/components/marketing/SmoothScroll";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { BuiltForIndia } from "@/components/marketing/BuiltForIndia";
import { Vision } from "@/components/marketing/Vision";
import { ClosingCTA } from "@/components/marketing/ClosingCTA";

import type { Metadata } from "next";
import { siteConfig } from "@/config/copy";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <MarketingSmoothScroll>
      <Nav />
      <Hero />
      <Features />
      <BuiltForIndia />
      <Vision />
      <ClosingCTA />
      <Footer />
    </MarketingSmoothScroll>
  );
}
