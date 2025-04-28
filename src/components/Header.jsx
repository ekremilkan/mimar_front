"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white">
      <div className="mx-auto px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-14 cursor-pointer"
            onClick={() => handleNavigation("/")}
          />
        </div>

        {/* Hamburger Menü (Mobil) */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-20 left-0 z-50 w-full bg-black/90 backdrop-blur-sm lg:backdrop-blur-none lg:static lg:flex lg:items-center lg:justify-end lg:gap-0 lg:bg-transparent`}
        >
          <button
            onClick={() => handleNavigation("/")}
            className="block text-white py-2 px-4 hover:text-yellow-300 font-light"
          >
            Ana Sayfa
          </button>

          <div className="hidden lg:block h-5 w-px bg-white/30 mx-2"></div>

          <button
            onClick={() => handleNavigation("/hakkimizda")}
            className="block text-white py-2 px-4 hover:text-yellow-300 font-light relative group"
          >
            Hakkımızda
          </button>

          <div className="hidden lg:block h-5 w-px bg-white/30 mx-2"></div>

          <button
            onClick={() => handleNavigation("/product")}
            className="block text-white py-2 px-4 hover:text-yellow-300 font-light relative group"
          >
            Projeler
          </button>

          <div className="hidden lg:block h-5 w-px bg-white/30 mx-2"></div>

          <button
            onClick={() => handleNavigation("/spare")}
            className="block text-white py-2 px-4 hover:text-yellow-300 font-light"
          >
            Blog
          </button>

          <div className="hidden lg:block h-5 w-px bg-white/30 mx-2"></div>

          <button
            onClick={() => handleNavigation("/iletisim")}
            className="block text-white py-2 px-4 hover:text-yellow-300 font-light"
          >
            İletişim
          </button>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center gap-4 ml-4">
            <a href="#" className="text-white hover:text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
