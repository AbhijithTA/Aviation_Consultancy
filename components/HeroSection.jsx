import Link from "next/link";

export default function AviationComplianceHero() {
  return (
    <section className="w-full bg-white border-b border-gray-200 pt-16">
      <div className="container mx-auto px-6 py-14 md:py-20 max-w-4xl">
        {/* Main Heading */}
        <h1
          className="text-slate-800 leading-snug mb-4 mt-3"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Aviation Regulatory &amp; Compliance Advisory
        </h1>

        {/* Sub-heading */}
        <h2
          className="text-slate-700 mb-8"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "14px",
            fontWeight: "normal",
          }}
        >
          Legal and regulatory advisory in the aviation sector
        </h2>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* Body paragraph 1 */}
        <p
          className="text-slate-700 mb-6 leading-relaxed"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
        >
          Independent advisory in aviation regulatory and compliance matters,
          grounded in legal practice and regulatory experience.
        </p>

        {/* Introduction sub-heading */}
        <h2
          className="text-slate-800 mb-4"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Introduction
        </h2>

        {/* Body paragraph 2 */}
        <p
          className="text-slate-700 leading-relaxed mb-10"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
        >
          This platform presents the professional profile of Adv. Sasidharan C P
          in the field of aviation regulatory compliance and related governance
          matters.
        </p>

        {/* Contact link — neutral, text-only */}
        <Link
          href="/contactUs"
          className="inline-block border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors px-5 py-2"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
