"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (~600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 99,
          }}
          className="mk-sticky-cta"
        >
          <div style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "0.75rem",
            borderRadius: "100px",
            boxShadow: "0 10px 40px -10px rgba(124,107,245,0.3)",
            border: "1px solid rgba(124,107,245,0.2)",
            display: "flex",
            alignItems: "center",
            gap: "1rem"
          }}>
            <span style={{ 
              paddingLeft: "1rem", 
              fontSize: "0.875rem", 
              fontWeight: 600,
              color: "var(--mk-text)",
              display: "none" // Hidden on very small screens, overridden in CSS
            }} className="mk-sticky-text">
              Ready to transform your HR?
            </span>
            <Link href="/contact" className="mk-btn-primary" style={{ padding: "0.625rem 1.25rem", borderRadius: "100px" }}>
              Get Early Access <ArrowRight size={16} />
            </Link>
          </div>
          <style>{`
            @media (min-width: 640px) {
              .mk-sticky-text { display: block !important; }
            }
            @media (max-width: 640px) {
              .mk-sticky-cta {
                bottom: 1rem !important;
                right: 1rem !important;
                left: 1rem !important;
                display: flex;
                justify-content: center;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
