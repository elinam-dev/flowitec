import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Flowitec Group Ghana Limited — how we collect, use, and protect your personal information in accordance with applicable data protection laws.',
  alternates: { canonical: 'https://flowitec.com/legal/privacy' },
};

const sections = [
  {
    title: '1. Who We Are',
    content: `This Privacy Policy is issued by Flowitec Group Ghana Limited ("Flowitec", "we", "us", or "our"), a company incorporated under the laws of Ghana with its registered office at GT-373-0152 Opp IRS, Comm. 18 Junction, Spintex Road, Tema, Greater Accra, Ghana.

Flowitec is the data controller responsible for the personal information collected through this website and through our business operations. We are committed to protecting your privacy and handling your personal data in accordance with the Ghana Data Protection Act, 2012 (Act 843) and applicable international data protection standards.

If you have any questions about this policy or how we handle your data, please contact us at info@flowitec.com.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect personal information that you provide directly to us, including:

• Contact details: name, email address, phone number, job title, and company name submitted through our contact forms, quote request forms, or career application forms.
• Communication records: emails, messages, and correspondence you send to us.
• Career application data: CV/resume files, cover letters, and supporting documents submitted for job vacancies.
• Transaction information: details of products or services you have enquired about or purchased.

We also collect certain information automatically when you visit our website, including:

• Technical data: IP address, browser type and version, operating system, and device type.
• Usage data: pages visited, time spent on pages, referring URLs, and navigation paths.
• Analytics data: aggregated and anonymised data collected via Vercel Analytics and Vercel Speed Insights to help us improve website performance.

We do not use cookies for advertising or tracking purposes. We do not collect sensitive personal data such as health information, financial account details, or government identification numbers through this website.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the personal information we collect for the following purposes:

• To respond to your enquiries, quotation requests, and service requests.
• To process and fulfil orders for products and services.
• To review and process job applications and communicate with candidates.
• To send you relevant updates about our products, services, or industry news where you have given consent or where we have a legitimate business interest.
• To improve and optimise our website and user experience.
• To comply with our legal and regulatory obligations.
• To protect the security and integrity of our systems and operations.

We will only use your personal information for the purposes for which it was collected, unless we reasonably consider that we need to use it for another reason that is compatible with the original purpose.`,
  },
  {
    title: '4. Legal Basis for Processing',
    content: `We process your personal information on the following legal bases:

• Contractual necessity: where processing is necessary to perform a contract with you or to take steps at your request before entering into a contract (e.g., processing a quotation or order).
• Legitimate interests: where processing is necessary for our legitimate business interests, such as improving our services, managing our business operations, and communicating with existing clients, provided those interests are not overridden by your rights.
• Consent: where you have given us explicit consent to process your data for a specific purpose, such as receiving marketing communications. You may withdraw consent at any time.
• Legal obligation: where processing is necessary to comply with a legal or regulatory requirement.`,
  },
  {
    title: '5. Information Sharing and Disclosure',
    content: `We do not sell, rent, or trade your personal information to third parties. We may share your information in the following limited circumstances:

• Service providers: we share data with trusted third-party service providers who assist us in operating our website and business, including email service providers, cloud hosting providers, and analytics platforms. These providers are contractually required to process data only on our instructions and to maintain appropriate security measures.
• Manufacturer partners: where necessary to process a warranty claim or technical support request, we may share relevant product and contact information with the relevant manufacturer.
• Professional advisors: we may share information with our legal advisors, accountants, or auditors where necessary.
• Legal authorities: we may disclose information where required by law, court order, or regulatory authority, or where necessary to protect the rights, property, or safety of Flowitec, our clients, or others.
• Business transfers: in the event of a merger, acquisition, or sale of all or part of our business, personal data may be transferred to the acquiring entity, subject to equivalent privacy protections.

Our subsidiary offices in Nigeria, Kenya, and South Africa may access client data relevant to their operations, subject to appropriate data transfer safeguards.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.

Specifically:
• Enquiry and contact form data: retained for up to 3 years from the date of last contact.
• Order and transaction records: retained for 7 years in accordance with Ghanaian tax and commercial record-keeping requirements.
• Job application data: retained for 12 months from the date of application for unsuccessful candidates, and for the duration of employment plus 7 years for successful candidates.
• Website analytics data: retained in aggregated, anonymised form indefinitely.

When personal data is no longer required, we securely delete or anonymise it.`,
  },
  {
    title: '7. Data Security',
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, accidental loss, alteration, disclosure, or destruction. These measures include:

• Secure HTTPS encryption for all data transmitted through our website.
• Access controls limiting data access to authorised personnel only.
• Regular review of our data handling practices and security measures.

While we take all reasonable steps to protect your data, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security but will notify you and the relevant authorities of any data breach as required by law.`,
  },
  {
    title: '8. Your Rights',
    content: `Under the Ghana Data Protection Act, 2012 (Act 843) and applicable data protection laws, you have the following rights in relation to your personal data:

• Right of access: you may request a copy of the personal information we hold about you.
• Right to rectification: you may request that we correct any inaccurate or incomplete information.
• Right to erasure: you may request that we delete your personal data where there is no compelling reason for us to continue processing it.
• Right to restrict processing: you may request that we restrict the processing of your data in certain circumstances.
• Right to data portability: you may request that we provide your data in a structured, commonly used, machine-readable format.
• Right to object: you may object to our processing of your data where we rely on legitimate interests as our legal basis.
• Right to withdraw consent: where we process your data based on consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal.

To exercise any of these rights, please contact us at info@flowitec.com. We will respond to your request within 30 days. We may need to verify your identity before processing your request.`,
  },
  {
    title: '9. Third-Party Links',
    content: `Our website may contain links to third-party websites, including manufacturer websites and partner portals. This Privacy Policy applies only to our website. We are not responsible for the privacy practices of any third-party websites and encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `Our website and services are directed at business professionals and are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete it.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the revised policy on this page with an updated effective date. We encourage you to review this policy periodically. Your continued use of our website after any changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <nav className="text-sm mb-4 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">Effective date: 1 January 2025</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* Intro box */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 mb-12">
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how <strong>Flowitec Group Ghana Limited</strong> collects, uses, and protects your personal information. We are committed to your privacy and to complying with the <strong>Ghana Data Protection Act, 2012 (Act 843)</strong>. If you have any questions, contact us at <a href="mailto:info@flowitec.com" className="text-primary hover:underline">info@flowitec.com</a>.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-muted/30 rounded-lg p-6 mb-12">
              <h2 className="text-lg font-bold mb-4">Contents</h2>
              <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                {sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="hover:text-primary transition-colors">
                      {s.title.replace(/^\d+\.\s/, '')}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i} id={`section-${i}`} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">{s.title}</h2>
                  {s.content.split('\n\n').map((para, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">{para}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact box */}
            <div className="mt-16 bg-muted/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Data Controller Contact</h2>
              <p className="text-muted-foreground mb-6">To exercise your rights or raise a privacy concern, please contact our data controller:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-semibold mb-1">Flowitec Group Ghana Limited</div>
                  <div className="text-muted-foreground">GT-373-0152 Opp IRS, Comm. 18 Junction</div>
                  <div className="text-muted-foreground">Spintex Road, Tema, Greater Accra, Ghana</div>
                  <div className="text-muted-foreground">P.O. Box SK 1369, Sakumono</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1"><span className="font-semibold">Email:</span> <a href="mailto:info@flowitec.com" className="text-primary hover:underline">info@flowitec.com</a></div>
                  <div className="text-muted-foreground mb-1"><span className="font-semibold">Phone:</span> <a href="tel:+233273300082" className="text-primary hover:underline">+233 273 300 082</a></div>
                  <div className="text-muted-foreground"><span className="font-semibold">Website:</span> <a href="https://flowitec.com" className="text-primary hover:underline">flowitec.com</a></div>
                </div>
              </div>
            </div>

            {/* Related links */}
            <div className="mt-8 flex gap-4 text-sm">
              <Link href="/legal/terms" className="text-primary hover:underline">Terms of Service →</Link>
              <Link href="/contact" className="text-primary hover:underline">Contact Us →</Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
