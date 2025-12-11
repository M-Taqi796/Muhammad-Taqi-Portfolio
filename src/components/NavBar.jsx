import { Link } from "react-router-dom";
import CallIcon from "../assets/navBar/CallIcon.svg";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-8 md:px-16 lg:px-24 backdrop-blur-md bg-[#2c2c2c]/80 border-b border-white/10 mb-10 transition-all duration-300">
      <Link to="/">
        <h1 className="font-Nura text-2xl font-bold max-sm:text-[1rem]">
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            Muhammad
          </span>{" "}
          Taqi
        </h1>
      </Link>
      <div className="flex gap-6 text-[1rem] items-center">
        <Link 
          className="border border-white/20 px-6 py-2 flex gap-3 items-center rounded-full hover:bg-white hover:text-[#2c2c2c] transition-all duration-300 group" 
          to="/contact"
        >
          <img src={CallIcon} alt="" className="group-hover:invert transition-all duration-300" />
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
