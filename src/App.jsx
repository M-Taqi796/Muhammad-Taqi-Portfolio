import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import "./App.css";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
          </Routes>
        </div>
        <Footer className="h-16" />
      </div>
    </>
  );
}

export default App;
