"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    description: "For small teams getting started",
    priceMonthly: 499,
    priceYearly: 4990,
    features: [
      { name: "Up to 25 employees", included: true },
      { name: "1 branch/location", included: true },
      { name: "Attendance tracking", included: true },
      { name: "Leave management", included: true },
      { name: "Basic reports", included: true },
      { name: "Email support", included: true },
      { name: "Face recognition", included: false },
      { name: "Payroll processing", included: false },
      { name: "Kiosk mode", included: false },
      { name: "API access", included: false },
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses",
    priceMonthly: 1499,
    priceYearly: 14990,
    highlighted: true,
    features: [
      { name: "Up to 100 employees", included: true },
      { name: "3 branches/locations", included: true },
      { name: "Attendance tracking", included: true },
      { name: "Leave management", included: true },
      { name: "Advanced reports", included: true },
      { name: "Priority support", included: true },
      { name: "Face recognition", included: true },
      { name: "Payroll processing", included: true },
      { name: "Kiosk mode", included: false },
      { name: "API access", included: false },
    ],
  },
  {
    name: "Business",
    description: "For larger organizations",
    priceMonthly: 3999,
    priceYearly: 39990,
    features: [
      { name: "Up to 500 employees", included: true },
      { name: "Unlimited branches", included: true },
      { name: "Attendance tracking", included: true },
      { name: "Leave management", included: true },
      { name: "Custom reports", included: true },
      { name: "24/7 phone support", included: true },
      { name: "Face recognition", included: true },
      { name: "Payroll processing", included: true },
      { name: "Kiosk mode", included: true },
      { name: "API access", included: true },
    ],
  },
  {
    name: "Enterprise",
    description: "For large enterprises",
    priceMonthly: 0,
    priceYearly: 0,
    custom: true,
    features: [
      { name: "Unlimited employees", included: true },
      { name: "Unlimited branches", included: true },
      { name: "All features included", included: true },
      { name: "On-premise deployment", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "SLA guarantee", included: true },
      { name: "Custom training", included: true },
      { name: "Source code escrow", included: true },
      { name: "White-labeling", included: true },
    ],
  },
];

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes! We offer a 14-day free trial on all plans. No credit card required.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, UPI, net banking, and bank transfers for annual plans.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use bank-grade encryption, and your data is stored in secure Indian data centers. We're compliant with Indian data protection regulations.",
  },
  {
    q: "Do you offer on-premise deployment?",
    a: "Yes, our Enterprise plan includes on-premise deployment option for organizations that require data to stay within their infrastructure.",
  },
  {
    q: "What kind of support do you provide?",
    a: "All plans include email support. Professional and above get priority support, and Business/Enterprise plans include 24/7 phone support.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

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
            Pricing
          </motion.span>
          <motion.h1
            className="mk-display-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ marginTop: "0.75rem", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "1rem" }}
          >
            No hidden fees. No per-employee surprises. Straightforward pricing
            that scales with your organization.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{
              fontSize: "0.875rem",
              fontWeight: annual ? 400 : 600,
              color: annual ? "var(--mk-text-tertiary)" : "var(--mk-text)",
            }}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                position: "relative",
                width: "2.75rem",
                height: "1.5rem",
                borderRadius: "100px",
                background: annual ? "var(--mk-brand)" : "var(--mk-border)",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            >
              <span style={{
                position: "absolute",
                top: "2px",
                left: annual ? "22px" : "2px",
                width: "1.25rem",
                height: "1.25rem",
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "var(--mk-shadow-sm)",
                transition: "left 0.2s ease",
              }} />
            </button>
            <span style={{
              fontSize: "0.875rem",
              fontWeight: annual ? 600 : 400,
              color: annual ? "var(--mk-text)" : "var(--mk-text-tertiary)",
            }}>
              Annual
              <span style={{
                marginLeft: "0.5rem",
                fontSize: "0.6875rem",
                fontWeight: 600,
                padding: "0.125rem 0.5rem",
                borderRadius: "100px",
                background: "var(--mk-success-bg)",
                color: "var(--mk-success)",
              }}>
                Save 17%
              </span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <div className="mk-container-wide">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            alignItems: "start",
          }}>
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  border: plan.highlighted ? "2px solid var(--mk-brand)" : "1px solid var(--mk-border-light)",
                  background: "var(--mk-bg-white)",
                  padding: "2rem",
                  boxShadow: plan.highlighted ? "var(--mk-shadow-lg)" : "none",
                }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: "absolute",
                    top: "-0.75rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--mk-brand)",
                    color: "#fff",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.875rem",
                    borderRadius: "100px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}>
                    Most Popular
                  </div>
                )}

                <h3 className="mk-display-sm">{plan.name}</h3>
                <p className="mk-body-sm" style={{ marginTop: "0.25rem" }}>{plan.description}</p>

                <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                  {plan.custom ? (
                    <span style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "var(--mk-text)",
                    }}>Custom</span>
                  ) : (
                    <>
                      <span style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontSize: "2.5rem",
                        fontWeight: 800,
                        color: "var(--mk-text)",
                        letterSpacing: "-0.02em",
                      }}>
                        ₹{(annual ? plan.priceYearly / 12 : plan.priceMonthly).toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                      </span>
                      <span className="mk-body-sm" style={{ marginLeft: "0.25rem" }}>/month</span>
                      {annual && (
                        <p style={{ fontSize: "0.75rem", color: "var(--mk-text-muted)", marginTop: "0.25rem" }}>
                          Billed ₹{plan.priceYearly.toLocaleString("en-IN")} annually
                        </p>
                      )}
                    </>
                  )}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {plan.features.map((f) => (
                    <li key={f.name} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.8125rem",
                      color: f.included ? "var(--mk-text-secondary)" : "var(--mk-text-muted)",
                      textDecoration: f.included ? "none" : "line-through",
                    }}>
                      {f.included ? (
                        <Check size={14} style={{ color: "var(--mk-brand)", marginTop: "2px", flexShrink: 0 }} />
                      ) : (
                        <X size={14} style={{ color: "var(--mk-text-muted)", marginTop: "2px", flexShrink: 0 }} />
                      )}
                      {f.name}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={plan.highlighted ? "mk-btn-primary" : "mk-btn-secondary"}
                  style={{
                    marginTop: "1.5rem",
                    width: "100%",
                    justifyContent: "center",
                    padding: "0.75rem",
                    fontSize: "0.875rem",
                  }}
                >
                  {plan.custom ? "Contact Sales" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>

          <style>{`
            @media (max-width: 1024px) {
              .mk-container-wide [style*="grid-template-columns: repeat(4"] {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 640px) {
              .mk-container-wide [style*="grid-template-columns: repeat(4"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* FAQs */}
      <section className="mk-section" style={{ background: "var(--mk-bg-alt)" }}>
        <div className="mk-container">
          <h2 className="mk-display-md" style={{ textAlign: "center", marginBottom: "3rem" }}>
            Frequently asked questions
          </h2>
          <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}>
            {FAQS.map((faq) => (
              <div key={faq.q} className="mk-card">
                <h3 style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "var(--mk-text)",
                  marginBottom: "0.5rem",
                }}>
                  <HelpCircle size={18} style={{ color: "var(--mk-brand)", marginTop: "1px", flexShrink: 0 }} />
                  {faq.q}
                </h3>
                <p className="mk-body-sm" style={{ paddingLeft: "1.625rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 640px) {
              .mk-container [style*="grid-template-columns: repeat(2"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mk-section-tight" style={{ textAlign: "center" }}>
        <div className="mk-container-narrow">
          <p className="mk-body-lg">Still have questions?</p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              marginTop: "0.75rem",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--mk-brand)",
              textDecoration: "none",
            }}
          >
            Talk to our team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
