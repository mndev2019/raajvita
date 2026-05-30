
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#f8f4ec] text-[#2d140f]">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#2b0a0a] via-[#4a0909] to-[#2b0a0a] text-white pb-24 pt-30 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[6px] text-[#d4a537] mb-4">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Raajvita Vista Developers
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are committed to delivering transparent communication, trusted
            guidance, and premium real estate solutions. Connect with us today.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-[5px] text-[#d4a537] font-semibold mb-3">
              Contact Information
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Let’s Build Something Great Together
            </h2>

            <p className="text-gray-700 leading-relaxed mb-10 text-lg">
              Reach out to our team for property inquiries, investment
              opportunities, partnerships, or project-related information.
            </p>

            <div className="space-y-6">
              {/* PHONE */}
              <div className="flex items-start gap-5 bg-white p-6 rounded-3xl shadow-lg border border-[#d4a537]/20">
                <div className="bg-[#d4a537] text-black p-4 rounded-2xl">
                  <FaPhoneAlt className="text-xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                  <p className="text-gray-600">+91 xxxxxxxxxx</p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5 bg-white p-6 rounded-3xl shadow-lg border border-[#d4a537]/20">
                <div className="bg-[#d4a537] text-black p-4 rounded-2xl">
                  <FaEnvelope className="text-xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                  <p className="text-gray-600">
                    xyz@example.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-5 bg-white p-6 rounded-3xl shadow-lg border border-[#d4a537]/20">
                <div className="bg-[#d4a537] text-black p-4 rounded-2xl">
                  <FaMapMarkerAlt className="text-xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Office Address</h3>
                  <p className="text-gray-600">
                    Raajvita Vista Developers Pvt. Ltd.
                    <br />
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-[35px] shadow-2xl border border-[#d4a537]/20 p-8 md:p-10">
            <p className="uppercase tracking-[5px] text-[#d4a537] font-semibold mb-3">
              Enquiry Form
            </p>

            <h2 className="text-3xl font-bold mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-6">
              {/* NAME */}
              <div>
                <label className="block mb-2 font-medium">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#d4a537] transition-all"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-medium">Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#d4a537] transition-all"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block mb-2 font-medium">Phone Number</label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#d4a537] transition-all"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 font-medium">Your Message</label>

                <textarea
                  rows="5"
                  placeholder="Write your enquiry..."
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#d4a537] transition-all resize-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-[#d4a537] hover:bg-[#be912f] transition-all text-black py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg">
                <FaPaperPlane />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;