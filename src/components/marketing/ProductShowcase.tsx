"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ScanFace,
  IndianRupee,
  CalendarDays,
  BrainCircuit,
  Tablet,
  BarChart3,
} from "lucide-react";

const FEATURES = [
  {
    icon: ScanFace,
    title: "Walk in. Get recognized.",
    description: "Face recognition attendance with anti-spoofing. No buddy punching. No proxy. Works offline on any Android tablet.",
    wide: true,
  },
  {
    icon: IndianRupee,
    title: "Payroll that knows India",
    description: "PF, ESI, TDS, Professional Tax — all calculated automatically. Generate payslips and statutory reports in one click.",
    wide: false,
  },
  {
    icon: CalendarDays,
    title: "Leave & shifts, sorted",
    description: "Multi-level approval chains, automatic balance calculations, configurable holidays per branch. No more spreadsheet chaos.",
    wide: false,
  },
  {
    icon: BrainCircuit,
    title: "AI that actually operates",
    description: "Not a chatbot. An agent that understands your org structure, answers HR queries, and executes workflows autonomously.",
    wide: false,
  },
  {
    icon: Tablet,
    title: "Your own attendance kiosk",
    description: "Turn any Android tablet into a dedicated biometric terminal. Voice feedback in regional languages. Offline-resilient with auto-sync.",
    wide: false,
  },
  {
    icon: BarChart3,
    title: "Reports that tell stories",
    description: "Real-time dashboards, attendance heatmaps, payroll analytics, compliance status — not just data dumps, but actionable intelligence.",
    wide: true,
  },
];

export function ProductShowcase() {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const items = gridRef.current?.querySelectorAll(".mk-bento-item");
    items?.forEach((item) => {
      const rect = (item as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (item as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (item as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

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
            Capabilities
          </motion.span>
          <motion.h2
            className="mk-display-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginTop: "0.75rem" }}
          >
            Everything your workforce needs
          </motion.h2>
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "1rem" }}
          >
            Each feature outcome-focused, Indian-compliance-aware, and built to
            operate — not just display data.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="mk-bento" onMouseMove={handleMouseMove}>
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`mk-bento-item ${feature.wide ? "mk-bento-wide" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="mk-icon-box" style={{ marginBottom: "1.25rem" }}>
                <feature.icon size={22} />
              </div>
              <h3 className="mk-display-sm" style={{ marginBottom: "0.5rem" }}>
                {feature.title}
              </h3>
              <p className="mk-body" style={{ margin: 0 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
