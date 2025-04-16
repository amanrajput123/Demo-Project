// src/components/HeroSection.jsx
const HeroSection = () => {
    return (
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
    );
  };
  
  export default HeroSection;
  