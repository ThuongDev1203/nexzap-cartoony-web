import React from "react";

const PrivacyPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-gray-800">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-orange-500">
          Home
        </a>{" "}
        <span className="mx-1">/</span> <span>Privacy Policy</span>
      </nav>

      {/* Title */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">Effective Date: July 1, 2025</p>
      </header>

      {/* Content */}
      <div className="space-y-12 text-[17px] leading-7">
        <Section title="1. Introduction">
          This privacy policy applies to the <strong>Meow Block Jam</strong> app
          (hereby referred to as “Application”) for mobile devices that was
          created by <strong>NexZap Studio</strong> (hereby referred to as
          “Service Provider”) as a Free service. This service is intended for
          use <strong>"AS IS"</strong>.
        </Section>

        <Section title="2. Information Collection and Use">
          <p>
            The Application collects information when you download and use it.
            This information may include:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Your device's Internet Protocol address (e.g., IP address)</li>
            <li>
              The pages of the Application that you visit, the time and date of
              your visit, and the time spent
            </li>
            <li>The operating system you use on your mobile device</li>
          </ul>
          <p className="mt-2">
            The Application does <strong>not</strong> gather precise location
            data. You may be asked to provide personal data such as your email:{" "}
            <strong>nexzap.studio@gmail.com</strong>.
          </p>
        </Section>

        <Section title="3. Third-Party Access">
          <p>
            We may share anonymous data with the following services to improve
            performance:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Google Play Services</li>
            <li>AdMob</li>
            <li>Unity</li>
          </ul>
          <p className="mt-2">We may disclose data in these situations:</p>
          <ul className="list-disc list-inside mt-2">
            <li>To comply with law or legal process</li>
            <li>To protect rights or investigate fraud</li>
            <li>With trusted services bound by this policy</li>
          </ul>
        </Section>

        <Section title="4. Opt-Out Rights">
          You can stop all data collection by uninstalling the app using your
          device’s standard uninstall process.
        </Section>

        <Section title="5. Data Retention Policy">
          We retain data while the app is used and for a reasonable time
          afterward. To delete your data, contact us at:{" "}
          <a
            href="mailto:nexzap.studio@gmail.com"
            className="text-orange-500 underline"
          >
            nexzap.studio@gmail.com
          </a>
          .
        </Section>

        <Section title="6. Children’s Privacy">
          We do not knowingly collect data from children under 13. If such data
          is found, we will delete it immediately. Parents can contact us for
          removal.
        </Section>

        <Section title="7. Security">
          We implement physical, electronic, and procedural safeguards to
          protect your data.
        </Section>

        <Section title="8. Changes to This Privacy Policy">
          We may update this policy. You should review this page periodically.
          Continued use implies acceptance of changes.
        </Section>

        <Section title="9. Your Consent">
          By using the app, you agree to the terms of this Privacy Policy.
        </Section>

        <Section title="10. Contact Us">
          If you have questions, contact us at:{" "}
          <a
            href="mailto:nexzap.studio@gmail.com"
            className="text-orange-500 underline"
          >
            nexzap.studio@gmail.com
          </a>
          .
        </Section>
      </div>
    </div>
  );
};

// Reusable section with title underline
const Section = ({ title, children }) => (
  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b pb-1 border-orange-200">
      {title}
    </h2>
    <div className="text-gray-700">{children}</div>
  </section>
);

export default PrivacyPage;
