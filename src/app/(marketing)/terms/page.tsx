import { siteConfig } from "@/config/copy";

export default function TermsPage() {
  return (
    <div className="v-page">
      <section className="v-section v-page-header">
        <div className="v-container">
          <span className="v-label">Legal</span>
          <h1 className="v-section-heading v-mt-sm">Terms of Service</h1>
          <p className="v-body-lg v-mt-sm">
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="v-section-compact">
        <div className="v-container">
          <div className="v-card v-card-lg v-narrow">
            <div className="v-legal-content">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using Vritti (&quot;the Service&quot;), you agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>

              <h2>2. Description of Service</h2>
              <p>Vritti is a human resources and operational management platform that provides:</p>
              <ul>
                <li>Attendance tracking and management</li>
                <li>Leave management</li>
                <li>Payroll processing</li>
                <li>Employee management</li>
                <li>Reporting and analytics</li>
              </ul>

              <h2>3. User Accounts</h2>
              <p>To use the Service, you must create an account. You are responsible for:</p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>

              <h2>4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Upload malicious code or content</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>

              <h2>5. Data and Privacy</h2>
              <p>
                Your use of the Service is also governed by our Privacy Policy. By using the Service,
                you consent to the collection and use of data as described in the Privacy Policy.
              </p>

              <h2>6. Payment Terms</h2>
              <p>For paid subscriptions:</p>
              <ul>
                <li>Fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
                <li>Failure to pay may result in suspension of service</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by
                Vritti and are protected by international copyright, trademark, and other
                intellectual property laws.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Vritti shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages resulting from
                your use of the Service.
              </p>

              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Vritti and its officers, directors,
                employees, and agents from any claims, damages, or expenses arising from your
                use of the Service or violation of these Terms.
              </p>

              <h2>10. Termination</h2>
              <p>
                We may terminate or suspend your account at any time for violation of these Terms.
                Upon termination, your right to use the Service will immediately cease.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of
                any material changes via email or through the Service.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India.
                Any disputes shall be subject to the exclusive jurisdiction of the courts in
                Indore, Madhya Pradesh.
              </p>

              <h2>13. Contact</h2>
              <p>For questions about these Terms, please contact us at:</p>
              <ul>
                <li>Email: {siteConfig.contact}</li>
                <li>Address: Indore, Madhya Pradesh, India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
