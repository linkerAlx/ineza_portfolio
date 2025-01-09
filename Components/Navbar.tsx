"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Socials } from '@/Constants';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 z-[40] w-full h-[60px] bg-white flex justify-between items-center px-5 md:px-20 shadow-md">
      {/* Left: Logo and Name */}
      <div className="flex items-center gap-2">
        <Image
          src="https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg"
          alt="logo"
          width={40}
          height={40}
          className="object-cover rounded-full w-10 h-10"
        />
        <h1 className="font-semibold bg-gradient-to-br from-gray-300 to-[#5F8184] bg-clip-text text-transparent">
          linker_arlene
        </h1>
      </div>

      {/* Right: Links or Menu Icon */}
      <div className="flex items-center">
        {/* Links for Large Screens */}
        <div className="hidden md:flex gap-5">
          {Socials.map((social, index) => (
            <Link
              key={index}
              href={social.path}
              className="font-bold hover:text-[#5F8184] transition-transform transform hover:scale-105"
            >
              {social.name}
            </Link>
          ))}
        </div>

        {/* Menu Icon for Small Screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 bg-white w-full shadow-md p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {Socials.map((social, index) => (
              <li key={index}>
                <Link
                  href={social.path}
                  className="font-bold hover:text-[#5F8184] transition-transform transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
