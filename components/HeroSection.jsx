import Link from "next/link";

export default function AviationComplianceHero() {
  return (
    <section className="w-full bg-white pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        {/* Name & Designation */}
        <div className="text-center mb-10 sm:mb-12">
          <h1
            className="text-slate-800 inline-block relative pb-2.5 mb-0"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(22px, 4vw, 28px)",
              fontWeight: "bold",
              letterSpacing: "0.03em",
            }}
          >
            Sasidharan C P, Advocate
            {/* Subtle underline accent */}
            <span
              className="absolute bottom-0 left-[10%] right-[10%] block"
              style={{ height: "1.5px", background: "#94a3b8", opacity: 0.4 }}
            />
          </h1>

          <p
            className="text-slate-500 mt-3"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(10px, 1.5vw, 11px)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            MSW · LL.B (Hons) · PGDALATM (NALSAR)
          </p>

          <p
            className="text-slate-500 mt-2"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(12px, 1.8vw, 14px)",
              fontStyle: "italic",
            }}
          >
            Aviation Regulatory &amp; Compliance Advisory
          </p>

          <p
            className="text-slate-400 mt-1"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(11px, 1.5vw, 12px)",
            }}
          >
            Legal and regulatory advisory in the aviation sector
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8 sm:mb-10" />

        {/* Body paragraph */}
        <p
          className="text-slate-600 leading-relaxed mb-8 sm:mb-10"
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
          className="text-slate-600 leading-relaxed mb-10 sm:mb-12"
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
          className="inline-block border border-slate-400 text-slate-600 hover:bg-slate-100 transition-colors px-5 py-2"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.04em",
          }}
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
