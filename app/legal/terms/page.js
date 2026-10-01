import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of the Flowitec website and the purchase of products and services from Flowitec Group Ghana Limited.',
  alternates: { canonical: 'https://flowitec.com/legal/terms' },
};

const sections = [
  {
    title: '1. Parties and Acceptance',
    content: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you", or "your") and Flowitec Group Ghana Limited, a company incorporated under the laws of Ghana with its registered office at GT-373-0152 Opp IRS, Comm. 18 Junction, Spintex Road, Tema, Greater Accra, Ghana ("Flowitec", "we", "us", or "our").

By accessing our website at flowitec.com, submitting an enquiry, requesting a quotation, or placing an order for products or services, you confirm that you have read, understood, and agree to be bound by these Terms. If you are acting on behalf of a company or organisation, you represent that you have authority to bind that entity to these Terms.`,
  },
  {
    title: '2. Products and Services',
    content: `Flowitec supplies industrial engineering equipment including pumps, valves, electric motors, control panels, spare parts, and related components ("Products"), as well as engineering services including installation, commissioning, maintenance, diagnostics, and technical training ("Services").

All Products are sourced from authorised manufacturers and supplied with applicable manufacturer warranties. Product specifications, datasheets, and technical information provided on this website are for reference purposes only and are subject to change without notice. Flowitec reserves the right to substitute equivalent products where necessary, subject to prior notification to the Client.`,
  },
  {
    title: '3. Quotations and Orders',
    content: `All quotations issued by Flowitec are valid for thirty (30) days from the date of issue unless otherwise stated in writing. Quotations are subject to product availability and prevailing exchange rates at the time of order confirmation.

An order is only accepted and binding upon Flowitec's written confirmation. Flowitec reserves the right to decline any order at its discretion. Purchase orders must reference the relevant Flowitec quotation number. Any variation to an accepted order must be agreed in writing by both parties.`,
  },
  {
    title: '4. Pricing and Payment',
    content: `All prices are quoted exclusive of applicable taxes, duties, freight, and insurance unless expressly stated otherwise. Prices are quoted in the currency specified on the quotation and are subject to variation due to exchange rate fluctuations, manufacturer price changes, or import duty adjustments.

Payment terms are as specified on the invoice. Standard terms require payment in full prior to dispatch unless a credit facility has been agreed in writing. Flowitec reserves the right to charge interest on overdue amounts at the rate of 2% per month, compounded monthly, from the due date until the date of actual payment.`,
  },
  {
    title: '5. Delivery and Risk',
    content: `Delivery timelines provided by Flowitec are estimates only and are not guaranteed. Flowitec shall not be liable for delays caused by manufacturer lead times, shipping disruptions, customs clearance, force majeure events, or circumstances beyond its reasonable control.

Risk in the Products passes to the Client upon delivery to the agreed delivery point or upon collection by the Client or its nominated carrier. Title to the Products remains with Flowitec until full payment has been received.`,
  },
  {
    title: '6. Inspection and Acceptance',
    content: `The Client must inspect all Products upon delivery and notify Flowitec in writing of any shortages, damage, or discrepancies within five (5) business days of receipt. Failure to notify within this period shall constitute acceptance of the Products as delivered.

Claims for damage in transit must be supported by a signed delivery note noting the damage and photographic evidence submitted to Flowitec within the five-day period.`,
  },
  {
    title: '7. Warranties',
    content: `Products are supplied with the manufacturer's standard warranty, details of which are provided with the relevant product documentation. Flowitec's warranty obligations are limited to facilitating warranty claims with the manufacturer on the Client's behalf.

Flowitec warrants that Services will be performed with reasonable skill and care by qualified personnel. This warranty does not cover defects arising from misuse, improper installation by third parties, failure to follow operating instructions, or normal wear and tear.

All other warranties, conditions, and representations, whether express or implied by statute or otherwise, are excluded to the fullest extent permitted by applicable law.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the maximum extent permitted by law, Flowitec's total aggregate liability to the Client arising out of or in connection with these Terms, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall not exceed the total value of the specific order giving rise to the claim.

Flowitec shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profit, loss of revenue, loss of production, loss of data, or business interruption, even if Flowitec has been advised of the possibility of such damages.`,
  },
  {
    title: '9. Intellectual Property',
    content: `All content on this website, including but not limited to text, graphics, logos, product images, technical documentation, and software, is the property of Flowitec or its licensors and is protected by applicable intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this website without the prior written consent of Flowitec. Manufacturer trademarks and logos displayed on this website remain the property of their respective owners.`,
  },
  {
    title: '10. Website Use',
    content: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of any third party. You must not use this website to transmit any unsolicited commercial communications, introduce malicious code, or attempt to gain unauthorised access to any part of the website or its underlying systems.

Flowitec reserves the right to suspend or terminate access to the website at any time without notice.`,
  },
  {
    title: '11. Third-Party Links',
    content: `This website may contain links to third-party websites, including manufacturer websites and partner portals. These links are provided for convenience only. Flowitec does not endorse, control, or accept responsibility for the content, privacy practices, or availability of any linked third-party website.`,
  },
  {
    title: '12. Force Majeure',
    content: `Flowitec shall not be in breach of these Terms or liable for any delay or failure to perform its obligations where such delay or failure results from events beyond its reasonable control, including but not limited to acts of God, war, civil unrest, government action, strikes, port congestion, shipping delays, pandemics, or supplier failures. Flowitec will notify the Client as soon as reasonably practicable of any such event and its expected duration.`,
  },
  {
    title: '13. Governing Law and Dispute Resolution',
    content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of Ghana. Any dispute arising out of or in connection with these Terms shall first be referred to good-faith negotiation between the parties. If the dispute is not resolved within thirty (30) days of written notice, it shall be submitted to the exclusive jurisdiction of the courts of Ghana.

For Clients in Nigeria, Kenya, or South Africa, disputes relating to transactions conducted through the respective local subsidiary may be subject to the laws of that jurisdiction as agreed in the relevant order documentation.`,
  },
  {
    title: '14. Amendments',
    content: `Flowitec reserves the right to update or amend these Terms at any time. The revised Terms will be posted on this page with an updated effective date. Your continued use of the website or placement of orders after any amendment constitutes acceptance of the revised Terms.`,
  },
];

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <nav className="text-sm mb-4 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Terms of Service</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl opacity-90">Effective date: 1 January 2025</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* Intro box */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 mb-12">
              <p className="text-muted-foreground leading-relaxed">
                These Terms govern your use of the Flowitec website and the purchase of products and services from <strong>Flowitec Group Ghana Limited</strong>. Please read them carefully before placing an order or submitting an enquiry. If you have any questions, contact us at <a href="mailto:info@flowitec.com" className="text-primary hover:underline">info@flowitec.com</a>.
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
                    <p key={j} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact box */}
            <div className="mt-16 bg-muted/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-6">For questions about these Terms of Service, please contact:</p>
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

          </div>
        </div>
      </section>
    </div>
  );
}
