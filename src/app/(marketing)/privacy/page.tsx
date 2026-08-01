export default function PrivacyPage() {
  return (
    <div className="mk-page">
      <section className="mk-section" style={{ paddingTop: "6rem", paddingBottom: "2rem" }}>
        <div className="mk-container-narrow">
          <span className="mk-label">Legal</span>
          <h1 className="mk-display-md" style={{ marginTop: "0.75rem" }}>
            Privacy Policy
          </h1>
          <p className="mk-body-lg" style={{ marginTop: "1rem" }}>
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="mk-section" style={{ paddingTop: "0" }}>
        <div className="mk-container-narrow">
          <div className="mk-card" style={{ padding: "2.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                color: "var(--mk-text-secondary)",
                fontSize: "0.9375rem",
                lineHeight: "1.6",
              }}
            >
              <style>{`
                .mk-legal-content h2 {
                  font-size: 1.25rem;
                  font-weight: 700;
                  color: var(--mk-text);
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                }
                .mk-legal-content h3 {
                  font-size: 1.0625rem;
                  font-weight: 600;
                  color: var(--mk-text);
                  margin-top: 1rem;
                  margin-bottom: 0.5rem;
                }
                .mk-legal-content ul {
                  list-style-type: disc;
                  padding-left: 1.5rem;
                  margin-bottom: 1rem;
                }
                .mk-legal-content li {
                  margin-bottom: 0.375rem;
                }
                .mk-legal-content p {
                  margin-bottom: 1rem;
                }
                .mk-legal-content strong {
                  color: var(--mk-text);
                  font-weight: 600;
                }
              `}</style>
              <div className="mk-legal-content">
                <h2>1. Introduction</h2>
                <p>
                  VrittiHR (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our operational and HR management platform.
                </p>

                <h2>2. Information We Collect</h2>
                
                <h3>2.1 Information You Provide</h3>
                <ul>
                  <li><strong>Account Information:</strong> Name, email, phone number, company name</li>
                  <li><strong>Employee Data:</strong> Names, contact details, employment information, salary details</li>
                  <li><strong>Biometric Data:</strong> Facial recognition data for attendance verification</li>
                  <li><strong>Attendance Data:</strong> Punch times, GPS coordinates, selfie images</li>
                  <li><strong>Payment Information:</strong> Billing details for subscription payments</li>
                </ul>

                <h3>2.2 Information Collected Automatically</h3>
                <ul>
                  <li>Device information (type, operating system, browser)</li>
                  <li>IP address and location data</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul>
                  <li>Provide and maintain the Service</li>
                  <li>Process attendance and payroll</li>
                  <li>Verify employee identity through biometrics</li>
                  <li>Generate reports and analytics</li>
                  <li>Send notifications and updates</li>
                  <li>Provide customer support</li>
                  <li>Improve our Service</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2>4. Biometric Data</h2>
                <p>
                  We take special care with biometric data (facial recognition):
                </p>
                <ul>
                  <li>Biometric data is encrypted at rest and in transit</li>
                  <li>Face embeddings are stored as mathematical vectors, not actual images</li>
                  <li>Biometric data is never shared with third parties</li>
                  <li>For on-premise deployments, biometric data never leaves your infrastructure</li>
                  <li>Employees can request deletion of their biometric data</li>
                </ul>

                <h2>5. Data Sharing</h2>
                <p>We may share your information with:</p>
                <ul>
                  <li><strong>Service Providers:</strong> Cloud hosting, payment processing, analytics</li>
                  <li><strong>Legal Requirements:</strong> When required by law or legal process</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale</li>
                </ul>
                <p>
                  We do NOT sell your personal information to third parties.
                </p>

                <h2>6. Data Security</h2>
                <p>We implement industry-standard security measures:</p>
                <ul>
                  <li>AES-256 encryption for data at rest</li>
                  <li>TLS 1.3 encryption for data in transit</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Role-based access control</li>
                  <li>Audit logs for all data access</li>
                  <li>Secure data centers in India</li>
                </ul>

                <h2>7. Data Retention</h2>
                <p>
                  We retain your data for as long as your account is active or as needed to provide
                  services. After account termination:
                </p>
                <ul>
                  <li>Account data is deleted within 30 days</li>
                  <li>Backups are purged within 90 days</li>
                  <li>Some data may be retained for legal compliance</li>
                </ul>

                <h2>8. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data (subject to legal requirements)</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for biometric processing</li>
                </ul>

                <h2>9. Cookies</h2>
                <p>
                  We use cookies and similar technologies for:
                </p>
                <ul>
                  <li>Authentication and session management</li>
                  <li>Remembering your preferences</li>
                  <li>Analytics and performance monitoring</li>
                </ul>
                <p>
                  You can control cookies through your browser settings.
                </p>

                <h2>10. Children&apos;s Privacy</h2>
                <p>
                  Our Service is not intended for individuals under 18 years of age. We do not
                  knowingly collect personal information from children.
                </p>

                <h2>11. International Data Transfers</h2>
                <p>
                  Your data is primarily stored in India. If data is transferred internationally,
                  we ensure appropriate safeguards are in place.
                </p>

                <h2>12. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                </p>

                <h2>13. Contact Us</h2>
                <p>
                  For privacy-related questions or to exercise your rights, contact us at:
                </p>
                <ul>
                  <li>Email: privacy@vrittihr.com</li>
                  <li>Address: Indore, Madhya Pradesh, India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
