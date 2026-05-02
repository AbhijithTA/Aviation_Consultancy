export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["About", "Services", "Contact"];

  const services = [
    "Legal & Litigation Support",
    "Regulatory Advisory & Compliance",
    "Documentation & Regulatory Preparedness",
    "Enforcement & Proceedings Support",
    "Internal Compliance Review & Risk Assessment",
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-14 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Identity */}
          <div>
            <h3
              className="text-white mb-2"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Sasidharan C P
            </h3>
            <p
              className="text-slate-400 mb-1"
              style={{ fontFamily: "Georgia, serif", fontSize: "13px" }}
            >
              Advocate
            </p>

            <div className="border-t border-slate-700 my-4" />

            <p
              className="text-white mb-1"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              Aviation Regulatory &amp; Compliance Advisory
            </p>
            <p
              className="text-slate-400 mb-3"
              style={{ fontFamily: "Georgia, serif", fontSize: "12px" }}
            >
              Legal and regulatory advisory in the aviation sector
            </p>
            <p
              className="text-slate-400 leading-relaxed"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
            >
              Independent advisory in aviation regulatory and compliance
              matters, grounded in legal practice and regulatory experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-4 pb-2 border-b border-slate-700"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white mb-4 pb-2 border-b border-slate-700"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Areas of Engagement
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-4 pb-2 border-b border-slate-700"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li
                className="text-slate-400 leading-relaxed"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
              >
                Puthen Puthusseri Building, Door No. 11/631
                <br />
                Opposite Airport Cargo Gate
                <br />
                Cochin International Airport Limited (Airport Old Road)
                <br />
                Nedumbasseri, Cochin – 683111, Kerala
              </li>

              <li
                className="text-slate-400"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
              >
                +91 8800171269 / +91 8156828115
              </li>

              <li
                className="text-slate-400"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
              >
                sasidharann277@gmail.com
              </li>

              <li
                className="text-slate-400"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
              >
                Monday – Friday: 3:00 PM – 5:00 PM
                <br />
                Saturday &amp; Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            className="text-slate-500"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          >
            &copy; {currentYear} Sasidharan C P, Advocate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
