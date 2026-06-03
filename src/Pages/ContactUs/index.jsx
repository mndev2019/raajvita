
import axios from "axios";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { Base_Url } from "../../API/BaseUrl";

const ContactUs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);



  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !mobile || !message) {
      toast.error("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!mobileRegex.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    const requestdata = {
      name,
      email,
      mobile,
      message,
    };

    try {
      setLoading(true);

      const response = await axios.post(
        `${Base_Url}/contact-enquiry`,
        requestdata
      );
      console.log(response);

      toast.success("Enquiry submitted successfully!");

      setname("");
      setemail("");
      setmobile("");
      setmessage("");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Server error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8f4ec] text-[#2d140f]">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#2b0a0a] via-[#4a0909] to-[#2b0a0a] text-white pb-24 pt-30 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[6px] text-[#d4a537] mb-4">
            Get In Touch
          </p>

          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Contact Raajvita Vista Developers
          </h1>

          <p className="md:text-lg text-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are committed to delivering transparent communication, trusted
            guidance, and premium real estate solutions. Connect with us today.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="lg:py-24 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-[5px] text-[#d4a537] font-semibold mb-3">
              Contact Information
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Let’s Build Something Great Together
            </h2>

            <p className="text-gray-700 leading-relaxed mb-10 md:text-lg text-md">
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
                  <a
                    href="mailto:raajvitavista@gmail.com"
                    className="text-gray-600  transition-colors duration-300"
                  >
                    raajvitavista@gmail.com
                  </a>
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
                    Office No. O-493, 4th Floor, Gaur City Center,
                    Sector 4, Gautam Buddha Nagar,
                    Uttar Pradesh - 201318, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-[35px] shadow-2xl border border-[#d4a537]/20 p-7 md:p-10">
            <p className="uppercase tracking-[5px] text-[#d4a537] font-semibold mb-3">
              Enquiry Form
            </p>

            <h2 className="md:text-3xl text-2xl font-bold mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-6" onSubmit={handlesubmit}>
              {/* NAME */}
              <div>
                <label className="block mb-2 font-medium">Full Name</label>

                <input
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-2xl px-5 md:py-4 py-3 outline-none focus:border-[#d4a537] transition-all"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-medium">Email Address</label>

                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-2xl px-5 md:py-4 py-3 outline-none focus:border-[#d4a537] transition-all"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block mb-2 font-medium">Phone Number</label>

                <input
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-2xl px-5 md:py-4 py-3 outline-none focus:border-[#d4a537] transition-all"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 font-medium">Your Message</label>

                <textarea
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  rows="5"
                  placeholder="Write your enquiry..."
                  className="w-full border border-gray-300 rounded-2xl px-5 md:py-4 py-3 outline-none focus:border-[#d4a537] transition-all resize-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d4a537] hover:bg-[#be912f] transition-all text-black py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg disabled:opacity-50"
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;