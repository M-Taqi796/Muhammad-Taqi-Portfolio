import ServicesCard from "./ServicesCard";
import WebDesign from "../assets/services/webDesign.svg";
import MobileDesign from "../assets/services/mobileDesign.svg";
import WebDev from "../assets/services/webDev.svg";
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
const Services = () => {
  return (
    <div className="flex flex-col items-center py-12 shadow-[0px_0px_4px_0px_#B0B0B0] rounded-3xl mb-20 gap-12 mx-24 max-sm:mx-6 max-sm:mb-10 max-sm:py-6 max-sm:gap-6">
        <h2 className="text-5xl max-sm:text-4xl">Services</h2>
        <div className="flex gap-12 flex-wrap justify-center max-sm:gap-6">
          <motion.div initial={{opacity:0, x:-150}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}}>
            <ServicesCard text="Web Design" image={WebDesign} />
          </motion.div>
          <motion.div initial={{opacity:0, x:-150}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay:0.5}}>
            <ServicesCard text="App Design" image={MobileDesign} />
          </motion.div>
          <motion.div initial={{opacity:0, x:-150}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay:1}}>
            <ServicesCard text="Web Development" image={WebDev} />
          </motion.div>
            
        </div>
    </div>
  );
}
export default Services