import Whatsapp from "../assets/contact/Whatsapp.svg";
import Instagram from "../assets/contact/Instagram.svg";
import Email from "../assets/contact/Email.svg";
import ContactsCard from "./ContactCard";
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
const ContactInfo = () => {
    const whatsappClick = () => {
        window.open("https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you.", "_blank");
    }
    const instagramClick = () => {
        window.open("https://www.instagram.com/uiux.taqi", "_blank");
    }
    const emailClick = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=itstaqi2919@gmail.com", "_blank");
    }
    return (
        <div className="flex flex-col items-center mb-20 gap-12 max-sm:mb-10">
        <h2 className="text-5xl max-sm:text-3xl">Get in touch</h2>
        <div className="flex gap-14 flex-wrap justify-center">
          <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}}>
            <ContactsCard title="WhatsApp" contact="+923219747270" image={Whatsapp} onClick={whatsappClick}/>
            </motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}}>
            <ContactsCard title="Instagram" contact="@uiux.taqi" image={Instagram} onClick={instagramClick}/>
            </motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}}>
            <ContactsCard title="Email" contact="itstaqi2919@gmail.com" image={Email} onClick={emailClick}/>
            </motion.div>
        </div>
    </div>
    )
}

export default ContactInfo;