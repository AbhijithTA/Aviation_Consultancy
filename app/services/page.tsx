import NavbarComponent from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function ServicesPage() {
  const sections = [
    {
      label: "A. Legal & Litigation Support",
      items: [
        "Advisory and representation in aviation and administrative law matters before appropriate forums, including High Courts",
        "Writ proceedings, regulatory disputes, and enforcement-related litigation",
        "Drafting and vetting of contracts, agreements, and commercial documentation",
        "Alternative Dispute Resolution (ADR), including structured negotiation, arbitration, mediation, and settlement processes",
        "Coordination and briefing in court-related proceedings",
      ],
    },
    {
      label: "B. Regulatory Advisory & Compliance",
      items: [
        "Interpretation and application of aviation laws, rules, and regulatory frameworks",
        "Guidance on approvals, permissions, and compliance requirements",
      ],
    },
    {
      label: "C. Documentation & Regulatory Preparedness",
      items: [
        "Drafting and review of regulatory submissions and representations",
        "Audit and inspection preparedness",
        "Preparation and review of documents including Non-Disclosure Agreements (NDAs), contracts, Memoranda of Understanding (MoUs), and related commercial instruments",
      ],
    },
    {
      label: "D. Enforcement & Proceedings Support",
      items: [
        "Advisory on notices, show cause proceedings, and regulatory actions",
        "Structured response to regulatory communications",
      ],
    },
    {
      label: "E. Internal Compliance Review & Risk Assessment",
      items: [
        "Identification of regulatory gaps",
        "Strengthening compliance systems and documentation practices",
      ],
    },
  ];

  return (
    <>
      <NavbarComponent />

      <main className="w-full bg-white min-h-screen pt-16">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
          {/* Page Label */}
          <p
            className="uppercase tracking-widest text-gray-400 mb-6"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "11px" }}
          >
            Services
          </p>

          {/* Page Heading */}
          <h1
            className="text-slate-800 leading-snug mb-10"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Areas of Professional Engagement
          </h1>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-10" />

          {/* Intro */}
          <p
            className="text-slate-700 leading-relaxed mb-10"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            The work undertaken may include:
          </p>

          {/* Lettered sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.label}>
                <h2
                  className="text-slate-800 mb-4"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {section.label}
                </h2>
                <ul
                  className="text-slate-700 leading-relaxed space-y-3"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "12px",
                    paddingLeft: "1.25rem",
                    listStyleType: "disc",
                  }}
                >
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-16 mb-10" />

          {/* Contact reference */}
          <p
            className="text-slate-700 leading-relaxed mb-6"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            For enquiries regarding any of the above areas, please use the
            contact details provided.
          </p>

          <Link
            href="/contactUs"
            className="inline-block border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors px-5 py-2"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            Contact
          </Link>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
