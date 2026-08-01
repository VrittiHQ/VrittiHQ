"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const COLUMNS = [
  {
    type: "problem" as const,
    label: "Enterprise HRMS",
    examples: ["Traditional Enterprise Platforms"],
    traits: [
      { text: "₹7–50K/month per org", negative: true },
      { text: "6-month implementation", negative: true },
      { text: "100+ features you'll never use", negative: true },
      { text: "Requires dedicated HR team", negative: true },
    ],
  },
  {
    type: "solution" as const,
    label: "VrittiHR",
    examples: ["The new category"],
    traits: [
      { text: "Affordable, transparent pricing", negative: false },
      { text: "Deploy in under 30 minutes", negative: false },
      { text: "AI agents that operate for you", negative: false },
      { text: "Config-driven — adapts to you", negative: false },
    ],
  },
  {
    type: "problem" as const,
    label: "Digital Registers",
    examples: ["Legacy Basic Services"],
    traits: [
      { text: "Zero intelligence", negative: true },
      { text: "No statutory compliance", negative: true },
      { text: "No payroll, no reporting", negative: true },
      { text: "Data trapped in one phone", negative: true },
    ],
  },
];

export function TheGap() {
  return (
    <section className="mk-section" style={{ background: "var(--mk-bg-alt)" }}>
      <div className="mk-container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
          <motion.span
            className="mk-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The problem
          </motion.span>
          <motion.h2
            className="mk-display-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginTop: "0.75rem" }}
          >
            Indian organizations deserve better
          </motion.h2>
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "1rem" }}
          >
            You&apos;re either paying for bloated enterprise software built for Fortune 500s, 
            or stuck with toy apps that can&apos;t handle your compliance needs. There&apos;s a new way.
          </motion.p>
        </div>

        {/* Three columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          alignItems: "start",
        }}>
          {COLUMNS.map((col, i) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{
                background: col.type === "solution" ? "var(--mk-bg-white)" : "transparent",
                border: col.type === "solution" ? "2px solid var(--mk-brand)" : "1px solid var(--mk-border)",
                borderRadius: "16px",
                padding: "2rem",
                position: "relative",
                boxShadow: col.type === "solution" ? "var(--mk-shadow-lg)" : "none",
                transform: col.type === "solution" ? "scale(1.02)" : "none",
              }}
            >
              {col.type === "solution" && (
                <div style={{
                  position: "absolute",
                  top: "-0.75rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--mk-brand)",
                  color: "#fff",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.875rem",
                  borderRadius: "100px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}>
                  New category
                </div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <h3 className="mk-display-sm" style={{
                  color: col.type === "solution" ? "var(--mk-brand-dark)" : "var(--mk-text)",
                }}>
                  {col.label}
                </h3>
                <p style={{
                  fontSize: "0.8125rem",
                  color: "var(--mk-text-muted)",
                  marginTop: "0.25rem",
                }}>
                  {col.examples[0]}
                </p>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.traits.map((trait) => (
                  <li key={trait.text} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: trait.negative ? "var(--mk-text-tertiary)" : "var(--mk-text)",
                    fontWeight: trait.negative ? 400 : 500,
                  }}>
                    {trait.negative ? (
                      <X size={16} style={{ color: "#dc2626", marginTop: "2px", flexShrink: 0 }} />
                    ) : (
                      <Check size={16} style={{ color: "var(--mk-brand)", marginTop: "2px", flexShrink: 0 }} />
                    )}
                    {trait.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            .mk-section [style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
