import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between px-32 py-6 mb-20">
      <Link to="/">
        <h1 className="font-Nura text-2xl font-bold">
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            Muhammad
          </span>{" "}
          Taqi
        </h1>
      </Link>
      <div className="flex gap-6 text-[1rem]">
        <Link to="/">Home</Link>
        <Link to="/projects">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
