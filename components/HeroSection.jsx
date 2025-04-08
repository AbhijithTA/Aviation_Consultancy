import { PhoneCall } from "lucide-react";

export default function AviationComplianceHero() {
  return (
    <section className="w-full overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Your <span className="text-blue-600">Trusted Partner</span> in Compliance & Regulatory Support Across Civil Aviation
            </h1>
            
            <p className="text-slate-700 text-lg font-medium">
              Assistance in access to Welfare Schemes related to Employment promotion under the Ministry of Labour & other Social Welfare Schemes —Bridging the Gap Between Governance and the Digital World.
            </p>
            
            <h2 className="text-xl md:text-2xl text-slate-700 font-semibold pt-2">
              Reliable, Affordable, and Hassle-Free Compliance Solutions—Ensuring Statutory Adherence Without Compromise in aviation Sector
            </h2>
            
            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600 mt-6">
              <p className="text-slate-600 font-medium">
                Struggling with complex compliance requirements in aviation sector? Let us simplify the process for you.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-md">
                Contact Us
                <PhoneCall size={18} />
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium border-2 border-white">CA</div>
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium border-2 border-white">RS</div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium border-2 border-white">WS</div>
              </div>
              <p className="text-slate-500 text-sm">
                <span className="font-semibold">Expert</span> compliance advisors
              </p>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="w-full h-60 sm:h-80 md:h-96 lg:h-full relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/5 z-10"></div>
              <img 
                src="/images/heroSection.jpg" 
                alt="Aviation Compliance and Regulatory Support"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-4 -left-4 md:bottom-12 md:-left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L12 12L15 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Compliance Success</p>
                  <p className="text-slate-800 font-semibold">100% Approval Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}