
import { FaBookOpen, FaSchool, FaHandsHelping } from "react-icons/fa";
import about2 from '../../assets/Images/about2.jpg'

function CSR() {
  const csrData = [
    {
      icon: <FaBookOpen />,
      title: "Quality Education",
      desc: "Supporting educational initiatives and creating better learning opportunities for children.",
    },
    {
      icon: <FaSchool />,
      title: "Public Libraries",
      desc: "Building libraries and knowledge centers in rural and semi-urban communities.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Empowerment",
      desc: "Creating modern infrastructure and empowering underprivileged families for a brighter future.",
    },
  ];

  return (
    <>
      <section className="relative py-24 bg-[#faf7f2] overflow-hidden">

        {/* Soft Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a63f]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b1e2d]/5 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>

              {/* Small Heading */}
              <span className="text-[#c89b3c] uppercase tracking-[4px] text-sm font-medium">
                Social Responsibility
              </span>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#3c0d12] leading-tight mt-5">
                Building Communities, Empowering Futures
              </h2>

              {/* Description */}
              <p className="text-[#5e4b42] text-lg leading-8 mt-8">
                At Rajvita Vistar Developers, our vision of development extends
                beyond real estate. We proudly support initiatives focused on
                education, public libraries, and rural infrastructure through
                the Rajendra Kavita Welfare Foundation.
              </p>

              <p className="text-[#5e4b42] text-lg leading-8 mt-6">
                Every partnership with Rajvita contributes towards creating
                brighter opportunities and sustainable growth for rural and
                semi-urban communities across India.
              </p>

              {/* CSR Cards */}
              <div className="space-y-5 mt-10">

                {csrData.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-[#ecd9b0] rounded-[25px] p-6 flex items-start gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-[#fff5df] flex items-center justify-center text-[#c89b3c] text-2xl shrink-0 group-hover:scale-110 transition-all duration-500">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-semibold text-[#3c0d12]">
                        {item.title}
                      </h3>

                      <p className="text-[#5e4b42] leading-7 mt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-center">

              {/* Main Image */}
              <div className="relative z-10 rounded-[40px] overflow-hidden border border-[#ecd9b0] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                
                <img
                  src={about2}
                  alt="CSR"
                  className="w-full h-[650px] object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white border border-[#ecd9b0] rounded-[30px] px-10 py-8 shadow-2xl z-20 w-[90%]">
                
                <div className="grid grid-cols-3 gap-6 text-center">

                  <div>
                    <h3 className="text-3xl font-bold text-[#c89b3c]">
                      2020
                    </h3>

                    <p className="text-[#5e4b42] mt-2 text-sm">
                      Foundation Started
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-[#c89b3c]">
                      Rural
                    </h3>

                    <p className="text-[#5e4b42] mt-2 text-sm">
                      Community Focus
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-[#c89b3c]">
                      Future
                    </h3>

                    <p className="text-[#5e4b42] mt-2 text-sm">
                      Empowerment
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Shape */}
              <div className="absolute -z-10 top-10 -right-6 w-full h-full border-2 border-[#d4a63f]/20 rounded-[40px]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CSR;