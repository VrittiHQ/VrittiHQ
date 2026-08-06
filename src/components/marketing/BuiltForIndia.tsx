"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { builtForIndia } from "@/config/copy";

export function BuiltForIndia() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="v-section">
      <div className="v-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <span className="v-label">{builtForIndia.label}</span>
          <h2 className="v-section-heading v-mt-sm v-content-block">{builtForIndia.headline}</h2>
        </motion.div>

        {/* Accordion */}
        <div className="v-accordion-list v-mt-xl">
          {builtForIndia.cards.map((card, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div 
                key={card.title}
                className="v-accordion-item"
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveIndex(isActive ? null : i)}
              >
                <div className="v-accordion-header">
                  <h3 className={`v-accordion-title ${isActive ? "active" : ""}`}>
                    {card.title}
                  </h3>
                  <motion.div 
                    className="v-accordion-icon"
                    animate={{ rotate: isActive ? 45 : 0 }} 
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="v-accordion-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="v-body-lg v-mt-sm v-pill-pane-desc">
                        {card.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
