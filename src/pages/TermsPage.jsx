import React from "react";

const TermsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-gray-800">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-orange-500">
          Home
        </a>{" "}
        <span className="mx-1">/</span> <span>Terms of Service</span>
      </nav>

      {/* Title */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500">Effective Date: July 1, 2025</p>
      </header>

      {/* Content */}
      <div className="space-y-12 text-[17px] leading-7">
        <Section title="1. Acceptance of Terms">
          By accessing and using the Meow Block Jam mobile application (the
          “Application”) provided by <strong>NexZap Studio</strong> (“we”,
          “our”, “us”), you agree to be bound by these Terms of Service. If you
          do not agree to these terms, please do not use the Application.
        </Section>

        <Section title="2. Use of the Application">
          <ul className="list-disc list-inside mt-2">
            <li>You agree to use the Application only for lawful purposes.</li>
            <li>
              You may not attempt to reverse engineer, duplicate, or exploit the
              Application.
            </li>
            <li>
              We reserve the right to suspend or terminate access to the
              Application at any time without prior notice.
            </li>
          </ul>
        </Section>

        <Section title="3. Intellectual Property">
          <p>
            All content, design, graphics, and code in the Application are the
            property of NexZap Studio or its licensors. Unauthorized use is
            strictly prohibited.
          </p>
        </Section>

        <Section title="4. Third-Party Services">
          <p>
            The Application may include third-party services such as Google Play
            Services, AdMob, or Unity. Your use of these services is subject to
            their respective terms and policies.
          </p>
        </Section>

        <Section title="5. Disclaimer">
          <p>
            The Application is provided on an "AS IS" basis. NexZap Studio makes
            no warranties regarding the accuracy, reliability, or availability
            of the Application. Your use is at your own risk.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            NexZap Studio shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from the use or
            inability to use the Application.
          </p>
        </Section>

        <Section title="7. Changes to Terms">
          <p>
            We reserve the right to modify or replace these Terms at any time.
            Continued use of the Application after changes constitutes
            acceptance of those changes.
          </p>
        </Section>

        <Section title="8. Governing Law">
          <p>
            These Terms are governed by the laws of Vietnam, without regard to
            its conflict of laws principles.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            For questions about these Terms, please contact us at:{" "}
            <a
              href="mailto:nexzap.studio@gmail.com"
              className="text-orange-500 underline"
            >
              nexzap.studio@gmail.com
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b pb-1 border-orange-200">
      {title}
    </h2>
    <div className="text-gray-700">{children}</div>
  </section>
);

export default TermsPage;
