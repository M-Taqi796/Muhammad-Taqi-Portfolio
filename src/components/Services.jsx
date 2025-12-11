import ServicesCard from "./ServicesCard";
import WebDesign from "../assets/services/webDesign.svg";
import MobileDesign from "../assets/services/mobileDesign.svg";
import WebDev from "../assets/services/webDev.svg";
import MobileDev from "../assets/services/mobileDev.svg";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 flex flex-col items-center gap-16">
      <motion.h2
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="h-full">
          <ServicesCard text="Web Design" image={WebDesign} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="h-full">
          <ServicesCard text="App Design" image={MobileDesign} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="h-full">
          <ServicesCard text="Web Development" image={WebDev} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="h-full">
          <ServicesCard text="App Development" image={MobileDev} />
        </motion.div>
      </div>
    </section>
  );
}
export default Services