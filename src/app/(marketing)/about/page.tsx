"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORY_SLIDES = [
  "India has over 400 million workers across millions of organizations, ranging from compact production facilities to extensive supply chain networks. Most still depend on disjointed spreadsheets, consumer messaging apps, and manual paper registers.",
  "Traditional enterprise HR platforms are designed primarily for desk-bound corporate teams, burdened by lengthy implementations and high overhead. Basic digital registers, meanwhile, offer minimal operational intelligence, no automated compliance, and zero payroll integration.",
  "We are architecting the foundational platform for India's real workforce: an intelligent operating environment that is simple to deploy for a regional clinic yet scales seamlessly across multi-entity industrial enterprises. Fully configurable, AI-native, and purpose-built for high-volume execution.",
  null, // Emphasis slide (rendered differently)
];

const SLIDE_DURATION = 8000; // 8 seconds per slide
const PAUSE_AFTER_INTERACT = 10000; // 10s pause after manual click

const VALUES = [
  { title: "Outcome-Obsessed", description: "Every capability begins with an operational bottleneck. We engineer measurable performance outcomes rather than decorative features." },
  { title: "Radical Simplicity", description: "Workforce systems should require zero manual onboarding. We design complex backend logic to operate through intuitive, high-velocity interfaces." },
  { title: "Architected for India", description: "Native support for Indian statutory compliance, regional organizational hierarchies, and real-time localized reporting." },
  { title: "Dignity for Every Worker", description: "From active production environments to management offices, every individual deserves technology that honors their time and livelihood." },
];

