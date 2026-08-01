"use client";

import { motion } from "framer-motion";
import { Cpu, MessageSquare, Zap, ArrowDown } from "lucide-react";

const LAYERS = [
  {
    icon: Cpu,
    label: "Layer 1",
    title: "Core Operations",
    subtitle: "Today",
    description: "Attendance, payroll, leave, shifts, departments — all running on a config-driven engine that adapts to any organization type.",
    color: "var(--mk-brand)",
    bg: "var(--mk-brand-bg)",
  },
  {
    icon: MessageSquare,
    label: "Layer 2",
    title: "AI Agents",
    subtitle: "Next",
    description: "Conversational intelligence that understands your org. Ask questions, get instant answers, automate approvals — in natural language.",
    color: "var(--mk-brand-dark)",
    bg: "rgba(83, 64, 199, 0.08)",
  },
  {
    icon: Zap,
    label: "Layer 3",
    title: "Autonomous Operations",
    subtitle: "The Vision",
    description: "AI that doesn't wait to be asked. Proactive compliance alerts, automatic payroll runs, anomaly detection — the system operates itself.",
    color: "var(--mk-brand-darker)",
    bg: "rgba(67, 47, 160, 0.08)",
  },
];

const TRAJECTORY = [
  "HR & Payroll",
  "Compliance Engine",
  "IT Asset Management",
  "Spend Management",
  "Embedded FinTech",
];

export function PlatformVision() {
  return (
    <section className="mk-section">
      <div className="mk-container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 4rem" }}>
          <motion.span
            className="mk-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Platform Vision
          </motion.span>
          <motion.h2
            className="mk-display-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginTop: "0.75rem" }}
          >
            Three layers of intelligence
          </motion.h2>
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "1rem" }}
          >
            VrittiHR isn&apos;t a static tool. It&apos;s an evolving platform that grows from
            core operations into full autonomous intelligence.
          </motion.p>
        </div>

        {/* Three layers */}
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div
                className="mk-card"
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  borderLeft: `3px solid ${layer.color}`,
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "12px",
                  background: layer.bg,
                  color: layer.color,
                  flexShrink: 0,
                }}>
                  <layer.icon size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <h3 className="mk-display-sm" style={{ margin: 0 }}>
                      {layer.title}
                    </h3>
                    <span style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      padding: "0.125rem 0.625rem",
                      borderRadius: "100px",
                      background: layer.bg,
                      color: layer.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}>
                      {layer.subtitle}
                    </span>
                  </div>
                  <p className="mk-body" style={{ margin: 0 }}>
                    {layer.description}
                  </p>
                </div>
              </div>

              {i < LAYERS.length - 1 && (
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0.5rem 0",
                  color: "var(--mk-text-muted)",
                }}>
                  <ArrowDown size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trajectory */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <p className="mk-label" style={{ marginBottom: "1.25rem" }}>The trajectory</p>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}>
            {TRAJECTORY.map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{
                  fontSize: "0.875rem",
                  fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? "var(--mk-brand)" : "var(--mk-text-tertiary)",
                  padding: "0.375rem 0.875rem",
                  borderRadius: "8px",
                  background: i === 0 ? "var(--mk-brand-bg)" : "transparent",
                }}>
                  {item}
                </span>
                {i < TRAJECTORY.length - 1 && (
                  <span style={{ color: "var(--mk-text-muted)", fontSize: "0.75rem" }}>→</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
