"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      { name: "All features included", included: true },
      { name: "Custom reports", included: true },
      { name: "24/7 phone support", included: true },
      { name: "Kiosk mode", included: true },
      { name: "API access", included: true },
      { name: "Payroll processing", included: true },
    ],
  },
  {
    name: "Enterprise",
    description: "For large enterprises",
    custom: true,
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      { name: "Unlimited employees", included: true },
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
  { q: "Is there a free trial?", a: "Yes! We offer a 14-day free trial on all plans. No credit card required." },
  { q: "Can I change plans later?", a: "Absolutely. Upgrade or downgrade anytime. Changes take effect next billing cycle." },
  { q: "What payment methods do you accept?", a: "All major credit/debit cards, UPI, net banking, and bank transfers for annual plans." },
  { q: "Is my data secure?", a: "Bank-grade encryption. Data stored in secure Indian data centers. Compliant with Indian data protection regulations." },
  { q: "Do you offer on-premise deployment?", a: "Yes, Enterprise plan includes on-premise deployment for organizations that require data to stay within their infrastructure." },
  { q: "What kind of support do you provide?", a: "All plans include email support. Professional and above get priority. Business/Enterprise include 24/7 phone support." },
];

function FaqItem({ faq }: { faq: { q: string, a: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="v-accordion-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="v-accordion-header">
        <h3 className={`v-accordion-title ${isOpen ? "active" : ""}`}>{faq.q}</h3>
        <span className="v-accordion-icon">{isOpen ? "\u2212" : "+"}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="v-accordion-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="v-body-sm v-mt-sm">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="v-page">
      <section className="v-section v-page-header">
        <div className="v-container">
          <motion.span className="v-label" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>Pricing</motion.span>
          <motion.h1 className="v-hero-heading v-mt-sm v-mid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Simple, transparent pricing
          </motion.h1>
          <motion.p className="v-body-lg v-mt-sm v-narrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            No hidden fees. No per-employee surprises. Straightforward pricing that scales with your organization.
          </motion.p>

          {/* Toggle */}
          <motion.div className="v-row v-gap-sm v-mt-lg v-pricing-toggle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <span className="v-body-sm" style={{ fontWeight: annual ? 400 : 600, color: annual ? "var(--v-text-muted)" : "var(--v-text)" }}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`v-toggle ${annual ? "v-toggle-on" : "v-toggle-off"}`}>
              <span className="v-toggle-dot" style={{ left: annual ? "22px" : "2px" }} />
            </button>
            <span className="v-body-sm" style={{ fontWeight: annual ? 600 : 400, color: annual ? "var(--v-text)" : "var(--v-text-muted)" }}>
              Annual <span className="v-pill v-pill-light v-mt-xs">Save 17%</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="v-section-compact">
        <div className="v-container v-wide">
          <div className="v-grid-4">
            {PLANS.map((plan, i) => (
              <motion.div key={plan.name} className={`v-card v-pricing-card ${plan.highlighted ? "v-card-highlighted" : ""}`}
                initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                {plan.highlighted && (
                  <div className="v-pricing-badge">
                    <span className="v-pill v-pill-accent">Most Popular</span>
                  </div>
                )}
                <h3 className="v-card-heading">{plan.name}</h3>
                <p className="v-body-sm v-mt-xs">{plan.description}</p>
                <div className="v-mt-md v-mb-md">
                  {plan.custom ? (
                    <span className="v-section-heading v-pricing-price">Custom</span>
                  ) : (
                    <>
                      <span className="v-section-heading v-pricing-price-lg">
                        &#x20B9;{(annual ? plan.priceYearly / 12 : plan.priceMonthly).toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                      </span>
                      <span className="v-body-sm">/month</span>
                      {annual && <p className="v-body-sm v-mt-xs">Billed &#x20B9;{plan.priceYearly.toLocaleString("en-IN")} annually</p>}
                    </>
                  )}
                </div>
                <ul className="v-check-list">
                  {plan.features.map((f) => (
                    <li key={f.name} className={`v-check-item v-body-sm ${!f.included ? "v-check-item-off" : ""}`}>
                      <span className="v-check-icon">{f.included ? "+" : "-"}</span>
                      {f.name}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`v-btn v-btn-full v-mt-md ${plan.highlighted ? "v-btn-accent" : "v-btn-primary"}`}>
                  {plan.custom ? "Contact Sales" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="v-section v-section-offset">
        <div className="v-container v-content-block-wide">
          <h2 className="v-section-heading v-mb-lg v-heading-center">Frequently asked questions</h2>
          <div className="v-stack v-gap-sm">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="v-section-compact">
        <div className="v-container">
          <p className="v-body-lg">Still have questions?</p>
          <Link href="/contact" className="v-link-accent v-mt-xs">Talk to our team &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
