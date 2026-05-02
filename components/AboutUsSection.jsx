export default function AboutUsSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-14 md:py-20 max-w-4xl">
        {/* Section Heading */}
        <h1
          className="text-slate-800 leading-snug mb-8"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          About the Practice
        </h1>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* Paragraph 1 */}
        <p
          className="text-slate-700 leading-relaxed mb-6"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
        >
          The practice focuses on aviation regulatory compliance, security
          frameworks, and administrative law, drawing from experience in
          government service, regulatory processes, and legal proceedings before
          appropriate forums.
        </p>

        {/* Paragraph 2 */}
        <p
          className="text-slate-700 leading-relaxed mb-6"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
        >
          Organisations operating in regulated environments often encounter
          practical challenges in areas such as interpretation of regulatory
          requirements, digitisation and evolving compliance systems,
          maintenance of documentation standards, and responses to inspections
          or enforcement actions. Variations in regulatory understanding and
          documentation practices may lead to gaps in compliance and
          preparedness.
        </p>

        {/* Sub-heading */}
        <h2
          className="text-slate-800 mb-4"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Some commonly observed areas include:
        </h2>

        {/* Bullet list */}
        <ul
          className="text-slate-700 leading-relaxed mb-8 space-y-3"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            paddingLeft: "1.25rem",
            listStyleType: "disc",
          }}
        >
          <li>
            Incomplete or inconsistent documentation affecting demonstration of
            compliance, leading to delays in approvals and regulatory processes
          </li>
          <li>Gaps between operational practices and documented procedures</li>
          <li>
            Limited preparedness for inspections, audits, or regulatory reviews
          </li>
          <li>
            Delays or inconsistencies in responding to regulatory communications
          </li>
          <li>Overlap of responsibilities leading to unclear accountability</li>
          <li>Changing regulatory expectations requiring ongoing adaptation</li>
          <li>
            Difficulties in handling digital compliance systems and regulatory
            platforms
          </li>
          <li>
            Limited awareness of applicable duties, rights, and procedural
            requirements
          </li>
          <li>
            Challenges in coordinating between operational, compliance, and
            external stakeholders
          </li>
          <li>Complexity arising from multiple regulatory authorities</li>
          <li>
            Sector-specific regulatory requirements, including those relating to
            national security and foreign investment
          </li>
          <li>
            Situations involving operational or financial distress, including
            issues relating to grounding, repossession, or deregistration of
            assets
          </li>
        </ul>

        {/* Paragraph 3 */}
        <p
          className="text-slate-700 leading-relaxed mb-6"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
        >
          These observations are based on exposure to regulatory and
          administrative processes. The approach to addressing such matters
          remains centred on clarity in regulatory interpretation, documentation
          discipline, and preparedness in compliance-related matters.
        </p>

        {/* Paragraph 4 */}
        <p
          className="text-slate-700 leading-relaxed"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
        >
          The scope of work may extend to related legal areas, including
          applicable aviation statutes, regulatory guidelines, and contractual
          documentation, and may involve coordination with other professionals
          depending on the nature of the requirement.
        </p>
      </div>
    </section>
  );
}
