import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import { CiImport, CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Giri-Resume.pdf";
    link.download = "My_Resume.pdf";
    link.click();
  };

  // Optional: Highlight section based on scroll (intersection observer can be used for advanced behavior)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 sm:justify-center md:justify-between">
        {/* Brand Name */}
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

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <Button
            color="failure"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
          </Button>
        </div>

        {/* Desktop Nav Links */}
        <div className={`hidden md:flex space-x-4`}>
          {["home", "about", "portfolio", "gallery", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => handleLinkClick(item)}
              className={`${
                activeLink === item
                  ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                  : "text-gray-700 hover:text-red-500"
              } capitalize`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-2 p-4">
              {["home", "about", "portfolio", "gallery", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => handleLinkClick(item)}
                  className={`${
                    activeLink === item
                      ? "bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg shadow-lg"
                      : "text-gray-700 hover:text-red-500"
                  } text-center capitalize`}
                >
                  {item}
                </a>
              ))}
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

        {/* Desktop CV Button */}
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

export default Nav;
