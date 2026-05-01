"use client";

import { useState } from "react";

export default function DisclaimerOverlay({
  onAccept,
}: {
  onAccept: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in">
        <h2 className="text-lg font-medium text-gray-900 mb-3">Disclaimer</h2>
        <div className="h-px w-full bg-gray-200 mb-4"></div>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          The contents of this website are provided for general informational
          purposes only and do not constitute legal advice or solicitation.
          Access to this website is voluntary and without any form of invitation
          or inducement. Professional legal services, where applicable, are
          rendered by qualified practitioners in their individual capacity in
          accordance with applicable legal and professional standards. The
          information provided herein should not be relied upon as a substitute
          for formal legal consultation.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onAccept}
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
