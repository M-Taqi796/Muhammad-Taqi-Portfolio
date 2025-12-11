import web from "../assets/platforms/web.svg";
import android from "../assets/platforms/android.svg";
import ios from "../assets/platforms/ios.svg";
import mac from "../assets/platforms/mac.svg";
import windows from "../assets/platforms/windows.svg";
import { motion } from "framer-motion";

const platforms = [
  { name: "Web", icon: web },
  { name: "Android", icon: android },
  { name: "iOS", icon: ios },
  { name: "Windows", icon: windows },
  { name: "MacOS", icon: mac },
];

const Platforms = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 flex flex-col items-center gap-12">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Platforms I Build For
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 md:w-40 md:h-40 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-[#4DD0E1]/30 hover:border-[#4DD0E1]/50 transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#4DD0E1]/20 transition-colors duration-300">
              <img className="w-10 h-10 md:w-12 md:h-12 object-contain" src={platform.icon} alt={platform.name} />
            </div>
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{platform.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Platforms;
