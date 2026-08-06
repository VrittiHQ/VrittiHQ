/**
 * Vritti Marketing Copy
 * All marketing text in one place. Change copy here, not in components.
 */

export const siteConfig = {
  name: "Vritti",
  tagline: "The Operational Intelligence for India\u2019s 500M+ Deskless Workforce",
  description: "Vritti replaces the disjointed spreadsheets, consumer messaging apps, and paper registers that India's 500M+ deskless workforce depends on with a single intelligent operational platform.",
  url: "https://vritti.works",
  docsUrl: "https://docs.vritti.works",
  contact: "team@vritti.works",
  social: {
    github: "https://github.com/vrittihq",
    x: "https://x.com/vrittihq",
    linkedin: "https://linkedin.com/company/vrittihq",
  },
} as const;

import { env } from "./env";

export const nav = {
  links: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ],
  signIn: { label: "Sign In", href: env.dashboardUrl ? `${env.dashboardUrl}/sign-in` : "" },
  cta: "Join Waitlist",
  ctaHref: "/contact",
} as const;

export const hero = {
  badge: "Now accepting early access",
  headline: "Your workforce\nruns on paper.\nWe fix that.",
  subheadline:
    "Vritti replaces the disjointed spreadsheets, consumer messaging apps, and paper registers that India's 500M+ deskless workforce depends on with a single intelligent operational platform.",
  cta: "Join Waitlist",
  ctaPlaceholder: "you@company.com",
  trustItems: [
    "Indian compliance from day one",
    "Biometric attendance built-in",
    "Self-hosted or cloud",
  ],
} as const;

export const features = {
  label: "The platform",
  headline: "One system. Every workforce operation.",
  items: [
    {
      title: "Biometric Attendance",
      description:
        "Face recognition, GPS verification, kiosk mode. Every punch is verified, every record is immutable. Works offline.",
    },
    {
      title: "Automated Payroll Reconciliation",
      description:
        "PF, ESI, TDS, and Professional Tax are continuously calculated from verified attendance records. Generate compliant salary disbursements in one click rather than a week.",
    },
    {
      title: "One Platform, Any Organizational Topology",
      description:
        "Whether operating a production facility, educational campus, medical clinic, or logistics depot, configure complex attendance rules and payroll structures with zero custom code.",
    },
  ],
} as const;

export const builtForIndia = {
  label: "Why us",
  headline: "Built for how India actually operates.",
  cards: [
    {
      title: "Offline-first architecture",
      description:
        "Kiosks queue attendance locally and sync when connectivity returns. No business loses a single punch because the Wi-Fi dropped.",
    },
    {
      title: "Live in 10 minutes, not 6 months",
      description:
        "Built with regional defaults for Indian regulatory frameworks. Onboard personnel rosters, define overtime rules, and deploy across active operating sites the same day.",
    },
    {
      title: "Complete operational sovereignty",
      description:
        "Optionally self-host directly on your enterprise infrastructure. Retain absolute organizational governance over biometric embedding models, salary ledgers, and workforce logs.",
    },
  ],
} as const;

export const vision = {
  headline: "HR is the wedge.\nThe ceiling is much higher.",
  steps: [
    {
      label: "Now",
      title: "Attendance · Payroll · Leave · Shifts",
      description: "The foundation. Fully automated, Indian-compliant, config-driven.",
    },
    {
      label: "Next",
      title: "AI Agents for Workforce Operations",
      description:
        "Autonomous agentic workflows reconcile shift anomalies and audit payroll variance continuously, liberating leadership to focus on strategic organizational execution.",
    },
    {
      label: "Future",
      title: "Workforce Operational Intelligence",
      description:
        "The complete operational layer for Indian organizations. HR is where it starts, not where it ends.",
    },
  ],
} as const;

export const closingCta = {
  headline: "India\u2019s 500 million\nworkforce deserves better.",
  subheadline:
    "We're onboarding founding customers now. Get early access.",
  cta: "Join Waitlist",
  ctaPlaceholder: "you@company.com",
  finePrint: "Free during early access · No credit card required",
} as const;

export const footer = {
  madeIn: "Made in India",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Docs", href: "https://docs.vritti.works" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Email Us", href: `mailto:${siteConfig.contact}` },
        { label: "X (Twitter)", href: siteConfig.social.x },
        { label: "LinkedIn", href: siteConfig.social.linkedin },
        { label: "GitHub", href: siteConfig.social.github },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  copyright: `\u00a9 ${new Date().getFullYear()} ${siteConfig.name} AI, Inc. All rights reserved.`,
} as const;
