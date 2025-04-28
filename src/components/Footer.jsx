import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import logo from "../assets/img/logo.png";

const Footer = () => {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    // Handle social media clicks
    console.log(`Clicked ${platform}`);
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 35%, #ffffff 0%, transparent 50%), radial-gradient(circle at 75% 44%, #ffffff 0%, transparent 60%)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center">
              <FaHome className="text-white text-4xl mr-2" />
              <span className="text-2xl font-bold">Toprak Mimarlık</span>
            </div>
            <p className="text-gray-400 text-sm">
              Toprak Mimarlık olarak, her projeye özgünlük, yaratıcılık ve
              mükemmeliyetçilik anlayışımızla yaklaşıyoruz. Misyonumuz,
              hayalinizi hayata geçirirken size en iyi hizmeti en etkin biçimde
              sunmaktır.
            </p>
            <p className="text-gray-500 text-xs">
              Copyright ©{year} Toprak Mimarlık Tüm Hakları Saklıdır.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Bize Ulaşın</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaLocationDot className="text-gray-400 mr-3 mt-1 flex-shrink-0 text-lg" />
                <span className="text-gray-300">
                  Aziziye Mah. 350. Sok. No:9A, 54500 Karasu/Sakarya
                </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-gray-400 mr-3 flex-shrink-0 text-lg" />
                <span className="text-gray-300">+90(532) 709 3754</span>
              </div>
              <div className="flex items-center">
                <MdEmail className="text-gray-400 mr-3 flex-shrink-0 text-lg" />
                <span className="text-gray-300">
                  iletisim@toprakmimarlik.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Bizi Takip Edin</h3>
            <div className="space-y-4">
              <a
                href="#"
                onClick={(e) => handleSocialClick(e, "instagram")}
                className="flex items-center transition-colors cursor-pointer group"
              >
                <FaInstagram className="text-gray-400 mr-3 text-lg group-hover:text-pink-500 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">
                  Instagram
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => handleSocialClick(e, "twitter")}
                className="flex items-center transition-colors cursor-pointer group"
              >
                <FaXTwitter className="text-gray-400 mr-3 text-lg group-hover:text-gray-100 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">
                  Twitter
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => handleSocialClick(e, "whatsapp")}
                className="flex items-center transition-colors cursor-pointer group"
              >
                <FaWhatsapp className="text-gray-400 mr-3 text-lg group-hover:text-green-500 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">
                  WhatsApp
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => handleSocialClick(e, "linkedin")}
                className="flex items-center transition-colors cursor-pointer group"
              >
                <FaLinkedin className="text-gray-400 mr-3 text-lg group-hover:text-blue-600 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
