import Whatsapp from "../assets/contact/Whatsapp.svg";
import Instagram from "../assets/contact/Instagram.svg";
import Email from "../assets/contact/Email.svg";
import ContactsCard from "./ContactCard";
import { motion } from 'framer-motion';

const ContactInfo = () => {
    const whatsappClick = () => {
        window.open("https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you.", "_blank", "noopener,noreferrer");
    }
    const instagramClick = () => {
        window.open("https://www.instagram.com/uiux.taqi", "_blank", "noopener,noreferrer");
    }
    const emailClick = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=itstaqi2919@gmail.com", "_blank", "noopener,noreferrer");
    }
    return (
        <div className="flex flex-col items-center py-20 px-8 md:px-16 lg:px-24 gap-16">
            <motion.h2
                className="text-5xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Get in touch
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8 w-full">
                <motion.div className="w-full md:w-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <ContactsCard title="WhatsApp" contact="+923219747270" image={Whatsapp} onClick={whatsappClick} />
                </motion.div>
                <motion.div className="w-full md:w-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <ContactsCard title="Instagram" contact="@uiux.taqi" image={Instagram} onClick={instagramClick} />
                </motion.div>
                <motion.div className="w-full md:w-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <ContactsCard title="Email" contact="itstaqi2919@gmail.com" image={Email} onClick={emailClick} />
                </motion.div>
            </div>
        </div>
    )
}

export default ContactInfo;