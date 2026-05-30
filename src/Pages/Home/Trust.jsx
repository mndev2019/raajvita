
import {
  FaShieldAlt,
  FaBullseye,
  FaEye,
  FaChartLine,
} from "react-icons/fa";

function Trust() {
  const data = [
    {
      icon: <FaShieldAlt />,
      title: "RERA Certified Projects",
      desc: "Every development follows strict legal and regulatory compliance standards for completely secure investment.",
    },
    {
      icon: <FaBullseye />,
      title: "Military-Grade Execution",
      desc: "We execute projects with discipline, precision, and punctuality inspired by armed forces values.",
    },
    {
      icon: <FaEye />,
      title: "Complete Transparency",
      desc: "From documentation to project updates, every process remains clear, ethical, and verified.",
    },
    {
      icon: <FaChartLine />,
      title: "Trusted Long-Term Value",
      desc: "We transform land into high-potential assets designed for sustainable growth and future appreciation.",
    },
  ];

  return (
    <>
      <section className="relative py-24 bg-[#faf7f2] overflow-hidden">
        
        {/* Background Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b1e2d]/10 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            <span className="text-[#c89b3c] uppercase tracking-[4px] text-sm font-medium">
              Why Choose Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-semibold text-[#3c0d12] mt-4 leading-tight">
              Why Investors Trust Raajvita Vista Developers
            </h2>

            <p className="text-[#5e4b42] text-lg leading-8 mt-6">
              Raajvita Vista Developers combines military-grade discipline,
              complete legal transparency, and RERA-certified development
              practices to deliver secure and future-ready real estate
              opportunities.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {data.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-[#ecd9b0] rounded-[30px] p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
              >
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf2] to-[#f7efe2] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#c89b3c]/10 flex items-center justify-center text-[#c89b3c] text-3xl mb-6 group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-semibold text-[#3c0d12] mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="relative z-10 text-[#5e4b42] leading-7">
                  {item.desc}
                </p>

                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-[#c89b3c]/10">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Trust;