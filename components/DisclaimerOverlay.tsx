"use client";

export default function DisclaimerOverlay({
  onAccept,
}: {
  onAccept: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-8">
        {/* Heading */}
        <h2
          className="text-slate-800 mb-3"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Disclaimer
        </h2>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-5" />

        {/* Content */}
        <div className="space-y-4 mb-8">
          <p
            className="text-slate-700 leading-relaxed"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            The contents of this website are provided for general informational
            purposes only and do not constitute legal advice. This website is
            not intended to advertise or solicit clients.
          </p>
          <p
            className="text-slate-700 leading-relaxed"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            Access to this website is voluntary and without any form of
            invitation or inducement.
          </p>
          <p
            className="text-slate-700 leading-relaxed"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            Professional legal services, where applicable, are rendered by
            qualified practitioners in their individual capacity in accordance
            with applicable legal and professional standards.
          </p>
          <p
            className="text-slate-700 leading-relaxed"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            The information provided herein should not be relied upon as a
            substitute for formal legal consultation.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            onClick={onAccept}
            className="border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors px-5 py-2"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
