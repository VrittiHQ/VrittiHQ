"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { nav, siteConfig } from "@/config/copy";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`v-nav ${scrolled ? "v-nav-scrolled" : ""}`}>
      <div className="v-nav-inner">
        <Link href="/" className="v-wordmark">{siteConfig.name}</Link>

        <div className="v-nav-links v-nav-desktop">
          {nav.links.map((link) => (
            <Link key={link.label} href={link.href} className="v-nav-link">{link.label}</Link>
          ))}
          {nav.signIn.href && (
            <a href={nav.signIn.href} className="v-nav-link v-nav-signin">{nav.signIn.label}</a>
          )}
          <Link href={nav.ctaHref} className="v-btn v-btn-primary v-btn-sm">
            {nav.cta}
          </Link>
        </div>

        <button className="v-nav-mobile-btn v-nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileOpen
              ? <><path d="M5 5l10 10" /><path d="M15 5L5 15" /></>
              : <><path d="M3 5h14" /><path d="M3 10h14" /><path d="M3 15h14" /></>}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="v-nav-mobile-menu">
          {nav.links.map((link) => (
            <Link key={link.label} href={link.href} className="v-nav-mobile-link" onClick={() => setMobileOpen(false)}>{link.label}</Link>
          ))}
          {nav.signIn.href && (
            <a href={nav.signIn.href} className="v-nav-mobile-link" onClick={() => setMobileOpen(false)}>{nav.signIn.label}</a>
          )}
          <Link href={nav.ctaHref} className="v-btn v-btn-primary v-btn-sm" onClick={() => setMobileOpen(false)}>
            {nav.cta}
          </Link>
        </div>
      )}
    </nav>
  );
}
