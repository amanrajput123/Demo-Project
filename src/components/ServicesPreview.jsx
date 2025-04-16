// src/components/ServicesPreview.jsx
const ServicesPreview = () => {
    return (
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Chemical Analysis",
                desc: "Accurate and fast testing for a wide range of chemical compounds."
              },
              {
                title: "Pharmaceutical Testing",
                desc: "Comprehensive services for drug quality, potency, and safety."
              },
              {
                title: "Environmental Monitoring",
                desc: "Precise testing of water, air, and soil samples to ensure safety."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                <h4 className="text-xl font-semibold mb-4 text-blue-600">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesPreview;
  