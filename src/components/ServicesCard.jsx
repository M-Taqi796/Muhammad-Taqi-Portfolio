const ServicesCard = ({ text, image }) => {
    return (
        <div className="w-80 py-12 shadow-[0px_0px_4px_0px_#B0B0B0] rounded-xl flex flex-col items-center gap-14">
        <img src={image} alt={text} className="" />
        <h3 className="text-3xl">{text}</h3>
        </div>
    );
}

export default ServicesCard