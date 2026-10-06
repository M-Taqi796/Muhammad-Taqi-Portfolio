import Whatsapp from "../assets/contact/Whatsapp.svg";
import Instagram from "../assets/contact/Instagram.svg";
import Email from "../assets/contact/Email.svg";
import ContactForm from "./ContactForm";
import { motion } from 'framer-motion';

const ContactInfo = () => {
    const contactLinks = [
        {
            name: "Email",
            value: "itstaqi2919@gmail.com",
            href: "mailto:itstaqi2919@gmail.com",
            icon: Email,
        },
        {
            name: "WhatsApp",
            value: "+923466689886",
            href: "https://wa.me/923466689886?text=Hello!%20I%20want%20to%20hire%20you.",
            icon: Whatsapp,
        },
        {
            name: "Instagram",
            value: "dev.taqi",
            href: "https://www.instagram.com/dev.taqi",
            icon: Instagram,
        },
    ];

    return (
        <div className="flex flex-col items-center py-16 md:py-24 px-6 md:px-12 lg:px-20 gap-10 max-w-7xl mx-auto">
            <motion.div
                className="text-center max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                    Get in <span className="text-[#4DD0E1]">Touch</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg">
                    Have a project in mind, need design or development expertise? Fill out the form or reach out through direct channels.
                </p>
            </motion.div>

            {/* Direct Contact Links with Icon and Text underneath the Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-start min-[823px]:flex-row min-[823px]:items-center min-[823px]:justify-center gap-4 sm:gap-5 min-[823px]:gap-10 lg:gap-14 w-fit mx-auto pt-2"
            >
                {contactLinks.map((item) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3.5 text-gray-300 hover:text-white transition-colors group cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#1E1E1E] border border-white/10 flex items-center justify-center group-hover:border-[#4DD0E1] group-hover:bg-[#4DD0E1]/10 transition-all shrink-0">
                            <img src={item.icon} alt={item.name} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-base sm:text-lg font-medium">{item.value}</span>
                    </motion.a>
                ))}
            </motion.div>

            {/* Contact Form */}
            <div className="w-full flex justify-center">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactInfo;