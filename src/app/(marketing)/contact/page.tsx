"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vrittihr.com",
    href: "mailto:hello@vrittihr.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
  },
];

const EMPLOYEE_RANGES = [
  "1-25",
  "26-50",
  "51-100",
  "101-250",
  "251-500",
  "500+",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "12px",
  border: "1px solid var(--mk-border)",
  background: "var(--mk-bg-white)",
  fontFamily: "'Satoshi', sans-serif",
  fontSize: "0.9375rem",
  color: "var(--mk-text)",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: "var(--mk-text-secondary)",
  marginBottom: "0.375rem",
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mk-page" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "2rem",
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: "center", maxWidth: "420px" }}
        >
          <div style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            background: "var(--mk-success-bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}>
            <CheckCircle2 size={28} style={{ color: "var(--mk-success)" }} />
          </div>
          <h2 className="mk-display-md" style={{ marginTop: "1.25rem" }}>
            Thank you!
          </h2>
          <p className="mk-body-lg" style={{ marginTop: "0.5rem" }}>
            We&apos;ve received your message and will get back to you within 24 hours.
          </p>
          <Link href="/" className="mk-btn-secondary" style={{ marginTop: "1.5rem" }}>
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mk-page">
      {/* Header */}
      <section className="mk-section-tight" style={{ textAlign: "center" }}>
        <div className="mk-container-narrow">
          <motion.span
            className="mk-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact
          </motion.span>
          <motion.h1
            className="mk-display-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ marginTop: "0.75rem", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            Let&apos;s talk
          </motion.h1>
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "1rem" }}
          >
            Interested in VrittiHR? Request early access, ask a question,
            or tell us about your organization.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <div className="mk-container" style={{ maxWidth: "1000px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "3rem",
            alignItems: "start",
          }}>
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mk-card"
              style={{ padding: "2.5rem" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--mk-brand)"; e.target.style.boxShadow = "0 0 0 3px rgba(124, 107, 245, 0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--mk-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@company.com"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--mk-brand)"; e.target.style.boxShadow = "0 0 0 3px rgba(124, 107, 245, 0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--mk-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--mk-brand)"; e.target.style.boxShadow = "0 0 0 3px rgba(124, 107, 245, 0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--mk-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Company name"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "var(--mk-brand)"; e.target.style.boxShadow = "0 0 0 3px rgba(124, 107, 245, 0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--mk-border)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <label style={labelStyle}>Number of Employees</label>
                <select
                  value={formState.employees}
                  onChange={(e) => setFormState({ ...formState, employees: e.target.value })}
                  style={{ ...inputStyle, cursor: "pointer", appearance: "auto" as React.CSSProperties["appearance"] }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--mk-brand)"; e.target.style.boxShadow = "0 0 0 3px rgba(124, 107, 245, 0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--mk-border)"; e.target.style.boxShadow = "none"; }}
                >
                  <option value="">Select range</option>
                  {EMPLOYEE_RANGES.map((r) => (
                    <option key={r} value={r}>{r} employees</option>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <label style={labelStyle}>Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about your organization and what you're looking for..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--mk-brand)"; e.target.style.boxShadow = "0 0 0 3px rgba(124, 107, 245, 0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--mk-border)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              {error && (
                <div style={{
                  marginTop: "1rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  background: "rgba(220, 38, 38, 0.06)",
                  color: "#dc2626",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mk-btn-primary"
                style={{
                  marginTop: "1.5rem",
                  width: "100%",
                  justifyContent: "center",
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="mk-card" style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div className="mk-icon-box mk-icon-box-sm">
                      <info.icon size={18} />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--mk-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {info.label}
                      </p>
                      {info.href ? (
                        <a href={info.href} style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--mk-text)", textDecoration: "none" }}>
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--mk-text)" }}>{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick note */}
              <div style={{
                padding: "1.5rem",
                borderRadius: "16px",
                background: "var(--mk-brand-bg)",
                border: "1px solid rgba(124, 107, 245, 0.15)",
              }}>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--mk-brand-dark)", marginBottom: "0.5rem" }}>
                  Typical response time
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--mk-text-secondary)", lineHeight: 1.5 }}>
                  We respond to all inquiries within 24 hours. For urgent matters, reach us on phone.
                </p>
              </div>
            </motion.div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .mk-container [style*="grid-template-columns: 1fr 340px"] {
                grid-template-columns: 1fr !important;
              }
            }
            @media (max-width: 640px) {
              form [style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
