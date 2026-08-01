"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--glow-x", `${x}%`);
      el.style.setProperty("--glow-y", `${y}%`);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading") return;
    setState("loading");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: "", message: "Early access request from hero", company: "", phone: "", employees: "" }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  };

  return (
    <section
      ref={heroRef}
      className="mk-section"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="mk-hero-grid" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(800px circle at var(--glow-x, 50%) var(--glow-y, 30%), rgba(124, 107, 245, 0.07), transparent 50%)`,
          pointerEvents: "none",
          zIndex: 0,
          transition: "background 0.3s ease",
        }}
      />
      <div className="mk-hero-gradient" />

      <div className="mk-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "900px" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mk-badge">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--mk-success)" }} />
              Now in Early Access
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mk-display-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginTop: "1.5rem" }}
          >
            The intelligent workforce platform
            <br />
            for Indian{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--mk-brand), var(--mk-brand-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              organizations
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ marginTop: "1.5rem", maxWidth: "620px" }}
          >
            Start with HR. Scale to everything. VrittiHR is where biometric attendance,
            automated payroll, and AI agents come together — purpose-built for how
            India actually works.
          </motion.p>

          {/* Inline email capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ marginTop: "2.5rem" }}
          >
            {state === "done" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.5rem",
                  background: "var(--mk-success-bg)",
                  borderRadius: "14px",
                  maxWidth: "480px",
                }}
              >
                <CheckCircle2 size={20} style={{ color: "var(--mk-success)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--mk-success)" }}>
                  You&apos;re in! We&apos;ll reach out within 24 hours.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                display: "flex",
                gap: "0.5rem",
                maxWidth: "480px",
                flexWrap: "wrap",
              }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    flex: "1 1 240px",
                    padding: "0.875rem 1.25rem",
                    borderRadius: "12px",
                    border: "1px solid var(--mk-border)",
                    background: "var(--mk-bg-white)",
                    fontSize: "0.9375rem",
                    fontFamily: "'Satoshi', sans-serif",
                    color: "var(--mk-text)",
                    outline: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxShadow: "var(--mk-shadow-sm)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--mk-brand)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(124, 107, 245, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--mk-border)";
                    e.target.style.boxShadow = "var(--mk-shadow-sm)";
                  }}
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="mk-btn-primary"
                  style={{
                    flexShrink: 0,
                    opacity: state === "loading" ? 0.7 : 1,
                    cursor: state === "loading" ? "wait" : "pointer",
                  }}
                >
                  {state === "loading" ? (
                    <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                  ) : (
                    <>Get Early Access <ArrowRight size={16} /></>
                  )}
                </button>
                {state === "error" && (
                  <p style={{ width: "100%", fontSize: "0.8125rem", color: "#dc2626", marginTop: "0.25rem" }}>
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              "Indian compliance built-in",
              "Face recognition attendance",
              "Self-hosted option",
            ].map((item) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8125rem",
                  color: "var(--mk-text-tertiary)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="var(--mk-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
