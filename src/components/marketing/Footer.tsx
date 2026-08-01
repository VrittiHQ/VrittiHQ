"use client";

import Link from "next/link";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const SOCIAL_LINKS = [
  {
    label: "Twitter",
    href: "https://twitter.com/vrittihr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/vrittihr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="mk-footer">
      <div className="mk-container">
        <div className="mk-footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
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
            <p style={{
              marginTop: "1rem",
              maxWidth: "280px",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              color: "var(--mk-text-tertiary)",
            }}>
              The operating system for Indian organizations. AI-native HR, payroll, and workforce intelligence.
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem" }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "8px",
                    color: "var(--mk-text-muted)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--mk-text)";
                    e.currentTarget.style.background = "var(--mk-bg-alt)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--mk-text-muted)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="mk-footer-heading">{category}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.href} style={{ marginBottom: "0.375rem" }}>
                    <Link href={link.href} className="mk-footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mk-footer-bottom">
          <p style={{ fontSize: "0.8125rem", color: "var(--mk-text-muted)" }}>
            © {new Date().getFullYear()} VrittiHR. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "var(--mk-text-muted)" }}>
            Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
