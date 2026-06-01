
import {
  FaShieldAlt,
  FaBalanceScale,
  FaUsers,
  FaBullseye,
} from "react-icons/fa";

function VisionMission() {
  const missionData = [
    {
      icon: <FaBullseye />,
      title: "Military-Grade Execution",
      desc: "Projects executed with precision, punctuality, and disciplined planning inspired by armed forces values.",
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Regulatory Compliance",
      desc: "Every development follows strict RERA guidelines and legally verified documentation.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Absolute Transparency",
      desc: "Clear communication, ethical transactions, and transparent development updates at every stage.",
    },
    {
      icon: <FaUsers />,
      title: "Sustainable Growth",
      desc: "Creating long-term value while contributing to infrastructure and community upliftment.",
    },
  ];

  const values = [
    "Integrity First",
    "Purity & Compliance",
    "Discipline",
    "Social Responsibility",
  ];

  return (
    <>
      <section className="relative py-24 bg-[#3c0d12] overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffffff10] blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">

          {/* Top Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="text-[#f0c35a] uppercase tracking-[4px] text-sm font-medium">
              Vision • Mission • Values
            </span>

            <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-5 leading-tight">
              Building the Future With Integrity, Discipline & Transparency
            </h2>

            <p className="text-[#f5e6c5] text-lg leading-8 mt-6">
              Raajvita Vista Developers is driven by a mission to transform
              real estate through ethical leadership, legally secure development,
              and military-grade operational excellence.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Vision Card */}
            <div className="bg-[#ffffff08] backdrop-blur-xl border border-[#ffffff15] rounded-[35px] p-8 hover:-translate-y-2 transition-all duration-500">
              
              <div className="w-16 h-16 rounded-2xl bg-[#d4a63f]/20 flex items-center justify-center text-[#f0c35a] text-3xl mb-6">
                <FaBullseye />
              </div>

              <h3 className="text-3xl font-semibold text-white mb-6">
                Our Vision
              </h3>

              <p className="text-[#f5e6c5] leading-8 text-lg">
                To become India’s most trusted, compliant, and disciplined
                real estate development firm recognized for transforming land
                into high-value assets with zero compromise on ethics,
                legality, and timelines.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="space-y-6">
              
              {missionData.map((item, index) => (
                <div
                  key={index}
                  className="group bg-[#ffffff08] backdrop-blur-xl border border-[#ffffff15] rounded-[30px] p-6 hover:bg-[#ffffff12] transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#d4a63f]/20 flex items-center justify-center text-[#f0c35a] text-2xl shrink-0 group-hover:scale-110 transition-all duration-500">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-white text-xl font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-[#f5e6c5] leading-7 mt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-b from-[#d4a63f] to-[#b88a2f] rounded-[35px] p-8 shadow-2xl">
              
              <span className="text-white uppercase tracking-[3px] text-sm">
                The Pillars of Raajvita
              </span>

              <h3 className="text-3xl font-semibold text-[#3c0d12] mt-4">
                Core Values
              </h3>

              <div className="space-y-5 mt-10">

                {values.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-5 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-white text-[#b88a2f] flex items-center justify-center font-bold">
                      0{index + 1}
                    </div>

                    <h4 className="text-[#3c0d12] text-lg font-semibold">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Bottom Quote */}
              <div className="mt-10 border-t border-white/20 pt-6">
                <p className="text-[#3c0d12] italic text-lg leading-8">
                  “Discipline, honesty, and transparency are not just our values —
                  they are the foundation of every project we build.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VisionMission;