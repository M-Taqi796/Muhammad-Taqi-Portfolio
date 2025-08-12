import Taqi from "../assets/footer/taqi.svg";
const Footer = () => {
    return (
        <footer className="text-white flex flex-col border-t border-[#B0B0B0] py-8 gap-20">
            <div className="flex justify-between items-center">
                <h1 className="text-transparent text-5xl [-webkit-text-stroke:1px_#FFD166]">Lets work together</h1>
                <img src={Taqi} alt="" />
            </div>
            <div className="flex gap-16 text-2xl justify-center">
                <a href="">WhatsApp</a>
                <a href="">Instagram</a>
                <a href="">Mail</a>
            </div>
            <p className="text-[1rem] text-[#B0B0B0] text-center">© 2025 Muhammad Taqi  All rights reserved  |  Designed & Developed by Muhammad Taqi.</p>
        </footer>
    );
}

export default Footer;