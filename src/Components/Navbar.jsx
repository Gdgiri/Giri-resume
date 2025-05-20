import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { Button } from "flowbite-react"; // Ensure Flowbite is installed
import { IoMdClose } from "react-icons/io";
import { CiImport, CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to track mobile menu visibility
  const location = useLocation(); // Get the current route

  // Set the active link based on the current location path
  const getActiveLink = () => {
    switch (location.pathname) {
      case "/about":
        return "about";
      case "/portfolio":
        return "portfolio";
      case "/gallery":
        return "gallery";
      case "/contact":
        return "contact";
      default:
        return "home";
    }
  };

  const [activeLink, setActiveLink] = useState(getActiveLink());

  useEffect(() => {
    setActiveLink(getActiveLink());
  }, [location]); // Update the active link whenever the route changes

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link state
    setMobileMenuOpen(false); // Close mobile menu on link click
  };

  const downloadResume = () => {
    // Trigger a download programmatically
    const link = document.createElement("a");
    link.href = "/Giri-Resume.pdf"; // Path to your PDF file
    link.download = "My_Resume.pdf"; // Filename for the downloaded file
    link.click();
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 sm:justify-center md:justify-between">
        {/* Left Side - Brand Name */}
        <div className="text-xl font-bold text-gray-800">
          <span
            className="text-2xl text-red-600"
            style={{
              fontFamily: "'Tangerine', cursive",
              fontSize: "40px",
              fontWeight: "800",
              fontStyle: "normal",
            }}
          >
            GD-
          </span>
          <span> Coder</span>
        </div>

        {/* Right Side - Toggle Button for Mobile View */}
        <div className="md:hidden">
          <Button
            color="failure"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
          >
            {isMobileMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
          </Button>
        </div>

        {/* Center - Navigation Links */}
        <div className={`hidden md:flex space-x-4`}>
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            className={`${
              activeLink === "home"
                ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                : "text-gray-700 hover:text-red-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleLinkClick("about")}
            className={`${
              activeLink === "about"
                ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                : "text-gray-700 hover:text-red-500"
            }`}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            onClick={() => handleLinkClick("portfolio")}
            className={`${
              activeLink === "portfolio"
                ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                : "text-gray-700 hover:text-red-500"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/gallery"
            onClick={() => handleLinkClick("gallery")}
            className={`${
              activeLink === "gallery"
                ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                : "text-gray-700 hover:text-red-500"
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => handleLinkClick("contact")}
            className={`${
              activeLink === "contact"
                ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                : "text-gray-700 hover:text-red-500"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-2 p-4">
              <Link
                to="/"
                onClick={() => handleLinkClick("home")}
                className={`${
                  activeLink === "home"
                    ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                    : "text-gray-700 hover:text-red-500"
                } text-center`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => handleLinkClick("about")}
                className={`${
                  activeLink === "about"
                    ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                    : "text-gray-700 hover:text-red-500"
                } text-center`}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                onClick={() => handleLinkClick("portfolio")}
                className={`${
                  activeLink === "portfolio"
                    ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                    : "text-gray-700 hover:text-red-500"
                } text-center`}
              >
                Portfolio
              </Link>
              <Link
                to="/gallery"
                onClick={() => handleLinkClick("gallery")}
                className={`${
                  activeLink === "gallery"
                    ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                    : "text-gray-700 hover:text-red-500"
                } text-center`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("contact")}
                className={`${
                  activeLink === "contact"
                    ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                    : "text-gray-700 hover:text-red-500"
                } text-center`}
              >
                Contact
              </Link>

              {/* Download CV Button in Mobile Menu */}
              <Button
                color="failure"
                onClick={downloadResume}
                className="flex items-center space-x-2"
              >
                <CiImport />
                <span>Download CV</span>
              </Button>
            </div>
          </div>
        )}

        {/* Right Side - Download CV Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            color="failure"
            onClick={downloadResume}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold">
              <CiImport />
            </span>
            <span>Download CV</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
