import ServicesCard from "./ServicesCard";
import WebDesign from "../assets/services/webDesign.svg";
import MobileDesign from "../assets/services/mobileDesign.svg";
import WebDev from "../assets/services/webDev.svg";

const Services = () => {
  return (
    <div className="flex flex-col items-center py-12 shadow-[0px_0px_4px_0px_#B0B0B0] rounded-3xl mb-20 gap-12">
        <h2 className="text-5xl">Services</h2>
        <div className="flex gap-14">
            <ServicesCard text="Web Design" image={WebDesign} />
            <ServicesCard text="Web Design" image={MobileDesign} />
            <ServicesCard text="Web Design" image={WebDev} />
            
        </div>
    </div>
  );
}
export default Services