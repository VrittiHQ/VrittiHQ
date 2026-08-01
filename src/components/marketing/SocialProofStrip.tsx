"use client";

import { motion } from "framer-motion";

const INDUSTRIES = [
  "Manufacturing",
  "Healthcare",
  "Retail",
  "Logistics",
  "Education",
  "Technology",
  "Hospitality"
];

export function SocialProofStrip() {
  return (
    <section 
      style={{ 
        padding: "2rem 0", 
        borderTop: "1px solid var(--mk-border)",
        borderBottom: "1px solid var(--mk-border)",
        background: "var(--mk-bg-alt)",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div 
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to right, var(--mk-bg-alt), transparent)",
          zIndex: 2,
        }}
      />
      <div 
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to left, var(--mk-bg-alt), transparent)",
          zIndex: 2,
        }}
      />
      <div className="mk-container" style={{ position: "relative", zIndex: 1 }}>
        <p style={{ textAlign: "center", fontSize: "0.8125rem", fontWeight: 600, color: "var(--mk-text-tertiary)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Built for every kind of Indian workplace
        </p>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ display: "flex", gap: "4rem", alignItems: "center", whiteSpace: "nowrap" }}
          >
            {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
              <span 
                key={i} 
                style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: 700, 
                  color: "var(--mk-text-muted)",
                  fontFamily: "'Cabinet Grotesk', sans-serif"
                }}
              >
                {industry}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
