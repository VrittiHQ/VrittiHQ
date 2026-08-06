"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/copy";

const CONTACT_INFO = [
  { label: "Email", value: siteConfig.contact, href: `mailto:${siteConfig.contact}` },
  { label: "Location", value: "India", href: null },
];

const EMPLOYEE_RANGES = ["1-25", "26-50", "51-100", "101-250", "251-500", "500+"];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "", email: "", phone: "", company: "", employees: "", message: "",
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
      if (!response.ok) throw new Error(data.detail || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="v-page v-center" style={{ minHeight: "60vh" }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="v-narrow">
          <h2 className="v-section-heading">Thank you!</h2>
          <p className="v-body-lg v-mt-xs">We&apos;ve received your message and will get back to you within 24 hours.</p>
          <Link href="/" className="v-btn v-btn-primary v-mt-md">Back to Home</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="v-page">
      <section className="v-section v-page-header">
        <div className="v-container">
          <motion.span className="v-label" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>Contact</motion.span>
          <motion.h1 className="v-hero-heading v-mt-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Let&apos;s talk
          </motion.h1>
          <motion.p className="v-body-lg v-mt-sm v-narrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Interested in Vritti? Request early access, ask a question, or tell us about your organization.
          </motion.p>
        </div>
      </section>

      <section className="v-section-compact v-mb-lg">
        <div className="v-container">
          <div className="v-grid-form">
            {/* Form */}
            <motion.form onSubmit={handleSubmit} className="v-card v-card-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="v-grid-2">
                <div className="v-field">
                  <label className="v-field-label">Full Name *</label>
                  <input required type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name" className="v-input v-input-full" />
                </div>
                <div className="v-field">
                  <label className="v-field-label">Email *</label>
                  <input required type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@company.com" className="v-input v-input-full" />
                </div>
                <div className="v-field">
                  <label className="v-field-label">Phone</label>
                  <input type="tel" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 98765 43210" className="v-input v-input-full" />
                </div>
                <div className="v-field">
                  <label className="v-field-label">Company</label>
                  <input type="text" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Company name" className="v-input v-input-full" />
                </div>
              </div>
              <div className="v-field v-mt-md">
                <label className="v-field-label">Number of Employees</label>
                <select value={formState.employees} onChange={(e) => setFormState({ ...formState, employees: e.target.value })}
                  className="v-input v-input-full v-select">
                  <option value="">Select range</option>
                  {EMPLOYEE_RANGES.map((r) => (<option key={r} value={r}>{r} employees</option>))}
                </select>
              </div>
              <div className="v-field v-mt-md">
                <label className="v-field-label">Message *</label>
                <textarea required rows={4} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about your organization..." className="v-input v-input-full v-textarea" />
              </div>
              {error && <div className="v-error-box v-mt-md">{error}</div>}
              <button type="submit" disabled={submitting} className="v-btn v-btn-primary v-btn-full v-mt-md"
                style={{ opacity: submitting ? 0.7 : 1 }}>
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>

            {/* Contact info sidebar */}
            <motion.div className="v-stack v-gap-sm" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="v-card">
                  <p className="v-label v-mb-md">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="v-body" style={{ color: "var(--v-text)", textDecoration: "none", fontWeight: 500 }}>{info.value}</a>
                  ) : (
                    <p className="v-body" style={{ fontWeight: 500 }}>{info.value}</p>
                  )}
                </div>
              ))}
              <div className="v-info-box">
                <p className="v-body" style={{ fontWeight: 600, color: "var(--v-text)" }}>Typical response time</p>
                <p className="v-body-sm v-mt-xs">We respond to all inquiries within 24 hours.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
