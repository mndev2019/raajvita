import {
  FaShieldAlt,
  FaBuilding,
  FaUsers,
  FaLandmark,
} from "react-icons/fa";
import about1 from '../../assets/Images/about1.jpg'
import about2 from '../../assets/Images/about2.jpg'
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate("");
  return (
    <div className="bg-[#f8f4ec] text-[#2d140f] overflow-hidden ">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#3c0d12] text-white py-24 px-6 md:px-16 pt-30">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c89b3c]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c89b3c]/10 blur-3xl rounded-full"></div>

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[6px] text-[#c89b3c] text-sm mb-4">
              About Raajvita
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Setting a New Benchmark of{" "}
              <span className="text-[#c89b3c]">
                Trust, Discipline & Transparency
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Raajvita Vista Developers Private Limited is founded on the
              timeless principles of military discipline, honesty, and absolute
              transparency in real estate development.
            </p>

            <button onClick={()=> navigate('/projects')} className="mt-8 bg-[#c89b3c] hover:bg-[#b88a2f] transition-all text-white px-8 py-3 rounded-full font-semibold shadow-xl">
              Explore More
            </button>
          </div>

          <div className="relative">
            <div className="rounded-[30px] overflow-hidden border border-[#c89b3c]/30 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <img
                src={about1}
                alt="About Raajvita"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-[#c89b3c] text-white p-6 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold">100%</h2>
              <p className="font-medium">RERA Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-24 px-6 md:px-16 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-[#c89b3c]/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <img
              src={about2}
              alt=""
              className="rounded-[30px] shadow-2xl h-[550px] w-full object-cover"
            />

            <div className="absolute -top-6 -right-6 bg-[#3c0d12] text-white p-5 rounded-2xl border border-[#c89b3c]">
              <p className="text-sm tracking-[3px] uppercase text-[#c89b3c]">
                Since
              </p>
              <h2 className="text-3xl font-bold">2026</h2>
            </div>
          </div>

          <div>
            <p className="text-[#c89b3c] uppercase tracking-[5px] font-semibold mb-4">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Premium Real Estate Development With Complete Transparency
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              We specialize in premium land and property development backed by
              discipline, legal compliance, and ethical business values.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10 text-lg">
              Every Raajvita project is developed with strategic planning,
              military-grade execution, and transparent documentation to ensure
              trust and security for every client.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#c89b3c]/20 p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300">
                <FaShieldAlt className="text-[#c89b3c] text-5xl mb-5" />

                <h3 className="text-xl font-semibold mb-3">
                  Integrity First
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Honesty and transparency remain the foundation of every
                  project we deliver.
                </p>
              </div>

              <div className="bg-white border border-[#c89b3c]/20 p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300">
                <FaBuilding className="text-[#c89b3c] text-5xl mb-5" />

                <h3 className="text-xl font-semibold mb-3">
                  Disciplined Execution
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Projects are handled with precision, commitment, and timely
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="relative bg-[#3c0d12] py-24 px-6 md:px-16 text-white overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c89b3c]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c89b3c]/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[5px] text-[#c89b3c] mb-4">
            Vision & Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Building Trust Through Excellence
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-[#c89b3c]/20 p-8 rounded-[30px] backdrop-blur-md hover:-translate-y-2 transition-all duration-300">
              <FaLandmark className="text-[#c89b3c] text-5xl mb-6 mx-auto" />

              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>

              <p className="text-gray-300 leading-relaxed">
                To become India’s most trusted and disciplined real estate
                development company.
              </p>
            </div>

            <div className="bg-white/5 border border-[#c89b3c]/20 p-8 rounded-[30px] backdrop-blur-md hover:-translate-y-2 transition-all duration-300">
              <FaBuilding className="text-[#c89b3c] text-5xl mb-6 mx-auto" />

              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>

              <p className="text-gray-300 leading-relaxed">
                Deliver legally secure and high-quality projects with complete
                transparency and precision.
              </p>
            </div>

            <div className="bg-white/5 border border-[#c89b3c]/20 p-8 rounded-[30px] backdrop-blur-md hover:-translate-y-2 transition-all duration-300">
              <FaUsers className="text-[#c89b3c] text-5xl mb-6 mx-auto" />

              <h3 className="text-2xl font-semibold mb-4">Core Values</h3>

              <p className="text-gray-300 leading-relaxed">
                Integrity, compliance, social responsibility, and disciplined
                execution define Raajvita.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;