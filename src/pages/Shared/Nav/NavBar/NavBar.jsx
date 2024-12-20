import React, { useState } from "react";
import { Link } from "react-router-dom";  // If you're using React Router
import { FaBars, FaTimes } from "react-icons/fa";  // You can install react-icons for the hamburger icon

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Brand</div>
        
        {/* Hamburger menu icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </div>

        {/* Nav Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex space-x-6 text-white font-medium`}
        >
          <Link to="/" className="hover:text-indigo-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-300">
            About
          </Link>
          <Link to="/services" className="hover:text-indigo-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-indigo-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
