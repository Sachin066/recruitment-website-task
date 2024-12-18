import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ApplicationForm from "./pages/ApplicationForm";

const App = () => {
  return (
    <Router>
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/apply" className="hover:underline">
              Apply
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
