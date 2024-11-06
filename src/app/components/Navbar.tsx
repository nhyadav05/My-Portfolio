"use client";

import React from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="fixed top-8 transform md:w-3/5 w-5/6 py-4 px-8 flex justify-center items-center rounded-full z-50 shadow-inner shadow-blue-600 bg-gradient-to-t from-purple-300 to-white">
        <div className="flex flex-1 space-x-1 justify-around items-center md:text-lg text-sm gap-2">
          <div>
            <Link to="home" smooth={true} duration={800}>
              <div className="text-black hover:text-blue-700 cursor-pointer">
                Home
              </div>
            </Link>
          </div>

          <div>
            <Link to="about" smooth={true} duration={800}>
              <div className="text-black hover:text-blue-700 cursor-pointer">
                About
              </div>
            </Link>
          </div>

          <div>
            <Link to="skills" smooth={true} duration={800}>
              <div className="text-black hover:text-blue-700 cursor-pointer">
                Skills
              </div>
            </Link>
          </div>

          <div>
            <Link to="projects" smooth={true} duration={800}>
              <div className="text-black hover:text-blue-700 cursor-pointer">
                Projects
              </div>
            </Link>
          </div>

          <div>
            <Link to="contact" smooth={true} duration={800}>
              <div className="text-black hover:text-blue-700 cursor-pointer">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
