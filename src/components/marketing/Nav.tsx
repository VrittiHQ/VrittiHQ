"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { env } from "@/config/env";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`mk-nav ${scrolled ? "mk-nav-scrolled" : ""}`}>
      <div className="mk-nav-inner">
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: "1.35rem",
            fontWeight: 700,
            color: "var(--mk-text)",
            letterSpacing: "-0.02em",
          }}>
            VrittiHR
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="mk-nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="mk-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="mk-nav-actions-desktop" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href={`${env.dashboardUrl}/sign-in`} className="mk-nav-link">
            Sign in
          </a>
          <Link href="/contact" className="mk-nav-cta">
            Request Access
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mk-nav-mobile-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--mk-text-secondary)",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              borderTop: "1px solid var(--mk-border-light)",
              background: "var(--mk-bg-white)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "1rem 1.5rem" }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 0",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--mk-text-secondary)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--mk-border-light)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingTop: "1rem" }}>
                <a
                  href={`${env.dashboardUrl}/sign-in`}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "0.75rem",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--mk-text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  Sign in
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mk-btn-primary"
                  style={{ justifyContent: "center", padding: "0.75rem", fontSize: "0.875rem" }}
                >
                  Request Access
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
