"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ScanFace,
  Clock,
  Tablet,
  CalendarDays,
  IndianRupee,
  Building2,
  MapPin,
  Shield,
  Wifi,
  BarChart3,
  Users,
  Bell,
  FileText,
  Lock,
  Smartphone,
  ArrowRight,
  Database,
  Code,
  Network
} from "lucide-react";

// --- Custom Visualizers for each section (replaces generic icons) ---

function AttendanceVisualizer() {
  return (
    <div style={{ width: "100%", padding: "1.5rem", background: "#0c0b10", borderRadius: "16px", color: "#a19fb0", fontFamily: "monospace", fontSize: "0.8125rem", overflow: "hidden", border: "1px solid #28253a" }}>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#dc2626" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
      </div>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>{`> Syncing event stream...`}</motion.div>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ color: "#10b981" }}>{`[OK] 14:32:01 — EMP_492 (Punch In)`}</motion.div>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ paddingLeft: "1rem", borderLeft: "1px solid #28253a", margin: "0.5rem 0" }}>
        <div>{`Lat: 22.7196° N`}</div>
        <div>{`Lng: 75.8577° E`}</div>
        <div style={{ color: "#7c6bf5" }}>{`Geofence: INSIDE (Radius: 50m)`}</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ color: "#10b981" }}>{`[OK] 14:32:05 — Write to EventBus`}</motion.div>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>{`> Updating daily summary...`}</motion.div>
    </div>
  );
}

function FaceVisualizer() {
  return (
    <div style={{ width: "100%", padding: "1.5rem", background: "var(--mk-bg-white)", borderRadius: "16px", border: "1px solid var(--mk-border-light)", boxShadow: "var(--mk-shadow-sm)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><ScanFace size={18} color="var(--mk-brand)" /> <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>pgvector match</span></div>
        <span style={{ fontSize: "0.75rem", background: "var(--mk-success-bg)", color: "var(--mk-success)", padding: "2px 8px", borderRadius: "100px", fontWeight: 600 }}>0.982</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "4px" }}>
        {Array.from({ length: 48 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: ((i * 7) % 5) * 0.1 + 0.2 }}
            transition={{ delay: i * 0.01 }}
            style={{ height: 16, background: "var(--mk-brand)", borderRadius: "2px" }}
          />
        ))}
      </div>
      <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.75rem", color: "var(--mk-text-tertiary)", fontFamily: "monospace" }}>
        512-dim InsightFace Embedding
      </div>
    </div>
  );
}

