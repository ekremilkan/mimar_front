import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
// Import icons from react-icons
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

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
          {isMenuOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6" />
          )}
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
            onClick={() => handleNavigation("/projeler")}
            className="block text-white py-2 px-4 hover:text-yellow-300 font-light relative group"
          >
            Projeler
          </button>

          <div className="hidden lg:block h-5 w-px bg-white/30 mx-2"></div>

          <button
            onClick={() => handleNavigation("/blog")}
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
            {/* Instagram Icon */}
            <a
              href="#"
              className="text-white hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            {/* LinkedIn Icon */}
            <a
              href="#"
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            {/* Twitter/X Icon */}
            <a
              href="#"
              className="text-white hover:text-sky-500 transition-colors duration-300"
            >
              <FaXTwitter size={20} />
            </a>
            {/* WhatsApp Icon */}
            <a
              href="#"
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
