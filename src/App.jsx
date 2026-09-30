import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import "./App.css";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CaseStudyUniGo from "./routes/CaseStudyUniGo";
import CaseStudyVirginLots from "./routes/CaseStudyVirginLots";
import CaseStudyAmstaniCo from "./routes/CaseStudyAmstaniCo";
import CaseStudySharkEcommerce from "./routes/CaseStudySharkEcommerce";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar className="h-16" />
        <div className="flex-1">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path="/case-study/unigo" Component={CaseStudyUniGo} />
            <Route path="/case-study/virgin-lots" Component={CaseStudyVirginLots} />
            <Route path="/case-study/amstani-co" Component={CaseStudyAmstaniCo} />
            <Route path="/case-study/shark-ecommerce-solutions" Component={CaseStudySharkEcommerce} />
          </Routes>
        </div>
        <Footer className="h-16" />
      </div>
    </>
  );
}

export default App;
