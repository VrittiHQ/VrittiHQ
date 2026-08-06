"use client";

import { motion } from "framer-motion";
import { hero } from "@/config/copy";
import { WaitlistForm } from "./WaitlistForm";

const STATS = [
  { number: "500M+", label: "Deskless workforce in India" },
  { number: "10 min", label: "Zero to live" },
  { number: "Offline-first", label: "Works without internet" },
];

export function Hero() {
  return (
    <section className="v-section v-hero-section">
      <div className="v-container">
        {/* Badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <span className="v-badge">
            <span className="v-badge-dot" />
            {hero.badge}
          </span>
        </motion.div>

        {/* Headline — left-aligned, massive serif */}
        <motion.h1 className="v-hero-heading v-heading-preline v-mt-lg"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}>
          {hero.headline}
        </motion.h1>

        {/* Gold accent rule */}
        <motion.hr className="v-accent-rule"
          initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 48 }}
          transition={{ duration: 0.5, delay: 0.35 }} />

        {/* Sub */}
        <motion.p className="v-body-lg v-body-constrained"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          {hero.subheadline}
        </motion.p>

        {/* Form */}
        <motion.div className="v-mt-lg"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}>
          <WaitlistForm variant="hero" />
        </motion.div>

        {/* Trust */}
        <motion.div className="v-trust-strip v-mt-md"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}>
          {hero.trustItems.map((item) => (
            <span key={item} className="v-trust-item">{item}</span>
          ))}
        </motion.div>

        {/* Stats strip — gives the hero visual weight */}
        <motion.div className="v-stats-strip v-mt-xl"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className="v-stat">
              <motion.span 
                className="v-stat-number"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.15 }}
              >
                {stat.number}
              </motion.span>
              <span className="v-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
