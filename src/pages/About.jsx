import React from "react";

const About = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Founder"
          className="mx-auto rounded-full w-40 h-40"
        />
        <h2 className="text-2xl font-bold mt-4 text-gray-800">Sachin Shravankumar Saroj</h2>
        <p className="mt-2 text-gray-600">
          Sachin is the visionary behind SK Solutions Pvt Ltd. With over a decade of
          experience in HR and consulting, he is dedicated to empowering
          businesses.
        </p>
      </div>
    </div>
  );
};

export default About;
