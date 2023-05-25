import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resumeUrl = "https://drive.google.com/u/0/uc?id=1rdvkd1eAdlxaymjYVP5aIq7krHQXCTN8&export=download"; // Replace with the URL of your resume

  return (
    <nav className="fixed w-full z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-md">
      <div className="text-slate-200 text-3xl font-bold">
        <span>My</span>
        <span className="text-indigo-300">Portfolio</span>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-slate-200 focus:outline-none"
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 top-full md:static md:flex md:items-center md:space-x-4 mt-2 md:mt-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 md:p-0 text-slate-200 w-full md:w-auto`}
      >
        <li>
          <ScrollLink
            activeClass="text-indigo-300 font-semibold"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeClass="text-indigo-300 font-semibold"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer"
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeClass="text-indigo-300 font-semibold"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer"
            >
            Contact
            </ScrollLink>
            </li>
            <li>
            <a
            href={resumeUrl}
            download
            className="flex items-center space-x-1 bg-indigo-500 px-4 py-2 rounded-md text-white font-bold"
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