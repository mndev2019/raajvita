import {
  FaMapMarkedAlt,
  FaBuilding,
  FaBalanceScale,
  FaChartLine,
  FaDraftingCompass,
  FaShieldAlt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Premium Land Development",
      desc: "Transforming land into high-value assets through strategic planning, infrastructure development, and disciplined execution.",
    },
    {
      icon: <FaBuilding />,
      title: "Property Development",
      desc: "Developing secure and future-ready real estate projects backed by quality standards and transparent processes.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Legal & Regulatory Compliance",
      desc: "Ensuring every project follows strict RERA guidelines and legal requirements for complete client confidence.",
    },
    {
      icon: <FaChartLine />,
      title: "Investment Guidance",
      desc: "Helping clients identify secure and growth-oriented real estate opportunities for long-term value creation.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Project Planning & Execution",
      desc: "Executing projects with military-grade precision, structured planning, and commitment to timelines.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparent Documentation",
      desc: "Providing clear, verified, and legally secure documentation throughout every stage of development.",
    },
  ];

  return (
    <div className="bg-[#f8f4ec] overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-[#3c0d12] text-white py-28 px-6 md:px-16">

        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c89b3c]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c89b3c]/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[6px] text-[#c89b3c] text-sm mb-4">
            Our Services
          </p>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Real Estate Solutions Built On
            <span className="text-[#c89b3c]"> Trust & Discipline</span>
          </h1>

          <p className="text-gray-300 md:text-lg text-md max-w-3xl mx-auto mt-8 leading-relaxed">
            Raajvita Vista Developers delivers legally secure,
            transparent, and professionally managed real estate
            solutions with a commitment to quality and compliance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="lg:py-24 py-10 px-6 md:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#c89b3c] uppercase tracking-[5px] font-semibold mb-4">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#3c0d12]">
              Comprehensive Development Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-[30px] p-8 border border-[#c89b3c]/20 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >
                <div className="md:w-20 w-15 md:h-20 h-15 rounded-2xl bg-[#c89b3c]/10 flex items-center justify-center text-[#c89b3c] text-4xl mb-6 group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>

                <h3 className="md:text-2xl text-xl font-semibold text-[#3c0d12] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed md:text-md text-sm ">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="lg:py-24 py-15 px-6 md:px-16 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center md:mb-16 mb-10">

            <p className="text-[#c89b3c] uppercase tracking-[5px] font-semibold mb-4">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#3c0d12]">
              Service Excellence You Can Trust
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">

            <div className="bg-[#f8f4ec] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-[#c89b3c]">100%</h3>
              <p className="mt-4 text-[#3c0d12] font-semibold">
                RERA Compliance
              </p>
            </div>

            <div className="bg-[#f8f4ec] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-[#c89b3c]">100%</h3>
              <p className="mt-4 text-[#3c0d12] font-semibold">
                Transparency
              </p>
            </div>

            <div className="bg-[#f8f4ec] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-[#c89b3c]">24/7</h3>
              <p className="mt-4 text-[#3c0d12] font-semibold">
                Client Support
              </p>
            </div>

            <div className="bg-[#f8f4ec] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-[#c89b3c]">∞</h3>
              <p className="mt-4 text-[#3c0d12] font-semibold">
                Long-Term Value
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;