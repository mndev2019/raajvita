
import directorImg from "../../assets/Images/director.jpeg";

function About() {
  return (
    <>
      <section className="relative py-24 bg-white overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b1e2d]/10 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side Image */}
            <div className="relative flex justify-center">

              {/* Image Card */}
              <div className="relative rounded-[40px] overflow-hidden border border-[#ecd9b0] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-[#faf7f2] p-4">
                
                <img
                  src={directorImg}
                  alt="Director"
                  className="w-full max-w-[500px] h-[650px] object-cover rounded-[30px]"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border border-[#ecd9b0] rounded-2xl px-8 py-5 shadow-2xl w-[85%]">
                  
                  <h3 className="text-[#3c0d12] text-2xl font-semibold text-center">
                    Rajendra Singh Chaudhary
                  </h3>

                  <p className="text-[#c89b3c] text-center mt-2 font-medium">
                    Founder & Managing Director
                  </p>

                  <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
                    
                    <span className="bg-[#faf7f2] border border-[#ecd9b0] px-4 py-2 rounded-full text-sm text-[#5e4b42]">
                      Indian Air Force Veteran
                    </span>

                    <span className="bg-[#faf7f2] border border-[#ecd9b0] px-4 py-2 rounded-full text-sm text-[#5e4b42]">
                      RERA Certified
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full border-2 border-[#d4a63f]/20 rounded-[40px]"></div>
            </div>

            {/* Right Content */}
            <div>

              {/* Small Tag */}
              <span className="text-[#c89b3c] uppercase tracking-[4px] text-sm font-medium">
                Leadership & Vision
              </span>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#3c0d12] leading-tight mt-5">
                A Legacy of Honor, Discipline & Trusted Leadership
              </h2>

              {/* Paragraph */}
              <p className="text-[#5e4b42] text-lg leading-8 mt-8">
                Rajendra Singh Chaudhary, Founder & Managing Director of
                Raajvita Vista Developers Pvt. Ltd., is a retired officer of
                the Indian Air Force who brings decades of disciplined leadership,
                operational excellence, and strategic execution into the real
                estate sector.
              </p>

              <p className="text-[#5e4b42] text-lg leading-8 mt-6">
                Driven by the principles of honesty, precision, and national
                service, he established Raajvita Vista Developers with a vision
                to eliminate uncertainty and build a real estate ecosystem rooted
                in transparency, legal compliance, and absolute client trust.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">

                <div className="bg-[#faf7f2] border border-[#ecd9b0] rounded-3xl p-6">
                  
                  <h4 className="text-[#3c0d12] text-xl font-semibold">
                    Military Precision
                  </h4>

                  <p className="text-[#5e4b42] leading-7 mt-3">
                    Executing projects with discipline, strategic planning,
                    and unmatched operational efficiency.
                  </p>
                </div>

                <div className="bg-[#faf7f2] border border-[#ecd9b0] rounded-3xl p-6">
                  
                  <h4 className="text-[#3c0d12] text-xl font-semibold">
                    Transparent Development
                  </h4>

                  <p className="text-[#5e4b42] leading-7 mt-3">
                    Ensuring legally verified documentation and complete
                    clarity in every transaction.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-12 bg-[#faf7f2] border-l-4 border-[#c89b3c] rounded-r-3xl p-8 shadow-sm">
                
                <p className="text-[#3c0d12] text-lg italic leading-8">
                  “We are here to develop land, but more importantly,
                  we are here to win your trust.”
                </p>

                <h5 className="text-[#c89b3c] font-semibold mt-5">
                  — Rajendra Singh Chaudhary
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;