import React from "react";

const Services = () => {
  const services = ["Recruitment", "Staffing", "HR Consulting", "Training"];

  return (
    <div className="min-h-screen bg-white py-10">
      <h2 className="text-3xl font-bold text-center text-blue-700">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-100 p-6 rounded-lg text-center shadow-md hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-800">{service}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
