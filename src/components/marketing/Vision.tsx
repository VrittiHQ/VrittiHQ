"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vision } from "@/config/copy";

export function Vision() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="v-section v-section-offset">
      <div className="v-container">
        <motion.h2 className="v-section-heading v-pill-heading"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          {vision.headline}
        </motion.h2>

        {/* Interactive Segmented Switcher instead of a stack */}
        <div className="v-pill-content-wrapper">
          <div className="v-pill-tabs">
            {vision.steps.map((step, i) => (
              <div
                key={step.label}
                onClick={() => setActiveIndex(i)}
                className={`v-pill-tab ${activeIndex === i ? "active" : ""}`}
                role="tab"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i); }}
              >
                {activeIndex === i && (
                  <motion.div
                    layoutId="visionTabIndicator"
                    className="v-pill-indicator"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="v-pill-text">{step.label}</span>
              </div>
            ))}
          </div>

          <div className="v-pill-pane">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="v-pill-pane-inner"
              >
                <h3 className="v-card-heading v-pill-pane-title">{vision.steps[activeIndex].title}</h3>
                <p className="v-body-lg v-mt-xs v-pill-pane-desc">
                  {vision.steps[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
