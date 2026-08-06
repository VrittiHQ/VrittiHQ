"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FEATURE_SECTIONS = [
  {
    id: "attendance",
    title: "Smart Attendance",
    description: "Multiple ways to track attendance with verification at every step.",
    features: [
      { title: "GPS-Verified Punch", description: "Employees punch in/out with location verification. Configurable geofence radius per branch." },
      { title: "Selfie Capture", description: "Every punch includes a selfie for visual verification. Stored securely for audit." },
      { title: "Offline Support", description: "Works without internet. Syncs automatically when connection is restored." },
      { title: "Real-time Dashboard", description: "Monitor attendance status, shift delays, and exceptions across all operating sites instantly." },
    ],
  },
  {
    id: "face",
    title: "Face Recognition",
    description: "AI-powered biometric verification to eliminate proxy attendance.",
    features: [
      { title: "One-Time Enrollment", description: "Simple face enrollment. Works with any smartphone camera." },
      { title: "Instant Verification", description: "Face matching in under 2 seconds. Works with glasses, masks." },
      { title: "Anti-Spoofing", description: "Liveness detection prevents photo/video spoofing attempts." },
      { title: "Privacy First", description: "Face data encrypted and never leaves your infrastructure." },
    ],
  },
  {
    id: "kiosk",
    title: "Kiosk Mode",
    description: "Turn any Android tablet into a dedicated attendance terminal.",
    features: [
      { title: "Dedicated App", description: "Purpose-built kiosk app that locks the device to attendance mode." },
      { title: "Batch Scanning", description: "Scan multiple employees in quick succession. Perfect for shift changes." },
      { title: "Offline Queue", description: "Stores punches locally when offline. Auto-syncs when back online." },
      { title: "Voice Feedback", description: "Audio confirmation of successful punch. Supports multiple languages." },
    ],
  },
  {
    id: "leave",
    title: "Leave Management",
    description: "Complete leave lifecycle from application to approval.",
    features: [
      { title: "Multiple Leave Types", description: "Casual, sick, earned, comp-off, and custom leave types." },
      { title: "Approval Workflow", description: "Multi-level approval chains. Notifications at each step." },
      { title: "Balance Tracking", description: "Auto-calculated balances with carryover and encashment rules." },
      { title: "Holiday Calendar", description: "Configure holidays per branch/department. Auto-applies to leave calculations." },
    ],
  },
  {
    id: "payroll",
    title: "Payroll Processing",
    description: "End-to-end salary processing with Indian compliance built-in.",
    features: [
      { title: "Salary Structures", description: "Define components: basic, HRA, DA, allowances, deductions." },
      { title: "Auto Calculations", description: "PF, ESI, PT, TDS calculated automatically based on latest rules." },
      { title: "Payslip Generation", description: "Professional payslips in PDF. Bulk download or email to employees." },
      { title: "Statutory Reports", description: "Generate PF ECR, ESI returns, Form 16 with one click." },
    ],
  },
  {
    id: "multi-tenant",
    title: "Multi-Organization",
    description: "Manage multiple companies, branches, and hierarchies from one account.",
    features: [
      { title: "Organization Hierarchy", description: "Parent companies with subsidiaries. Each with independent settings." },
      { title: "Branch Management", description: "Multiple locations per org. Branch-specific geofences and policies." },
      { title: "Role-Based Access", description: "CFO sees everything. Branch HR sees only their branch. Fully configurable." },
      { title: "Consolidated Reports", description: "Roll-up reports across all orgs/branches. Or drill down to individual." },
    ],
  },
];

export default function FeaturesPage() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numItems = FEATURE_SECTIONS.length;
    const index = Math.min(Math.floor(latest * numItems), numItems - 1);
    if (index !== activeIndex) {
      setActiveIndex(Math.max(0, index));
    }
  });

  const activeSection = FEATURE_SECTIONS[activeIndex];

  const handleTabClick = (index: number) => {
    if (containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollableDistance = (FEATURE_SECTIONS.length * 70) - 100; // 420vh - 100vh = 320vh
      const scrollPerIndex = scrollableDistance / (FEATURE_SECTIONS.length - 1); // 320 / 5 = 64vh
      
      window.scrollTo({
        top: containerTop + (index * (window.innerHeight * (scrollPerIndex / 100))),
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="v-page">
      <section className="v-section v-page-header">
        <div className="v-container">
          <motion.span className="v-label" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Platform Capabilities
          </motion.span>
          <motion.h1 className="v-hero-heading v-mt-sm v-mid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}>
            Built to operate, not just display
          </motion.h1>
          <motion.p className="v-body-lg v-mt-sm v-narrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Every feature is outcome-focused, Indian-compliance-aware, and engineered for organizations that demand precision.
          </motion.p>
        </div>
      </section>

      {/* Sticky Scroll Viewer */}
      <section 
        ref={containerRef}
        style={{ "--scroll-height": `${FEATURE_SECTIONS.length * 70}vh` } as React.CSSProperties}
        className="v-section-offset v-scroll-section"
      >
        <div className="v-scroll-viewport">
          <div className="v-container v-scroll-container">
            
            <div className="v-grid-2 v-scroll-grid">
              {/* Left side: Header & Navigation */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="v-section-heading v-scroll-header">Core Modules</h2>
                
                <div className="v-row v-features-progress-container v-scroll-progress-wrapper">
                  {FEATURE_SECTIONS.map((_, i) => (
                    <div key={i} className={`v-scroll-progress-bar ${i === activeIndex ? "active" : ""}`} />
                  ))}
                </div>

                <div className="v-features-nav-list">
                  {FEATURE_SECTIONS.map((section, i) => (
                    <div 
                      key={section.id} 
                      className={`v-features-nav-item v-scroll-nav-item ${i === activeIndex ? "active" : ""}`}
                      onClick={() => handleTabClick(i)}
                    >
                      {i + 1}<span className="v-desktop-nav-text">. {section.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right side: Active Content */}
              <div className="v-scroll-content">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="v-scroll-content-inner"
                  >
                    <h3 className="v-card-heading v-scroll-title">{activeSection.title}</h3>
                    <p className="v-body-lg v-mt-xs v-scroll-desc">{activeSection.description}</p>
                    
                    <div className="v-scroll-features-grid">
                      {activeSection.features.map((f) => (
                        <div key={f.title}>
                          <h4 className="v-body v-scroll-feature-title">{f.title}</h4>
                          <p className="v-body-sm v-mt-xs v-scroll-feature-desc">{f.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="v-section v-cta-section">
        <div className="v-container">
          <div className="v-cta-card">
            {/* Subtle background glow effect inside the card */}
            <div className="v-cta-glow" />
            
            <h2 className="v-cta-heading">
              Ready to upgrade your workforce?
            </h2>
            <p className="v-cta-body">
              Join enterprise organizations across India already using Vritti to automate attendance and payroll at scale.
            </p>
            <div className="v-cta-buttons v-mt-xl">
              <Link href="/contact" className="v-btn v-btn-primary">
                Request Demo
              </Link>
              <Link href="/pricing" className="v-btn v-btn-outline">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
