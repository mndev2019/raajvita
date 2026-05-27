
import {
  FaClock,
  FaFileAlt,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

function WhyRaajvita() {
  const compareData = [
    {
      left: "Delayed Project Execution",
      right: "Timely & Disciplined Delivery",
      icon: <FaClock />,
    },
    {
      left: "Hidden Documentation & Risks",
      right: "100% Transparent Legal Process",
      icon: <FaFileAlt />,
    },
    {
      left: "Unverified Property Deals",
      right: "RERA Certified Developments",
      icon: <FaShieldAlt />,
    },
    {
      left: "Unclear Client Communication",
      right: "Ethical & Trust-Based Relationships",
      icon: <FaHandshake />,
    },
  ];

  return (
    <>
      <section className="relative py-24 bg-[#fffdf9] overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b1e2d]/5 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="text-[#c89b3c] uppercase tracking-[4px] text-sm font-medium">
              Why Rajvita
            </span>

            <h2 className="text-4xl lg:text-5xl font-semibold text-[#3c0d12] mt-5 leading-tight">
              Redefining Trust & Transparency in Real Estate
            </h2>

            <p className="text-[#5e4b42] text-lg leading-8 mt-6">
              Rajvita Vistar Developers was founded to eliminate uncertainty,
              hidden risks, and lack of transparency in the real estate sector
              through disciplined execution and legally secure development.
            </p>
          </div>

          {/* Comparison Layout */}
          <div className="space-y-8">

            {compareData.map((item, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-center"
              >

                {/* Left Side */}
                <div className="bg-[#fff3f3] border border-[#f3d3d3] rounded-[30px] p-7 relative overflow-hidden">
                  
                  <span className="absolute top-4 right-5 text-[#8b1e2d]/10 text-6xl font-bold">
                    0{index + 1}
                  </span>

                  <p className="text-[#8b1e2d] text-xl font-semibold leading-8 pr-10">
                    {item.left}
                  </p>
                </div>

                {/* Center Icon */}
                <div className="flex justify-center">
                  
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#fff7e8] to-[#fdf1d8] border border-[#ecd9b0] shadow-lg flex items-center justify-center text-[#c89b3c] text-3xl">
                    {item.icon}
                  </div>
                </div>

                {/* Right Side */}
                <div className="bg-[#f8fff7] border border-[#d8ead3] rounded-[30px] p-7 relative overflow-hidden">
                  
                  <span className="absolute top-4 right-5 text-[#5b9b47]/10 text-6xl font-bold">
                    ✓
                  </span>

                  <p className="text-[#3c0d12] text-xl font-semibold leading-8 pr-10">
                    {item.right}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="mt-20 bg-gradient-to-r from-[#fff7e8] via-[#fffaf3] to-[#fff7e8] border border-[#ecd9b0] rounded-[40px] p-10 text-center shadow-lg">

            <h3 className="text-3xl lg:text-4xl font-semibold text-[#3c0d12] leading-tight">
              More Than Development — A Commitment to Trust
            </h3>

            <p className="text-[#5e4b42] text-lg leading-8 mt-6 max-w-4xl mx-auto">
              At Rajvita Vistar Developers, every project reflects our
              commitment to military-grade discipline, transparent business
              ethics, legal compliance, and long-term value creation for our
              clients and communities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyRaajvita;