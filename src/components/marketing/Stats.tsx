"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(ease * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { value: 400, suffix: "M+", label: "Indian Workers", sub: "The massive underserved market we are building for" },
  { value: 100, suffix: "%", label: "Indian Compliance", sub: "Built from day one to handle PF, ESI, PT, and TDS" },
  { value: 0, suffix: "s", label: "Implementation Time", sub: "Config-driven setup means you start instantly, not in months" },
];

export function Stats() {
  return (
    <section className="mk-section" style={{ background: "var(--mk-brand-bg)", borderTop: "1px solid rgba(124, 107, 245, 0.15)", borderBottom: "1px solid rgba(124, 107, 245, 0.15)" }}>
      <div className="mk-container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <div style={{ fontSize: "clamp(3rem, 5vw, 4rem)", fontWeight: 800, color: "var(--mk-brand)", lineHeight: 1, fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--mk-text)", marginTop: "1rem" }}>
                {stat.label}
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--mk-text-secondary)", marginTop: "0.5rem", maxWidth: "240px", marginInline: "auto" }}>
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .mk-container [style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
              gap: 4rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