const TIMELINE = [
  { year: "2025", title: "The Foundation", description: "Engineering automated biometric recognition for high-density environments revealed an immediate need for integrated operational infrastructure." },
  { year: "Mid 2026", title: "Platform Expansion", description: "Evolved from pure attendance automation into an integrated workforce architecture: instant payroll reconciliation, configurable rules engines, and autonomous reporting." },
  { year: "Late 2026", title: "Enterprise Pilots", description: "Deploying high-frequency implementations across manufacturing networks, regional medical centers, and multi-campus institutions to validate the configuration kernel." },
  { year: "The Horizon", title: "Workforce Operational Intelligence", description: "Workforce automation serves as our foundation. Our long-term trajectory is establishing the decisive operational standard for high-density enterprises." },
];

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeValue, setActiveValue] = useState<number | null>(0);
  const [activeYear, setActiveYear] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance story slides
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % STORY_SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Manual click: jump to slide + pause auto-advance temporarily
  const handleSlideClick = useCallback((idx: number) => {
    setActiveSlide(idx);
    setIsPaused(true);

    // Clear any existing pause timeout
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);

    // Resume auto-advance after pause duration
    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, PAUSE_AFTER_INTERACT);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, []);

  return (
    <div className="v-page">
      {/* Hero */}
      <section className="v-section v-page-header">
        <div className="v-container">
          <motion.span className="v-label" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            About Vritti
          </motion.span>
          <div className="v-about-hero-grid v-mt-sm">
            <motion.div className="v-about-hero-heading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h1 className="v-hero-heading">
                Livelihood. Sustenance. Purpose.
              </h1>
            </motion.div>
            <motion.div className="v-about-hero-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <p className="v-intro-text">
                The name &ldquo;Vritti&rdquo; represents the foundational essence of livelihood: the labor that sustains life and drives purpose. We engineered this architecture because every organization powering India&apos;s workforce deserves infrastructure as resilient and thoughtful as the work itself.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story — Auto-advancing, swipeable viewer */}
      <section className="v-section v-section-offset">
        <div className="v-container">
          <motion.div 
            className="v-story-viewer"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <span className="v-label">The Story</span>
            <h2 className="v-section-heading v-mt-sm">Why we&apos;re building this</h2>
            
            <div className="v-story-pane">
              {/* Dot indicators (passive — just show progress) */}
              <div className="v-dot-tabs">
                {STORY_SLIDES.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSlideClick(idx)}
                    className={`v-dot-tab ${activeSlide === idx ? "active" : ""}`}
                    role="tab"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSlideClick(idx); }}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {activeSlide === idx && !isPaused && (
                      <motion.div
                        className="v-dot-progress"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                        key={`progress-${idx}-${Date.now()}`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Swipeable story content */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeSlide}
                  className="v-story-swipeable"
                  initial={{ opacity: 0, x: 60 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -60 }} 
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_e, info) => {
                    const swipe = info.offset.x;
                    if (swipe < -50) {
                      // Swiped left → next slide
                      const next = (activeSlide + 1) % STORY_SLIDES.length;
                      handleSlideClick(next);
                    } else if (swipe > 50) {
                      // Swiped right → previous slide
                      const prev = (activeSlide - 1 + STORY_SLIDES.length) % STORY_SLIDES.length;
                      handleSlideClick(prev);
                    }
                  }}
                >
                  {activeSlide < 3 ? (
                    <p className="v-story-text">{STORY_SLIDES[activeSlide]}</p>
                  ) : (
                    <p className="v-story-text-emphasis">
                      Vritti isn&apos;t just another HRMS.<br/>It is Workforce Operational Intelligence for Indian organizations.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values — Interactive Accordion */}
      <section className="v-section">
        <div className="v-container">
          <motion.div 
            className="v-grid-auto-2"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div>
              <span className="v-label">Principles</span>
              <h2 className="v-section-heading v-mt-sm">What guides us</h2>
            </div>
            
            {/* Accordion List — using reusable accordion classes */}
            <div className="v-accordion-list">
              {VALUES.map((v, i) => {
                const isActive = activeValue === i;
                return (
                  <motion.div 
                    key={v.title}
                    className="v-accordion-item"
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveValue(isActive ? null : i)}
                  >
                    <div className="v-accordion-header">
                      <h3 className={`v-accordion-title ${isActive ? "active" : ""}`}>
                        {v.title}
                      </h3>
                      <motion.div className="v-accordion-icon" animate={{ rotate: isActive ? 45 : 0 }} transition={{ duration: 0.3 }}>+</motion.div>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div className="v-accordion-body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                          <p className="v-body-lg v-mt-sm v-pill-pane-desc">{v.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline — Interactive Switcher */}
      <section className="v-section v-section-offset">
        <div className="v-container">
          <motion.div 
            className="v-grid-auto-2"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div>
              <span className="v-label">Journey</span>
              <h2 className="v-section-heading v-mt-sm">The road so far</h2>
            </div>
            
            <div>
              <div className="v-pill-tabs">
                {TIMELINE.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveYear(i)}
                    className={`v-pill-tab ${activeYear === i ? "active" : ""}`}
                    role="tab"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveYear(i); }}
                  >
                    {activeYear === i && (
                      <motion.div layoutId="timelineTab" className="v-pill-indicator" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                    )}
                    <span className="v-pill-text">{item.year}</span>
                  </div>
                ))}
              </div>

              <div className="v-timeline-pane">
                <AnimatePresence mode="wait">
                  <motion.div key={activeYear} className="v-timeline-content" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <span className="v-label">{TIMELINE[activeYear].year}</span>
                    <h3 className="v-card-heading v-pill-pane-title v-mt-xs">{TIMELINE[activeYear].title}</h3>
                    <p className="v-body-lg v-mt-sm v-pill-pane-desc">{TIMELINE[activeYear].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="v-section">
        <div className="v-container v-cta-centered">
          <h2 className="v-section-heading">Want to join the journey?</h2>
          <p className="v-body-lg v-mt-sm v-pill-pane-desc">
            Whether you&apos;re an enterprise leader, strategic partner, or engineering builder, we welcome direct conversation.
          </p>
          <Link href="/contact" className="v-btn v-btn-primary v-mt-lg">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
