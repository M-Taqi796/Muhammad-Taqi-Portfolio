import PrimaryBtn from "./PrimaryBtn";
import SecondryBtn from "./SecondryBtn";
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'

const HeroIntro = () => {
  return (
    <article className="text-center mb-32 max-sm:mb-16">
      <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}}>
      <h2 className="text-4xl max-sm:text-2xl">Hello! I am</h2>
      </motion.div>
      <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}}>
      <h1 className="font-Nura text-5xl font-bold text-[#FFD166] my-2 max-sm:text-4xl">
        <span className="text-transparent [-webkit-text-stroke:1px_#FFD166]">
          Muhammad
        </span>{" "}
        Taqi
      </h1>
      </motion.div>
      <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:1}}>
      <h2 className="text-4xl leading-normal mb-2 max-sm:text-2xl">
        A Ui/Ux Designer & <br />
        Front-End Developer
      </h2>
      </motion.div>
      <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:1.5}}>
      <div className="flex gap-3.5 justify-center max-sm:(flex-col flex-wrap justify-center)">
      <SecondryBtn />
      <PrimaryBtn />
      </div>
      </motion.div>
    </article>
  );
};

export default HeroIntro;
