
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Images/logo.jpeg'

function Footer() {
  const navigate = useNavigate("");
  return (
    <>
      <footer className="relative bg-[#3c0d12] overflow-hidden pt-24">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffffff10] blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">

          {/* Top CTA */}
          <div className="bg-gradient-to-r from-[#fff7e8] to-[#fdf1d8] rounded-[40px] px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl -mt-10 relative z-20">
            
            <div>
              <span className="text-[#c89b3c] uppercase tracking-[4px] text-sm font-medium">
                Let’s Connect
              </span>

              <h2 className="text-3xl lg:text-5xl font-semibold text-[#3c0d12] leading-tight mt-4">
                Secure Your Future With Trusted Development
              </h2>
            </div>

            <button onClick={()=> navigate('contact-us')} className="bg-[#3c0d12] hover:bg-[#5a151d] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-500 shadow-lg">
              Contact Us
            </button>
          </div>

          {/* Footer Content */}
          <div className="grid lg:grid-cols-4 gap-14 pt-24 pb-16">

            {/* Company Info */}
            <div>
              
              {/* Logo */}
              {/* <h2 className="text-3xl font-bold text-white">
                Rajvita
              </h2> */}
               <img
                              src={logo}
                              alt="logo"
                              className="w-20 h-20 object-contain"
                            />

              <p className="text-[#f5e6c5] leading-8 mt-6">
                Rajvita Vistar Developers Private Limited is committed
                to building a new benchmark of trust, discipline, and
                transparency in the real estate sector.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-8">

                <a
                  href="/"
                  className="w-11 h-11 rounded-full border border-[#ffffff20] flex items-center justify-center text-[#f5e6c5] hover:bg-[#c89b3c] hover:text-[#3c0d12] transition-all duration-500"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="/"
                  className="w-11 h-11 rounded-full border border-[#ffffff20] flex items-center justify-center text-[#f5e6c5] hover:bg-[#c89b3c] hover:text-[#3c0d12] transition-all duration-500"
                >
                  <FaInstagram />
                </a>

                <a
                  href="/"
                  className="w-11 h-11 rounded-full border border-[#ffffff20] flex items-center justify-center text-[#f5e6c5] hover:bg-[#c89b3c] hover:text-[#3c0d12] transition-all duration-500"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              
              <h3 className="text-2xl font-semibold text-white mb-8">
                Quick Links
              </h3>

              <ul className="space-y-5">

                <li>
                  <a
                    href="/"
                    className="text-[#f5e6c5] hover:text-[#c89b3c] transition-all duration-300"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/about-us"
                    className="text-[#f5e6c5] hover:text-[#c89b3c] transition-all duration-300"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/services"
                    className="text-[#f5e6c5] hover:text-[#c89b3c] transition-all duration-300"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="/projects"
                    className="text-[#f5e6c5] hover:text-[#c89b3c] transition-all duration-300"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="/contact-us"
                    className="text-[#f5e6c5] hover:text-[#c89b3c] transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              
              <h3 className="text-2xl font-semibold text-white mb-8">
                Our Services
              </h3>

              <ul className="space-y-5 text-[#f5e6c5]">

                <li>Premium Land Development</li>
                <li>Real Estate Consultation</li>
                <li>Property Investment</li>
                <li>Legal Documentation</li>
                <li>Project Development</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              
              <h3 className="text-2xl font-semibold text-white mb-8">
                Contact Info
              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  
                  <div className="w-11 h-11 rounded-full bg-[#ffffff10] flex items-center justify-center text-[#c89b3c] shrink-0">
                    <FaMapMarkerAlt />
                  </div>

                  <p className="text-[#f5e6c5] leading-7">
                    Your Office Address Here,
                    Uttar Pradesh, India
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  
                  <div className="w-11 h-11 rounded-full bg-[#ffffff10] flex items-center justify-center text-[#c89b3c] shrink-0">
                    <FaPhoneAlt />
                  </div>

                  <p className="text-[#f5e6c5]">
                    +91 XXXXX XXXXX
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  
                  <div className="w-11 h-11 rounded-full bg-[#ffffff10] flex items-center justify-center text-[#c89b3c] shrink-0">
                    <FaEnvelope />
                  </div>

                  <p className="text-[#f5e6c5]">
                    info@rajvitavistar.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-[#ffffff15] py-6 flex flex-col lg:flex-row items-center justify-between gap-4">

            <p className="text-[#f5e6c5]/80 text-sm text-center lg:text-left">
              © 2026 Rajvita Vistar Developers Pvt. Ltd. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-[#f5e6c5]/80">
              
              <p>CIN Registered Company</p>

              <div className="w-1.5 h-1.5 rounded-full bg-[#c89b3c]"></div>

              <p>RERA Certified Development Firm</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;