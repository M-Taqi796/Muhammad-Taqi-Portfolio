import Hero from "../components/HeroSection";
import ScrollBackground from "../components/ScrollBackground";
import TechStack from "../components/TechStack";
import Platforms from "../components/Platforms"
import Projects from "../components/Projects"
import Services from "../components/Services"

const Home = () => {
    return (
        <>
            <ScrollBackground />
            <Hero />
            <TechStack />
            <Platforms />
            <Services />
            <Projects />
        </>
    )
}

export default Home