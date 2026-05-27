
import {
  FaFileSignature,
  FaDraftingCompass,
  FaHardHat,
  FaClipboardCheck,
  FaKey,
} from "react-icons/fa";

function Process() {
  const processData = [
    {
      icon: <FaFileSignature />,
      number: "01",
      title: "Legal Verification",
      desc: "Every project undergoes strict legal checks and regulatory verification before development begins.",
    },
    {
      icon: <FaDraftingCompass />,
      number: "02",
      title: "Strategic Planning",
      desc: "Disciplined planning and structured execution ensure precision at every stage of development.",
    },
    {
      icon: <FaHardHat />,
      number: "03",
      title: "Development Execution",
      desc: "Premium infrastructure development carried out with military-grade operational standards.",
    },
    {
      icon: <FaClipboardCheck />,
      number: "04",
      title: "Quality Inspection",
      desc: "Detailed inspections and compliance monitoring maintain quality and project integrity.",
    },
    {
      icon: <FaKey />,
      number: "05",
      title: "Secure Delivery",
      desc: "Transparent documentation and timely handover ensure complete client confidence.",
    },
  ];

  return (
    <>
      <section className="relative py-24 bg-white overflow-hidden">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b1e2d]/5 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="text-[#c89b3c] uppercase tracking-[4px] text-sm font-medium">
              Our Process
            </span>

            <h2 className="text-4xl lg:text-5xl font-semibold text-[#3c0d12] mt-5 leading-tight">
              Precision Driven Development Process
            </h2>

            <p className="text-[#5e4b42] text-lg leading-8 mt-6">
              At Rajvita Vistar Developers, every project follows a disciplined,
              transparent, and legally secure workflow designed to deliver
              complete confidence and long-term value.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Center Line */}
            <div className="hidden lg:block absolute top-20 left-0 w-full h-[2px] bg-gradient-to-r from-[#ecd9b0] via-[#c89b3c] to-[#ecd9b0]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

              {processData.map((item, index) => (
                <div
                  key={index}
                  className="relative group text-center"
                >

                  {/* Circle */}
                  <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-gradient-to-b from-[#fff7e8] to-[#fdf1d8] border border-[#ecd9b0] shadow-lg flex items-center justify-center text-[#c89b3c] text-3xl group-hover:scale-110 transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Number */}
                  <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-3 bg-[#3c0d12] text-white text-xs w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    {item.number}
                  </div>

                  {/* Card */}
                  <div className="mt-8 bg-[#fffaf3] border border-[#ecd9b0] rounded-[30px] p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                    <h3 className="text-2xl font-semibold text-[#3c0d12] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[#5e4b42] leading-7 mt-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="mt-20 text-center">

            <div className="inline-flex items-center gap-4 bg-[#fff7e8] border border-[#ecd9b0] rounded-full px-8 py-4 shadow-sm">
              
              <div className="w-3 h-3 rounded-full bg-[#c89b3c]"></div>

              <p className="text-[#3c0d12] font-medium">
                Military Precision • Legal Transparency • Trusted Delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;