function KioskVisualizer() {
  return (
    <div style={{ width: "100%", maxWidth: "280px", margin: "0 auto", aspectRatio: "3/4", background: "#000", padding: "8px", borderRadius: "24px", border: "2px solid #28253a", position: "relative" }}>
      <div style={{ width: "100%", height: "100%", background: "#16141e", borderRadius: "16px", padding: "1rem", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#a19fb0", fontSize: "0.75rem", marginBottom: "2rem" }}>
          <span>10:42 AM</span>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}><Wifi size={12} color="#dc2626" /> Offline</div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(124, 107, 245, 0.1)", border: "2px dashed var(--mk-brand)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
            <ScanFace size={32} color="var(--mk-brand)" />
          </div>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", textAlign: "center" }}>Scanning...</p>
        </div>
        <div style={{ background: "#201e2c", borderRadius: "8px", padding: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#a19fb0", fontSize: "0.75rem" }}>Queue</span>
          <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 600 }}>14 pending</span>
        </div>
      </div>
    </div>
  );
}

function LeaveVisualizer() {
  return (
    <div style={{ width: "100%", padding: "1.5rem", background: "var(--mk-bg-white)", borderRadius: "16px", border: "1px solid var(--mk-border-light)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[ 
          { step: "Requested", status: "done", time: "2m ago" },
          { step: "Manager Approval", status: "active", time: "Pending" },
          { step: "HR Finalization", status: "wait", time: "—" }
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div style={{ 
                width: 24, height: 24, borderRadius: "50%", 
                background: item.status === "done" ? "var(--mk-brand)" : item.status === "active" ? "var(--mk-brand-bg)" : "var(--mk-bg-alt)",
                border: item.status === "active" ? "2px solid var(--mk-brand)" : "none",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {item.status === "done" && <Check size={12} color="#fff" />}
              </div>
              {i < 2 && <div style={{ width: 2, height: 24, background: item.status === "done" ? "var(--mk-brand)" : "var(--mk-border-light)" }} />}
            </div>
            <div style={{ paddingTop: "2px" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: item.status === "wait" ? "var(--mk-text-tertiary)" : "var(--mk-text)" }}>{item.step}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--mk-text-tertiary)" }}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import { Check } from "lucide-react";

function PayrollVisualizer() {
  const code = `"tax_rules": {
  "pf_eligible": true,
  "pf_wage_limit": 15000,
  "employee_pf": 12.0,
  "employer_pf": 12.0,
  "esi_eligible": true,
  "esi_wage_limit": 21000,
  "employee_esi": 0.75,
  "employer_esi": 3.25,
  "pt_slab": "maharashtra_v2"
}`;
  return (
    <div style={{ width: "100%", padding: "1.5rem", background: "#0c0b10", borderRadius: "16px", color: "#e2e8f0", fontFamily: "monospace", fontSize: "0.8125rem", border: "1px solid #28253a" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", color: "#a19fb0", fontSize: "0.75rem", textTransform: "uppercase" }}>
        <Code size={14} /> org_config.json
      </div>
      <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "#a78bfa" }}>
        {code}
      </pre>
    </div>
  );
}

function MultiTenantVisualizer() {
  return (
    <div style={{ width: "100%", padding: "2rem", background: "var(--mk-bg-white)", borderRadius: "16px", border: "1px solid var(--mk-border-light)", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ padding: "0.5rem 1rem", background: "var(--mk-brand)", color: "#fff", borderRadius: "8px", fontSize: "0.875rem", fontWeight: 600 }}>Root Organization</div>
      <div style={{ width: 2, height: 24, background: "var(--mk-border)" }} />
      <div style={{ width: "60%", height: 2, background: "var(--mk-border)" }} />
      <div style={{ display: "flex", width: "100%", justifyContent: "space-around", marginTop: "-2px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 2, height: 24, background: "var(--mk-border)" }} />
          <div style={{ padding: "0.5rem", background: "var(--mk-bg-alt)", border: "1px solid var(--mk-border)", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600, color: "var(--mk-text)" }}>Factory Unit</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 2, height: 24, background: "var(--mk-border)" }} />
          <div style={{ padding: "0.5rem", background: "var(--mk-bg-alt)", border: "1px solid var(--mk-border)", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600, color: "var(--mk-text)" }}>Corporate HQ</div>
        </div>
      </div>
    </div>
  );
}

const FEATURE_SECTIONS = [
  {
    id: "attendance",
    title: "Smart Attendance",
    description: "Multiple ways to track attendance with verification at every step.",
    icon: Clock,
    Visual: AttendanceVisualizer,
    features: [
      { title: "GPS-Verified Punch", description: "Employees punch in/out with location verification. Configurable geofence radius per branch.", icon: MapPin },
      { title: "Selfie Capture", description: "Every punch includes a selfie for visual verification. Stored securely for audit.", icon: ScanFace },
      { title: "Offline Support", description: "Works without internet. Syncs automatically when connection is restored.", icon: Wifi },
      { title: "Real-time Dashboard", description: "See who's in, who's late, who's absent — all in real-time.", icon: BarChart3 },
    ],
  },
  {
    id: "face",
    title: "Face Recognition",
    description: "AI-powered biometric verification to eliminate proxy attendance.",
    icon: ScanFace,
    Visual: FaceVisualizer,
    features: [
      { title: "One-Time Enrollment", description: "Simple face enrollment process. Works with any smartphone camera.", icon: Users },
      { title: "Instant Verification", description: "Face matching happens in under 2 seconds. Works even with glasses, masks.", icon: Clock },
      { title: "Anti-Spoofing", description: "Liveness detection prevents photo/video spoofing attempts.", icon: Shield },
      { title: "Privacy First", description: "Face data is encrypted and never leaves your infrastructure.", icon: Lock },
    ],
  },
  {
    id: "kiosk",
    title: "Kiosk Mode",
    description: "Turn any Android tablet into a dedicated attendance terminal.",
    icon: Tablet,
    Visual: KioskVisualizer,
    features: [
      { title: "Dedicated App", description: "Purpose-built kiosk app that locks the device to attendance mode.", icon: Smartphone },
      { title: "Batch Scanning", description: "Scan multiple employees in quick succession. Perfect for shift changes.", icon: Users },
      { title: "Offline Queue", description: "Stores punches locally when offline. Auto-syncs when back online.", icon: Wifi },
      { title: "Voice Feedback", description: "Audio confirmation of successful punch. Supports multiple languages.", icon: Bell },
    ],
  },
  {
    id: "leave",
    title: "Leave Management",
    description: "Complete leave lifecycle from application to approval.",
    icon: CalendarDays,
    Visual: LeaveVisualizer,
    features: [
      { title: "Multiple Leave Types", description: "Casual, sick, earned, comp-off, and custom leave types.", icon: FileText },
      { title: "Approval Workflow", description: "Multi-level approval chains. Notifications at each step.", icon: Users },
      { title: "Balance Tracking", description: "Auto-calculated balances with carryover and encashment rules.", icon: BarChart3 },
      { title: "Holiday Calendar", description: "Configure holidays per branch/department. Auto-applies to leave calculations.", icon: CalendarDays },
    ],
  },
  {
    id: "payroll",
    title: "Payroll Processing",
    description: "End-to-end salary processing with Indian compliance built-in.",
    icon: IndianRupee,
    Visual: PayrollVisualizer,
    features: [
      { title: "Salary Structures", description: "Define components: basic, HRA, DA, allowances, deductions.", icon: FileText },
      { title: "Auto Calculations", description: "PF, ESI, PT, TDS calculated automatically based on latest rules.", icon: BarChart3 },
      { title: "Payslip Generation", description: "Professional payslips in PDF. Bulk download or email to employees.", icon: FileText },
      { title: "Statutory Reports", description: "Generate PF ECR, ESI returns, Form 16 with one click.", icon: Shield },
    ],
  },
  {
    id: "multi-tenant",
    title: "Multi-Organization",
    description: "Manage multiple companies, branches, and hierarchies from one account.",
    icon: Building2,
    Visual: MultiTenantVisualizer,
    features: [
      { title: "Organization Hierarchy", description: "Parent companies with subsidiaries. Each with independent settings.", icon: Building2 },
      { title: "Branch Management", description: "Multiple locations per org. Branch-specific geofences and policies.", icon: MapPin },
      { title: "Role-Based Access", description: "CFO sees everything. Branch HR sees only their branch. Fully configurable.", icon: Shield },
      { title: "Consolidated Reports", description: "Roll-up reports across all orgs/branches. Or drill down to individual.", icon: BarChart3 },
    ],
  },
];

export default function FeaturesPage() {
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
            Platform Capabilities
          </motion.span>
          <motion.h1
            className="mk-display-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ marginTop: "0.75rem", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            Built to operate, not just display
          </motion.h1>
          <motion.p
            className="mk-body-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "1rem" }}
          >
            Every feature is outcome-focused, Indian-compliance-aware, and
            engineered for organizations that demand precision infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Feature Sections */}
      <div style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        {FEATURE_SECTIONS.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className="mk-section-tight"
            style={{ background: sectionIndex % 2 === 1 ? "var(--mk-bg-alt)" : "transparent" }}
          >
            <div className="mk-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4rem",
                  alignItems: "center",
                }}
              >
                {/* Text — alternates sides */}
                <div style={{ order: sectionIndex % 2 === 1 ? 2 : 1 }}>
                  <div className="mk-icon-box" style={{ marginBottom: "1rem" }}>
                    <section.icon size={22} />
                  </div>
                  <h2 className="mk-display-md">{section.title}</h2>
                  <p className="mk-body-lg" style={{ marginTop: "0.5rem" }}>{section.description}</p>

                  <div style={{
                    marginTop: "2rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                  }}>
                    {section.features.map((f) => (
                      <div key={f.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <div className="mk-icon-box mk-icon-box-sm" style={{ marginTop: "2px" }}>
                          <f.icon size={16} />
                        </div>
                        <div>
                          <h4 style={{
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "var(--mk-text)",
                            marginBottom: "0.25rem",
                          }}>
                            {f.title}
                          </h4>
                          <p className="mk-body-sm" style={{ margin: 0 }}>{f.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Visualizer */}
                <div style={{
                  order: sectionIndex % 2 === 1 ? 1 : 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem"
                }}>
                  <div style={{ width: "100%", maxWidth: "400px" }}>
                    <section.Visual />
                  </div>
                </div>
              </motion.div>

              <style>{`
                @media (max-width: 768px) {
                  .mk-container [style*="grid-template-columns: 1fr 1fr"] {
                    grid-template-columns: 1fr !important;
                  }
                  .mk-container [style*="order: 2"] {
                    order: 1 !important;
                  }
                }
              `}</style>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="mk-section mk-dark" style={{ textAlign: "center" }}>
        <div className="mk-container-narrow">
          <h2 className="mk-display-md">Ready to get started?</h2>
          <p className="mk-body-lg" style={{ marginTop: "1rem" }}>
            Join organizations across India already using VrittiHR.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="mk-btn-primary" style={{ background: "#fff", color: "var(--mk-bg-dark)" }}>
              Request Demo <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="mk-btn-secondary" style={{ borderColor: "var(--mk-border-dark)", color: "var(--mk-text-on-dark-secondary)" }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
