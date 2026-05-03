import Link from "next/link";

export default function AviationComplianceHero() {
  return (
    <section className="w-full bg-white pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        {/* Name & Designation — center aligned */}
        <div className="text-center mb-10 sm:mb-12">
          <h1
            className="text-slate-800 mb-2"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(14px, 2.5vw, 16px)",
              fontWeight: "bold",
            }}
          >
            Sasidharan C P, Advocate
          </h1>
          <p
            className="text-slate-600 mb-1"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(11px, 1.8vw, 12px)",
            }}
          >
            MSW, LL.B (Hons), PGDALATM (NALSAR)
          </p>
          <p
            className="text-slate-600 mt-2"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(12px, 2vw, 14px)",
            }}
          >
            Aviation Regulatory &amp; Compliance Advisory
          </p>
          <p
            className="text-slate-500 mt-1"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(11px, 1.8vw, 13px)",
              fontWeight: "normal",
            }}
          >
            Legal and regulatory advisory in the aviation sector
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8 sm:mb-10" />

        {/* Body paragraph */}
        <p
          className="text-slate-700 leading-relaxed mb-8 sm:mb-10"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "clamp(12px, 1.8vw, 13px)",
            lineHeight: "1.8",
          }}
        >
          Independent advisory in aviation regulatory and compliance matters,
          grounded in legal practice, regulatory experience, and domain-specific
          understanding of aviation frameworks.
        </p>

        {/* Introduction sub-heading */}
        <h2
          className="text-slate-800 mb-4"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(12px, 2vw, 14px)",
            fontWeight: "bold",
          }}
        >
          Introduction
        </h2>

        {/* Introduction body */}
        <p
          className="text-slate-700 leading-relaxed mb-10 sm:mb-12"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "clamp(12px, 1.8vw, 13px)",
            lineHeight: "1.8",
          }}
        >
          This platform presents the professional profile of Sasidharan C P,
          Advocate, in the field of aviation regulatory compliance and related
          governance matters.
        </p>

        {/* Contact link */}
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
