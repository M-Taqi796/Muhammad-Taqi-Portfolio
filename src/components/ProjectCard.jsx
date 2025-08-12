const ProjectCard = ({ title, image, category }) => {
    return (
        <div className="py-6 flex flex-col items-center border rounded-xl px-4 hover:border-[#4DD0E1] group">
            <img src={image} alt="" className="size-80"/>
            <p className="mt-4 mb-1 text-2xl  group-hover:text-[#FFD166]">{title}</p>
            <p className="text-lg text-[#B0B0B0]">{category}</p>
        </div>
    )
}

export default ProjectCard