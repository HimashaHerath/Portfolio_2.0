import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resumeUrl = "https://drive.google.com/u/0/uc?id=1rdvkd1eAdlxaymjYVP5aIq7krHQXCTN8&export=download"; // Replace with the URL of your resume

  return (
    <nav className="relative z-10 flex items-center justify-between p-6">
      <div className="text-white text-3xl font-bold">
        <span>My</span>
        <span className="text-purple-200">Portfolio</span>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <i className={`fas fa-${isMenuOpen ? "times" : "bars"}`} />
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 top-full md:static md:flex md:space-x-4 mt-2 md:mt-0 bg-blue-500 md:bg-transparent p-4 md:p-0 text-white w-full md:w-auto`}
      >
        <li>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </li>
        <li>
          <a
            href={resumeUrl}
            download
            className="flex items-center space-x-1 bg-red-500 border border-black px-2 py-1 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
