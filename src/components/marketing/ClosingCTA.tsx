"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ClosingCTA() {
  return (
    <section
      className="mk-section mk-dark"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(124, 107, 245, 0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="mk-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          textAlign: "center",
          maxWidth: "650px",
          margin: "0 auto",
          padding: "3rem 0",
        }}>
          {/* Sanskrit whisper */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: "1rem",
              color: "var(--mk-brand-light)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            वृत्ति — livelihood, sustenance, purpose
          </motion.p>

          <motion.h2
            className="mk-display-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: "var(--mk-text-on-dark)" }}
          >
            Ready to run your organization
            <br />
            the way it deserves?
          </motion.h2>

          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              marginTop: "1.25rem",
              color: "var(--mk-text-on-dark-secondary)",
            }}
          >
            Join early access and help us build the platform that Indian organizations
            have been waiting for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            style={{ marginTop: "2.5rem" }}
          >
            <Link href="/contact" className="mk-btn-primary" style={{
              background: "#ffffff",
              color: "var(--mk-bg-dark)",
              padding: "1rem 2.5rem",
              fontSize: "1rem",
              boxShadow: "0 2px 12px rgba(255, 255, 255, 0.15)",
            }}>
              Request Early Access
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
