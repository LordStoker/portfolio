
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


export default function App() {
  return (
    <>      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>     
        <Footer />   
      </Router>


    </>
  );
}


