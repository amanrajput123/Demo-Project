import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./tailwind.css";
// import navbar from './components/navbar/Navbar.jsx';
import Navbar from "./components/navbar/Navbar";


// src/App.jsx
function App() {
  return (
    <>
      <Navbar/> 
      <div className="font-sans text-gray-800 bg-gray-50">
  

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">High-Quality Analytical Services</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We specialize in chemical, pharmaceutical, and environmental testing with precision, quality, and reliability.
          </p>
          <a href="#services" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-4 text-blue-600">Chemical Analysis</h4>
              <p className="text-gray-600">Accurate and fast testing for a wide range of chemical compounds.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-4 text-blue-600">Pharmaceutical Testing</h4>
              <p className="text-gray-600">Comprehensive services for drug quality, potency, and safety.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-4 text-blue-600">Environmental Monitoring</h4>
              <p className="text-gray-600">Precise testing of water, air, and soil samples to ensure safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-center py-6 mt-8">
        <p className="text-white text-lg">&copy; {new Date().getFullYear()} Aman Rajput. All rights reserved.</p>
      </footer>
    </div> 
    </>
  );
}

export default App;


