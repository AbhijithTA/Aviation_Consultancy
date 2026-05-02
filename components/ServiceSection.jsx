export default function ServicesSection() {
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
    <section className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-14 md:py-20 max-w-4xl">
        {/* Page Label */}
        <p
          className="uppercase tracking-widest text-gray-400 mb-6"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "11px" }}
        >
          Services
        </p>

        {/* Section Heading */}
        <h1
          className="text-slate-800 leading-snug mb-8"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Areas of Professional Engagement
        </h1>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* Intro line */}
        <p
          className="text-slate-700 leading-relaxed mb-10"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
        >
          The work undertaken may include:
        </p>

        {/* Lettered sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.label}>
              {/* Sub-heading */}
              <h2
                className="text-slate-800 mb-3"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {section.label}
              </h2>

              {/* Bullet list */}
              <ul
                className="text-slate-700 leading-relaxed space-y-2"
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
      </div>
    </section>
  );
}
