import { Routes, Route } from "react-router-dom";
import "./tailwind.css";
import Navbar from "./components/navbar/Navbar";
// import HeroSection from "./components/HeroSection";
// import ServicesPreview from "./components/ServicesPreview";
// import Footer from "./components/Footer";
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<About />} /> */}
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>

     
    </>
  );
}

export default App;
