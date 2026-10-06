import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [service, setService] = useState("Design & Development");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const services = [
    {
      id: "Design & Development",
      label: "Design & Development",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      id: "Development",
      label: "Development",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: "Design",
      label: "Design",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      id: "Other",
      label: "Other",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

    try {
      // Netlify Form submission (active on Netlify production)
      const formData = new URLSearchParams();
      formData.append("form-name", "contact");
      formData.append("name", name || "Not provided");
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("service", service);
      formData.append("message", message);

      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (netlifyResponse.ok && !isLocal) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        return;
      }

      // Also send to FormSubmit endpoint as direct email delivery to itstaqi2919@gmail.com
      const res = await fetch("https://formsubmit.co/ajax/itstaqi2919@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: name || "Not provided",
          email,
          phone,
          service,
          message,
          _subject: `New ${service} Inquiry from ${name || email}`,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json();

      if (data.success === "true" || res.ok || isLocal) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      if (isLocal) {
        // In local development, simulate success without being blocked by browser extensions
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage("Network error. Please try again or reach out directly at itstaqi2919@gmail.com.");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl bg-[#2C2C2C] border border-white/10 rounded-2xl p-6 sm:p-10 relative"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center md:text-left">
        Send a Message
      </h3>
      <p className="text-gray-400 text-sm sm:text-base mb-8 text-center md:text-left">
        Tell me about your project, timeline, and requirements. All inquiries go directly to my inbox.
      </p>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-xl bg-[#1E1E1E] border border-white/10 text-center flex flex-col items-center gap-3 my-6"
        >
          <div className="w-12 h-12 rounded-full bg-[#4DD0E1]/20 flex items-center justify-center text-[#4DD0E1]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
          <p className="text-gray-300 text-sm max-w-md">
            Thank you for reaching out. Your inquiry has been sent to{" "}
            <span className="text-[#4DD0E1] font-semibold">itstaqi2919@gmail.com</span>. I will review it and reply as soon as possible.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 text-sm font-semibold rounded-lg bg-[#4DD0E1] text-[#2C2C2C] hover:bg-[#00BCD4] transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Netlify Form Hidden Inputs */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2.5">
              Service Required <span className="text-[#4DD0E1]">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {services.map((s) => {
                const isSelected = service === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setService(s.id)}
                    className={`py-3 px-3 rounded-xl font-medium text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 transition-colors duration-200 border cursor-pointer ${
                      isSelected
                        ? "bg-[#4DD0E1]/15 border-[#4DD0E1] text-[#4DD0E1]"
                        : "bg-[#1E1E1E] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <span>{s.icon}</span>
                    <span className="text-center">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Phone in 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Muhammad Taqi"
                className="w-full px-4 py-3 bg-[#1E1E1E] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4DD0E1] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                Phone Number <span className="text-[#4DD0E1]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+92 321 9747270"
                required
                className="w-full px-4 py-3 bg-[#1E1E1E] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4DD0E1] transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
              Email Address <span className="text-[#4DD0E1]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-[#1E1E1E] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4DD0E1] transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
              Your Message <span className="text-[#4DD0E1]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project, requirements, or any questions you have..."
              required
              className="w-full px-4 py-3 bg-[#1E1E1E] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4DD0E1] transition-colors resize-none"
            />
          </div>

          {/* Error Notice */}
          {status === "error" && (
            <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex flex-col gap-1">
              <p>{errorMessage}</p>
              <a
                href={`mailto:itstaqi2919@gmail.com?subject=Project Inquiry (${service})&body=${encodeURIComponent(message)}`}
                className="text-[#4DD0E1] underline hover:text-white text-xs font-semibold"
              >
                Click here to send directly from your email app
              </a>
            </div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 bg-gradient-to-r from-[#4DD0E1] to-[#00BCD4] text-[#2C2C2C] text-lg font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin h-5 w-5 text-[#2C2C2C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending Inquiry...</span>
              </>
            ) : (
              <span>Submit Inquiry</span>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
