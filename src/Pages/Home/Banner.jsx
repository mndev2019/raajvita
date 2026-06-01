
import { FaArrowRight } from "react-icons/fa";
import logo from '../../assets/Images/logo.jpeg'
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden bg-[#f8f4ee]">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b0608] via-[#4b0d12] to-[#c89b3c] opacity-95"></div>

        {/* Golden Blur Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a63f]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#f3d58a]/10 blur-3xl rounded-full"></div>

        {/* Content */}
       <div className="relative z-10 container mx-auto px-6 lg:px-16 pt-36 pb-16 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen gap-14">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-block border border-[#d4a63f] text-[#f3d58a] px-5 py-2 rounded-full text-sm tracking-[3px] uppercase mb-6 backdrop-blur-md">
              Trusted • Transparent • RERA Certified
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-white">
              Building Trust <br />
              Beyond <span className="text-[#f0c35a]">Land</span>
            </h1>

            {/* Description */}
            <p className="text-[#f5e6c5] text-lg leading-8 mt-8 max-w-2xl">
              Raajvita Vista Developers Private Limited delivers premium
              land and property developments with military-grade discipline,
              complete legal transparency, and unmatched execution standards.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-10">
              
              <button onClick={()=> navigate('/projects')} className="bg-[#d4a63f] hover:bg-[#f0c35a] transition-all duration-300 text-[#2b0608] px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-2xl">
                Explore Projects
                <FaArrowRight />
              </button>

              <button onClick={()=> navigate('/contact-us')} className="border border-[#d4a63f] text-[#f3d58a] hover:bg-[#d4a63f] hover:text-[#2b0608] transition-all duration-300 px-8 py-4 rounded-full font-semibold">
                Contact Us
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16">
              
              <div className="border border-[#ffffff20] bg-[#ffffff10] backdrop-blur-md rounded-2xl p-5">
                <h2 className="text-3xl font-bold text-[#f0c35a]">100%</h2>
                <p className="text-[#f8f4ee] mt-2 text-sm">
                  Legal Compliance
                </p>
              </div>

              <div className="border border-[#ffffff20] bg-[#ffffff10] backdrop-blur-md rounded-2xl p-5">
                <h2 className="text-3xl font-bold text-[#f0c35a]">RERA</h2>
                <p className="text-[#f8f4ee] mt-2 text-sm">
                  Certified Projects
                </p>
              </div>

              <div className="border border-[#ffffff20] bg-[#ffffff10] backdrop-blur-md rounded-2xl p-5 col-span-2 sm:col-span-1">
                <h2 className="text-3xl font-bold text-[#f0c35a]">Elite</h2>
                <p className="text-[#f8f4ee] mt-2 text-sm">
                  Military Execution
                </p>
              </div>
            </div>
          </div>

          {/* Right Image / Logo */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            
            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] bg-[#d4a63f]/20 blur-3xl rounded-full"></div>

            {/* Logo Card */}
            <div className="relative bg-[#ffffff10] border border-[#ffffff20] backdrop-blur-xl rounded-[40px] p-8 shadow-[0_0_60px_rgba(212,166,63,0.3)]">
              
              <img
                src={logo}
                alt="Raajvita Logo"
                className="w-full max-w-[420px] object-contain"
              />

              {/* Floating Tag */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#d4a63f] text-[#2b0608] px-8 py-3 rounded-full font-semibold shadow-xl">
                Since 2026
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4a63f] to-transparent"></div>
      </section>
    </>
  );
}

export default Banner;



// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import logo from '../assets/Images/logo.jpeg'

// function Banner() {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden bg-[#faf7f2]">
      
//       {/* Soft Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f2] via-[#fffaf3] to-[#f7efe2]"></div>

//       {/* Elegant Blur Effects */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8b1e2d]/10 blur-3xl rounded-full"></div>

//       {/* Decorative Circle */}
//       <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] border border-[#d4a63f]/20 rounded-full"></div>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-6 lg:px-16 py-16 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen gap-14">

//         {/* Left Side */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">

//           {/* Top Badge */}
//           <div className="inline-block border border-[#d4a63f]/40 bg-white/70 backdrop-blur-md text-[#a97a1f] px-5 py-2 rounded-full text-sm tracking-[3px] uppercase mb-6 shadow-sm">
//             RERA Certified • Trusted Development
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-[#3c0d12]">
//             Building Trust <br />
//             Beyond <span className="text-[#c89b3c]">Land</span>
//           </h1>

//           {/* Description */}
//           <p className="text-[#5e4b42] text-lg leading-8 mt-8 max-w-2xl">
//             Rajvita Vistar Developers Private Limited delivers premium
//             land and property developments with complete transparency,
//             military-grade discipline, and legally secure investment opportunities.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-5 mt-10">

//             <button className="bg-[#c89b3c] hover:bg-[#b88a2f] transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl">
//               Explore Projects
//               <FaArrowRight />
//             </button>

//             <button className="border border-[#c89b3c] text-[#a97a1f] hover:bg-[#c89b3c] hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-semibold">
//               Contact Us
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-16">

//             <div className="bg-white/80 backdrop-blur-md border border-[#e8d9b5] rounded-3xl p-5 shadow-md">
//               <h2 className="text-3xl font-bold text-[#c89b3c]">100%</h2>
//               <p className="text-[#5e4b42] mt-2 text-sm">
//                 Legal Compliance
//               </p>
//             </div>

//             <div className="bg-white/80 backdrop-blur-md border border-[#e8d9b5] rounded-3xl p-5 shadow-md">
//               <h2 className="text-3xl font-bold text-[#c89b3c]">RERA</h2>
//               <p className="text-[#5e4b42] mt-2 text-sm">
//                 Certified Projects
//               </p>
//             </div>

//             <div className="bg-white/80 backdrop-blur-md border border-[#e8d9b5] rounded-3xl p-5 shadow-md col-span-2 sm:col-span-1">
//               <h2 className="text-3xl font-bold text-[#c89b3c]">Elite</h2>
//               <p className="text-[#5e4b42] mt-2 text-sm">
//                 Execution Standards
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-full lg:w-1/2 flex justify-center relative">

//           {/* Soft Glow */}
//           <div className="absolute w-[350px] h-[350px] bg-[#d4a63f]/10 blur-3xl rounded-full"></div>

//           {/* Logo Card */}
//           <div className="relative bg-white/70 backdrop-blur-xl border border-[#ecd9b0] rounded-[40px] p-8 shadow-[0_10px_50px_rgba(200,155,60,0.15)]">

//             <img
//               src={logo}
//               alt="Rajvita Logo"
//               className="w-full max-w-[420px] object-contain"
//             />

//             {/* Bottom Tag */}
//             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#c89b3c] text-white px-8 py-3 rounded-full font-semibold shadow-lg">
//               Since 2026
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4a63f] to-transparent"></div>
//     </section>
//   );
// }

// export default Banner;