"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Heart, Zap, Users, ArrowRight } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Outcome-obsessed",
    description: "Every feature starts with a real problem. We ship outcomes, not feature counts.",
  },
  {
    icon: Zap,
    title: "Radical simplicity",
    description: "HR software shouldn't require a manual. Complex workflows, effortless experience.",
  },
  {
    icon: Heart,
    title: "Built for India",
    description: "Indian compliance, Indian payment methods, Indian organizational patterns. We understand local needs because we live them.",
  },
  {
    icon: Users,
    title: "Dignity for every worker",
    description: "From factory floors to corporate offices — every employee deserves a system that respects their livelihood.",
  },
];

const TIMELINE = [
  {
    year: "2025",
    title: "The Spark",
    description: "What started as solving attendance tracking for educational institutions revealed a much bigger problem — the complete absence of intelligent, affordable HR infrastructure for Indian organizations.",
  },
  {
    year: "2026",
    title: "Platform Takes Shape",
    description: "Evolved from attendance into a full operational platform: biometric face recognition, automated payroll with Indian compliance, config-driven multi-tenancy, and the first AI agent prototypes.",
  },
  {
    year: "2026",
    title: "Early Access",
    description: "Opening the platform to early adopters. Manufacturing units, clinics, schools, startups — stress-testing the config engine across diverse organization types.",
  },
  {
    year: "The Horizon",
    title: "The Operating System",
    description: "HR is the wedge. The ceiling is a complete Workspace Suite — compliance, IT asset management, spend management, embedded FinTech — for every Indian organization.",
  },
];

export default function AboutPage() {
  return (
    <div className="mk-page">
      {/* Hero */}
      <section className="mk-section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="mk-hero-gradient" />
        <div className="mk-container-narrow" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <motion.span
            className="mk-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About VrittiHR
          </motion.span>
          <motion.h1
            className="mk-display-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ marginTop: "0.75rem", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            वृत्ति — livelihood, sustenance, purpose
          </motion.h1>
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "1.25rem" }}
          >
            In Sanskrit, वृत्ति means the very essence of livelihood — the work
            that sustains life and gives it meaning. We chose this name because
            we believe every organization that provides livelihoods deserves
            infrastructure as thoughtful as the work itself.
          </motion.p>
        </div>
      </section>

      {/* The Story */}
      <section className="mk-section" style={{ background: "var(--mk-bg-alt)" }}>
        <div className="mk-container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mk-label">The Story</span>
            <h2 className="mk-display-md" style={{ marginTop: "0.75rem" }}>
              Why we&apos;re building this
            </h2>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p className="mk-body-lg">
                India has 400 million+ workers across millions of organizations — from
                15-person garment units to 500-person logistics companies. Most of them
                run on spreadsheets, WhatsApp groups, and manual registers.
              </p>
              <p className="mk-body-lg">
                The existing options? Enterprise HRMS platforms designed for Fortune 500s
                — bloated, expensive, requiring 6-month implementations. Or basic digital
                registers that offer zero intelligence, zero compliance, zero payroll.
              </p>
              <p className="mk-body-lg">
                We&apos;re building the third option. An intelligent operational platform
                that starts simple enough for a single-branch clinic and scales to
                multi-entity conglomerates. Config-driven, AI-native, and purpose-built
                for how India actually works.
              </p>
              <p className="mk-body-lg" style={{ fontWeight: 600, color: "var(--mk-text)" }}>
                VrittiHR isn&apos;t just another HRMS. It&apos;s the operating system
                for Indian organizations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="mk-section">
        <div className="mk-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="mk-label">Principles</span>
            <h2 className="mk-display-md" style={{ marginTop: "0.75rem" }}>What guides us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", maxWidth: "900px", margin: "0 auto" }}>
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                className="mk-card mk-card-glow"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mk-icon-box" style={{ marginBottom: "1rem" }}>
                  <v.icon size={22} />
                </div>
                <h3 className="mk-display-sm" style={{ marginBottom: "0.5rem" }}>{v.title}</h3>
                <p className="mk-body">{v.description}</p>
              </motion.div>
            ))}
          </div>
          <style>{`
            @media (max-width: 640px) {
              .mk-container [style*="grid-template-columns: repeat(2"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Timeline */}
      <section className="mk-section" style={{ background: "var(--mk-bg-alt)" }}>
        <div className="mk-container-narrow">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="mk-label">Journey</span>
            <h2 className="mk-display-md" style={{ marginTop: "0.75rem" }}>The road so far</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: "1.5rem",
              top: "1.5rem",
              bottom: "1.5rem",
              width: "2px",
              background: "linear-gradient(to bottom, var(--mk-brand), var(--mk-brand-lighter))",
              borderRadius: "2px",
            }} />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  paddingLeft: "0.5rem",
                }}
              >
                {/* Dot */}
                <div style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "var(--mk-brand-bg)",
                  border: "3px solid var(--mk-brand)",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                }} />
                <div className="mk-card" style={{ flex: 1 }}>
                  <span className="mk-badge" style={{ marginBottom: "0.75rem" }}>{item.year}</span>
                  <h3 className="mk-display-sm" style={{ marginBottom: "0.375rem" }}>{item.title}</h3>
                  <p className="mk-body">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mk-section-tight" style={{ textAlign: "center" }}>
        <div className="mk-container-narrow">
          <h2 className="mk-display-md">Want to join the journey?</h2>
          <p className="mk-body-lg" style={{ marginTop: "0.75rem" }}>
            Whether you&apos;re a potential customer, investor, or future team member — we&apos;d love to connect.
          </p>
          <Link href="/contact" className="mk-btn-primary" style={{ marginTop: "1.5rem" }}>
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
