import Whatsapp from "../assets/contact/Whatsapp.svg";
import Instagram from "../assets/contact/Instagram.svg";
import Email from "../assets/contact/Email.svg";
import ContactsCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { motion } from 'framer-motion';

const ContactInfo = () => {
    const whatsappClick = () => {
        window.open("https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you.", "_blank", "noopener,noreferrer");
    };
    const instagramClick = () => {
        window.open("https://www.instagram.com/dev.taqi", "_blank", "noopener,noreferrer");
    };
    const emailClick = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=itstaqi2919@gmail.com", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex flex-col items-center py-16 md:py-24 px-6 md:px-12 lg:px-20 gap-12 max-w-7xl mx-auto">
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

            {/* Form on top */}
            <div className="w-full flex justify-center">
                <ContactForm />
            </div>

            {/* Direct Contact Cards underneath the Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <ContactsCard title="WhatsApp" contact="+923219747270" image={Whatsapp} onClick={whatsappClick} />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <ContactsCard title="Instagram" contact="@dev.taqi" image={Instagram} onClick={instagramClick} />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <ContactsCard title="Email" contact="itstaqi2919@gmail.com" image={Email} onClick={emailClick} />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactInfo;