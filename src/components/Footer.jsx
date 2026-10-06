import { useState } from "react";
import Taqi from "../assets/footer/taqi.svg";
import { motion } from 'framer-motion';

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState("");
  const [footerStatus, setFooterStatus] = useState("idle"); // idle | loading | success | error

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    if (!footerEmail) return;
    setFooterStatus("loading");

    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

    try {
      // Netlify Form submission (active on Netlify production)
      const formData = new URLSearchParams();
      formData.append("form-name", "footer-contact");
      formData.append("email", footerEmail);
      formData.append("message", "User submitted their email from the footer requesting to discuss a project.");

      const netlifyRes = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (netlifyRes.ok && !isLocal) {
        setFooterStatus("success");
        setFooterEmail("");
        return;
      }

      // Fallback or local
      const res = await fetch("https://formsubmit.co/ajax/itstaqi2919@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: footerEmail,
          intent: "Project Discussion Request",
          message: `User (${footerEmail}) submitted their email in the footer requesting to discuss a project together.`,
          _subject: `New Project Discussion Request from ${footerEmail}`,
          _replyto: footerEmail,
          _captcha: "false",
        }),
      });

      const data = await res.json();
      if (data.success === "true" || res.ok || isLocal) {
        setFooterStatus("success");
        setFooterEmail("");
      } else {
        setFooterStatus("error");
      }
    } catch (err) {
      if (isLocal) {
        setFooterStatus("success");
        setFooterEmail("");
      } else {
        setFooterStatus("error");
      }
    }
  };

  return (
    <footer className="text-white flex flex-col border-t border-white/10 py-12 gap-12 px-8 md:px-16 lg:px-24 bg-[#2c2c2c]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 text-center md:text-left w-full md:w-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFD166]">Let's work together</h1>
          <p className="text-gray-400 max-w-md">
            Have a project in mind? Let's create something amazing together.
          </p>

          {/* Project discussion email form */}
          <form
            name="footer-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleFooterSubmit}
            className="mt-2 flex flex-col sm:flex-row gap-3 max-w-md w-full"
          >
            <input type="hidden" name="form-name" value="footer-contact" />
            <input
              type="email"
              name="email"
              value={footerEmail}
              onChange={(e) => setFooterEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-[#1e1e1e] border border-white/15 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#4DD0E1] transition-colors"
            />
            <motion.button
              type="submit"
              disabled={footerStatus === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-[#4DD0E1] to-[#00BCD4] text-[#2C2C2C] font-bold text-sm rounded-xl hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {footerStatus === "loading" ? "Sending..." : "Send"}
            </motion.button>
          </form>

          {footerStatus === "success" && (
            <p className="text-[#4DD0E1] text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Thanks! I've received your email and will reach out to discuss your project soon.</span>
            </p>
          )}

          {footerStatus === "error" && (
            <p className="text-red-400 text-sm">
              Unable to send right now. Please email directly at{" "}
              <a href="mailto:itstaqi2919@gmail.com" className="underline hover:text-white">
                itstaqi2919@gmail.com
              </a>
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img className="w-24 h-24 md:w-32 md:h-32 object-contain" src={Taqi} alt="Muhammad Taqi" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-8 md:gap-16 text-lg md:text-xl font-medium"
      >
        <a href="https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you." target="_blank" rel="noopener noreferrer" className="hover:text-[#4DD0E1] transition-colors duration-300">WhatsApp</a>
        <a href="https://www.instagram.com/direct/t/uiux.taqi" target="_blank" rel="noopener noreferrer" className="hover:text-[#4DD0E1] transition-colors duration-300">Instagram</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=itstaqi2919@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4DD0E1] transition-colors duration-300">Email</a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-white/5 pt-8 text-center"
      >
        <p className="text-sm text-gray-500">
          © 2026 Muhammad Taqi. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;

