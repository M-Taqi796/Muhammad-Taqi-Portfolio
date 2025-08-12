import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import NavBar from "./components/NavBar";
import "./App.css";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar className="h-16"/>
        <div className="flex-1">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        </div>
        <Footer className="h-16" />
      </div>
    </>
  );
}

export default App;
