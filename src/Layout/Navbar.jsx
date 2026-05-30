import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.jpeg";

function Navbar() {
  const navigate = useNavigate("");
  const [open, setOpen] = useState(false);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto px-6 lg:px-16 py-5">

          {/* Navbar Wrapper */}
          <div className="flex items-center justify-between bg-white/90 backdrop-blur-xl border border-[#ecd9b0] rounded-full px-6 lg:px-8  shadow-[0_10px_40px_rgba(200,155,60,0.12)]">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="logo"
                className="w-20 h-20 object-contain"
              />

              {/* <div>
                <h2 className="text-[#3c0d12] text-xl font-semibold tracking-wide">
                  RAJVITA
                </h2>

                <p className="text-[#c89b3c] text-xs tracking-[4px] uppercase">
                  Vistar
                </p>
              </div> */}
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[#5e4b42] hover:text-[#c89b3c] transition-all duration-300 cursor-pointer font-medium relative group"
                  >
                    {item.name}

                    {/* Hover Line */}
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#c89b3c] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Button */}
            <div className="hidden lg:block">
              <button onClick={()=> navigate('contact-us')} className="bg-[#c89b3c] hover:bg-[#b88a2f] transition-all duration-300 text-white px-7 py-3 rounded-full font-medium shadow-lg">
                Get In Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#3c0d12] text-3xl"
            >
              {open ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              open ? "max-h-[400px] mt-4" : "max-h-0"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-[#ecd9b0] rounded-3xl p-6 shadow-xl">

              <ul className="flex flex-col gap-6">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-[#5e4b42] hover:text-[#c89b3c] transition-all duration-300 cursor-pointer font-medium border-b border-[#f1e3bf] pb-3 block"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-6 bg-[#c89b3c] hover:bg-[#b88a2f] transition-all duration-300 text-white py-3 rounded-full font-medium shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;