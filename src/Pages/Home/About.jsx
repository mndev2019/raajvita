import directorImg from "../../assets/Images/director.jpeg";

function About() {
  return (
    <>
      {/* Vision, Mission & Core Values */}
    <section className="relative lg:py-24 py-14 bg-[#3c0d12] overflow-hidden">

  {/* Background Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full"></div>

  <div className="container mx-auto px-6 lg:px-16 relative z-10">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto">
      <span className="uppercase tracking-[5px] text-[#d4a63f] text-sm">
        Our Foundation
      </span>

      <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-5">
        Vision, Mission & Core Values
      </h2>

      <div className="w-24 h-1 bg-[#c89b3c] mx-auto rounded-full mt-6"></div>
    </div>

    {/* Vision & Mission */}
    <div className="grid lg:grid-cols-2 gap-8 mt-16">

      <div className="bg-white/5 backdrop-blur-lg border border-[#c89b3c]/30 rounded-[30px] p-8 hover:-translate-y-2 transition-all duration-500">

        <h3 className="text-3xl font-semibold text-[#d4a63f] mb-5">
          Our Vision
        </h3>

        <p className="text-gray-300 leading-8">
          To become India’s most trusted, compliant, and disciplined real
          estate development firm, recognized for transforming land into
          thriving, high-value assets while maintaining uncompromising
          ethics, legal purity, and timely project delivery.
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-lg border border-[#c89b3c]/30 rounded-[30px] p-8 hover:-translate-y-2 transition-all duration-500">

        <h3 className="text-3xl font-semibold text-[#d4a63f] mb-5">
          Our Mission
        </h3>

        <p className="text-gray-300 leading-8">
          With 41 years of sincere and dedicated experience in Defence
          Services and Civil life, founded on honesty and loyalty,
          RaajVita Group is committed to delivering not only timely
          project completion but also exceptional service to all
          investors, partners, buyers, and associates associated with us.
        </p>

      </div>

    </div>

    {/* Core Values */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      <div className="bg-white/5 backdrop-blur-lg border border-[#c89b3c]/30 rounded-3xl p-6 hover:bg-[#c89b3c]/10 transition-all duration-300">
        <h4 className="text-[#d4a63f] text-xl font-semibold">
          Military-Grade Execution
        </h4>

        <p className="text-gray-300 mt-4 leading-7">
          Every project is executed with strategic planning,
          precision, discipline, and punctuality inspired by armed
          forces standards.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg border border-[#c89b3c]/30 rounded-3xl p-6 hover:bg-[#c89b3c]/10 transition-all duration-300">
        <h4 className="text-[#d4a63f] text-xl font-semibold">
          100% Regulatory Compliance
        </h4>

        <p className="text-gray-300 mt-4 leading-7">
          Maintaining complete legal transparency through strict
          adherence to RERA & Government-Approved Projects guidelines
          and all applicable regulations.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg border border-[#c89b3c]/30 rounded-3xl p-6 hover:bg-[#c89b3c]/10 transition-all duration-300">
        <h4 className="text-[#d4a63f] text-xl font-semibold">
          Absolute Transparency
        </h4>

        <p className="text-gray-300 mt-4 leading-7">
          Building long-term trust through clear documentation,
          transparent communication, and honest business practices.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg border border-[#c89b3c]/30 rounded-3xl p-6 hover:bg-[#c89b3c]/10 transition-all duration-300">
        <h4 className="text-[#d4a63f] text-xl font-semibold">
          Sustainable Growth
        </h4>

        <p className="text-gray-300 mt-4 leading-7">
          Creating value for clients while contributing meaningfully
          to infrastructure development and social upliftment.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* Rajendra Singh Chaudhary */}
      <section className="relative py-10 bg-[#faf7f2] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side Image */}
            <div>
              <div className="relative flex justify-center">
                <div className="relative rounded-[40px] overflow-hidden border border-[#ecd9b0] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white p-4">
                  <img
                    src={directorImg}
                    alt="Rajendra Singh Chaudhary"
                    className="w-full max-w-[500px] h-[450px] md:h-[650px] object-cover rounded-[30px]"
                  />

                  {/* Desktop Floating Card */}
                  <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-[#ecd9b0] rounded-2xl px-8 py-4 shadow-2xl w-[85%]">
                    <h3 className="text-[#3c0d12] text-2xl font-semibold text-center">
                      Rajendra Singh Chaudhary
                    </h3>

                    <p className="text-[#c89b3c] text-center mt-2 font-medium">
                      Founder & Managing Director
                    </p>

                    <div className="flex justify-center gap-3 mt-4 flex-wrap">
                      <span className="bg-[#faf7f2] border border-[#ecd9b0] px-4 py-2 rounded-full text-sm text-[#5e4b42]">
                        Indian Air Force Veteran
                      </span>

                      <span className="bg-[#faf7f2] border border-[#ecd9b0] px-4 py-2 rounded-full text-sm text-[#5e4b42]">
                       RERA trained and certified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Card */}
              <div className="md:hidden mt-5 bg-white border border-[#ecd9b0] rounded-2xl p-5 shadow-lg">
                <h3 className="text-[#3c0d12] text-xl font-semibold text-center">
                  Rajendra Singh Chaudhary
                </h3>

                <p className="text-[#c89b3c] text-center mt-2 text-sm font-medium">
                  Founder & Managing Director
                </p>

                <div className="flex justify-center gap-2 mt-4 flex-wrap">
                  <span className="bg-[#faf7f2] border border-[#ecd9b0] px-3 py-1 rounded-full text-xs text-[#5e4b42]">
                    Indian Air Force Veteran
                  </span>

                  <span className="bg-[#faf7f2] border border-[#ecd9b0] px-3 py-1 rounded-full text-xs text-[#5e4b42]">
                  RERA trained and certified
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-[#c89b3c] uppercase tracking-[4px] text-sm font-medium">
                Leadership & Vision
              </span>

              <h2 className="text-3xl lg:text-5xl font-semibold text-[#3c0d12] leading-tight mt-5">
                A Legacy of Honor, Discipline & Visionary Leadership
              </h2>

            

              <div className="md:mt-12 mt-10 bg-white border-l-4 border-[#c89b3c] rounded-r-3xl p-8 shadow-sm">
                <h4 className="text-[#3c0d12] text-2xl font-semibold mb-4">
                  Founder's Profile
                </h4>

                <p className="text-[#5e4b42]  text-base leading-8">
                  <strong>Rajendra Singh Chaudhary</strong>, Founder of{" "}
                  <strong>RaajVita</strong>, is an MBA professional with over 20 years of
                  distinguished service in the Indian Air Force. He has also worked with
                  ICICI Bank and the Ministry of Child Development, Government of India.
                  For the past 10 years, he has been actively engaged in the real estate
                  sector in Noida and has maintained an unblemished track record of
                  honesty, integrity, and professionalism throughout his career.
                </p>
              </div>



              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-white border border-[#ecd9b0] rounded-3xl p-6">
                  <h4 className="text-[#3c0d12] text-xl font-semibold">
                    Strategic Military Leadership
                  </h4>

                  <p className="text-[#5e4b42] mt-3 leading-7">
                    Extensive experience in large-scale operations, resource
                    management, infrastructure execution, and team command.
                  </p>
                </div>

                <div className="bg-white border border-[#ecd9b0] rounded-3xl p-6">
                  <h4 className="text-[#3c0d12] text-xl font-semibold">
                    RERA & Government-Approved Projects
                  </h4>

                  <p className="text-[#5e4b42] mt-3 leading-7">
                    Deep expertise in real estate regulations, consumer
                    protection laws, and legally compliant development
                    processes.
                  </p>
                </div>

                <div className="bg-white border border-[#ecd9b0] rounded-3xl p-6">
                  <h4 className="text-[#3c0d12] text-xl font-semibold">
                    Uncompromising Integrity
                  </h4>

                  <p className="text-[#5e4b42] mt-3 leading-7">
                    Every commitment and client interaction is governed by
                    honesty, clarity, and accountability.
                  </p>
                </div>

                <div className="bg-white border border-[#ecd9b0] rounded-3xl p-6">
                  <h4 className="text-[#3c0d12] text-xl font-semibold">
                    Philanthropic Visionary
                  </h4>

                  <p className="text-[#5e4b42] mt-3 leading-7">
                    Driving social impact through educational and rural
                    development initiatives via the welfare foundation.
                  </p>
                </div>
              </div>

              <div className="md:mt-12 mt-10 bg-white border-l-4 border-[#c89b3c] rounded-r-3xl p-8 shadow-sm">
                <p className="text-[#3c0d12] md:text-lg text-md italic leading-8">
                  “In the Air Force, commitment is absolute and execution must
                  be flawless. Through Raajvita Vista Developers, our promise
                  is military-grade precision, complete transparency, legally
                  compliant documentation, and unwavering commitment. We are
                  here to develop land, but more importantly, we are here to
                  win your trust.”
                </p>

                <h5 className="text-[#c89b3c] font-semibold mt-5">
                  — Rajendra Singh Chaudhary
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kavita Chaudhary */}
      <section className="lg:py-24 py-10 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <span className="text-[#c89b3c] uppercase tracking-[4px] text-sm font-medium">
            Financial Leadership
          </span>

          <h2 className="text-3xl lg:text-5xl font-semibold text-[#3c0d12] mt-5">
            Kavita Chaudhary
          </h2>

          <p className="text-[#c89b3c] text-lg mt-3 font-medium">
            Director & Co-Founder
          </p>

          <div className="max-w-5xl">
            <p className="text-[#5e4b42] md:text-lg text-md leading-8 mt-8">
              Kavita Chaudhary serves as Director & Co-Founder of Raajvita
              Vista Developers Pvt. Ltd. and Co-Founder of the Rajendra
              Kavita Welfare Foundation. A Commerce graduate from Delhi
              University, she brings nearly 30 years of experience in
              accounting, finance, budgeting, auditing, and corporate
              administration.
            </p>

            <p className="text-[#5e4b42] md:text-lg text-md leading-8 mt-6">
              Her leadership ensures financial stability, strong internal
              controls, regulatory compliance, and sustainable growth across
              all business operations while maintaining complete transparency
              and fiscal discipline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-[#faf7f2] border border-[#ecd9b0] rounded-3xl p-6">
              <h4 className="text-[#3c0d12] text-xl font-semibold">
                Academic Excellence
              </h4>
              <p className="text-[#5e4b42] mt-3">
                B.Com Graduate from Delhi University specializing in commerce,
                accounting, and business economics.
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#ecd9b0] rounded-3xl p-6">
              <h4 className="text-[#3c0d12] text-xl font-semibold">
                30 Years Expertise
              </h4>
              <p className="text-[#5e4b42] mt-3">
                Extensive experience in financial management, budgeting,
                accounting systems, and audits.
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#ecd9b0] rounded-3xl p-6">
              <h4 className="text-[#3c0d12] text-xl font-semibold">
                Corporate Governance
              </h4>
              <p className="text-[#5e4b42] mt-3">
                Expertise in internal controls, risk management, cash flow,
                and regulatory compliance.
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#ecd9b0] rounded-3xl p-6">
              <h4 className="text-[#3c0d12] text-xl font-semibold">
                Social Impact Leadership
              </h4>
              <p className="text-[#5e4b42] mt-3">
                Managing transparent resource allocation for educational and
                rural development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;