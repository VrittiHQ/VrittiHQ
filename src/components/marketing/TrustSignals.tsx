"use client";

import { motion } from "framer-motion";
import { Shield, Database, Fingerprint, Server } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Shield,
    title: "Indian compliance, built in",
    description: "PF, ESI, TDS, Professional Tax — all calculated per latest government rules. Generate ECR, Form 16, and statutory returns.",
    tags: ["PF", "ESI", "TDS", "PT"],
    accent: false,
  },
  {
    icon: Database,
    title: "Event-sourced audit trail",
    description: "Every action creates an immutable record. Full traceability from attendance scan to salary credit. No data ever overwritten.",
    tags: ["Immutable", "Traceable", "Verifiable"],
    accent: true,
  },
  {
    icon: Server,
    title: "Self-hosted option",
    description: "Your data stays on your infrastructure. Deploy on-premise or in your own cloud. Complete data sovereignty for sensitive organizations.",
    tags: ["On-premise", "Your Cloud", "Your Data"],
    accent: false,
  },
  {
    icon: Fingerprint,
    title: "Biometric privacy",
    description: "Face data stored as 512-dimensional vectors, not photos. Encrypted at rest and in transit. Impossible to reconstruct a face from the data.",
    tags: ["512-dim vectors", "Encrypted", "Non-reversible"],
    accent: false,
  },
];

export function TrustSignals() {
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
            Trust & Security
          </motion.span>
          <motion.h2
            className="mk-display-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginTop: "0.75rem" }}
          >
            Enterprise-grade integrity
          </motion.h2>
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "1rem" }}
          >
            This system processes salaries and stores biometric data.
            We treat that responsibility with the gravity it deserves.
          </motion.p>
        </div>

        {/* Trust grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}>
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="mk-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                borderLeft: item.accent ? "3px solid var(--mk-amber)" : undefined,
              }}
            >
              <div
                className={item.accent ? "mk-icon-box mk-icon-box-amber" : "mk-icon-box"}
                style={{ marginBottom: "1.25rem" }}
              >
                <item.icon size={22} />
              </div>
              <h3 className="mk-display-sm" style={{ marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p className="mk-body" style={{ marginBottom: "1rem" }}>
                {item.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mk-mono"
                    style={{
                      fontSize: "0.6875rem",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "6px",
                      background: item.accent ? "var(--mk-amber-bg)" : "var(--mk-bg-alt)",
                      color: item.accent ? "var(--mk-amber)" : "var(--mk-text-tertiary)",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            .mk-section [style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
