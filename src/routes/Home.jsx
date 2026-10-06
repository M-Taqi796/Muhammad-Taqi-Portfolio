import Header from "../components/Header";
import ScrollBackground from "../components/ScrollBackground";
import TechStack from "../components/TechStack";
import Platforms from "../components/Platforms"
import Projects from "../components/Projects"
import Services from "../components/Services"

const Home = () => {
    return (
        <>
            <ScrollBackground />
            <Header />
            <Services />
            <TechStack />
            {/* <Platforms /> */}
            <Projects />
        </>
    )
}

export default Home