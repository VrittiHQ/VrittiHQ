"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Building2, Stethoscope, GraduationCap, Rocket } from "lucide-react";

const ORG_TYPES = [
  { icon: Building2, name: "Manufacturing Unit", config: "3 shifts • Overtime rules • PF/ESI • Biometric kiosk" },
  { icon: Stethoscope, name: "Multi-Branch Clinic", config: "Flexible hours • Per-branch holidays • ESIC compliance" },
  { icon: GraduationCap, name: "Educational Institution", config: "Academic calendar • Department hierarchy • Event attendance" },
  { icon: Rocket, name: "Tech Startup", config: "Flexible leave • Remote-first policies • CTC components" },
];

export function TheEngine() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ORG_TYPES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const active = ORG_TYPES[activeIndex];

  return (
    <section className="mk-section">
      <div className="mk-container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>
          {/* Left — Copy */}
          <div>
            <motion.span
              className="mk-label"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The Engine
            </motion.span>
            <motion.h2
              className="mk-display-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ marginTop: "0.75rem" }}
            >
              One product.
              <br />
              Infinite configurations.
            </motion.h2>
            <motion.p
              className="mk-body-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ marginTop: "1rem" }}
            >
              VrittiHR doesn&apos;t force you into a template. A config-driven engine
              adapts attendance rules, leave policies, payroll structures, and
              compliance requirements to YOUR organization — not the other way around.
            </motion.p>

            {/* Org type selector */}
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {ORG_TYPES.map((org, i) => (
                <button
                  key={org.name}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "12px",
                    border: "none",
                    background: i === activeIndex ? "var(--mk-brand-bg)" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <org.icon
                    size={18}
                    style={{
                      color: i === activeIndex ? "var(--mk-brand)" : "var(--mk-text-muted)",
                      transition: "color 0.2s ease",
                    }}
                  />
                  <span style={{
                    fontSize: "0.875rem",
                    fontWeight: i === activeIndex ? 600 : 400,
                    color: i === activeIndex ? "var(--mk-brand-dark)" : "var(--mk-text-tertiary)",
                    transition: "all 0.2s ease",
                  }}>
                    {org.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div style={{
              background: "var(--mk-bg-white)",
              border: "1px solid var(--mk-border)",
              borderRadius: "20px",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Config icon */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--mk-border-light)",
              }}>
                <Settings size={20} style={{ color: "var(--mk-brand)" }} />
                <span className="mk-mono" style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--mk-text-secondary)",
                }}>
                  org.config
                </span>
              </div>

              {/* Morphing content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <active.icon size={24} style={{ color: "var(--mk-brand)" }} />
                    <h3 style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--mk-text)",
                    }}>
                      {active.name}
                    </h3>
                  </div>

                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}>
                    {active.config.split(" • ").map((tag) => (
                      <span
                        key={tag}
                        className="mk-mono"
                        style={{
                          fontSize: "0.75rem",
                          padding: "0.375rem 0.75rem",
                          borderRadius: "8px",
                          background: "var(--mk-bg-alt)",
                          color: "var(--mk-text-secondary)",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div style={{
                display: "flex",
                gap: "0.375rem",
                marginTop: "2rem",
                justifyContent: "center",
              }}>
                {ORG_TYPES.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === activeIndex ? "1.5rem" : "0.375rem",
                      height: "0.375rem",
                      borderRadius: "100px",
                      background: i === activeIndex ? "var(--mk-brand)" : "var(--mk-border)",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            .mk-section [style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
