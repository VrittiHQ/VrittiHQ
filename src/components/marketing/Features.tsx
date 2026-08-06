"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { features } from "@/config/copy";

export function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numItems = features.items.length;
    const index = Math.min(Math.floor(latest * numItems), numItems - 1);
    if (index !== activeIndex) {
      setActiveIndex(Math.max(0, index));
    }
  });

  return (
    <section 
      ref={containerRef} 
      style={{ height: `${features.items.length * 60}vh` }}
      className="v-section-offset v-scroll-section"
    >
      <div className="v-scroll-viewport">
        <div className="v-container">
          
          <div className="v-grid-2 v-scroll-grid">
            {/* Left side: Header (Static) */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="v-label">{features.label}</span>
              <h2 className="v-section-heading v-mt-sm v-body-constrained">
                {features.headline}
              </h2>
              <div className="v-row v-gap-sm v-mt-md">
                {features.items.map((_, i) => (
                  <div key={i} className={`v-scroll-progress-bar ${i === activeIndex ? "active" : ""}`} />
                ))}
              </div>
            </motion.div>

            {/* Right side: Active Card (Dynamic) */}
            <div className="v-scroll-content">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="v-number">
                    0{activeIndex + 1}
                  </span>
                  <div className="v-mt-sm">
                    <h3 className="v-card-heading v-pill-pane-title">{features.items[activeIndex].title}</h3>
                    <p className="v-body-lg v-mt-xs v-body-constrained">
                      {features.items[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
