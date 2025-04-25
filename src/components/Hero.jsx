import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import bgMain from "../assets/img/bgmain.jpg"; // Keep the import

// Import Swiper styles
import "swiper/css";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center">
      {/* Background Image as img element instead of CSS background */}
      <img
        src={bgMain}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Service Categories */}
          <div className="w-full md:w-1/2 space-y-8 mb-10 md:mb-0">
            <div className="flex items-center text-white group cursor-pointer">
              <div className="w-12 h-12 mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <span className="text-xl font-light group-hover:text-yellow-300 transition-colors">
                Mimarlık
              </span>
            </div>

            <div className="flex items-center text-white group cursor-pointer">
              <div className="w-12 h-12 mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="12" width="5" height="8"></rect>
                  <rect x="9" y="8" width="5" height="12"></rect>
                  <rect x="16" y="4" width="5" height="16"></rect>
                </svg>
              </div>
              <span className="text-xl font-light group-hover:text-yellow-300 transition-colors">
                İnşaat
              </span>
            </div>

            <div className="flex items-center text-white group cursor-pointer">
              <div className="w-12 h-12 mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span className="text-xl font-light group-hover:text-yellow-300 transition-colors">
                Restorasyon - Tadilat
              </span>
            </div>

            <div className="flex items-center text-white group cursor-pointer">
              <div className="w-12 h-12 mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <span className="text-xl font-light group-hover:text-yellow-300 transition-colors">
                Gayrimenkul
              </span>
            </div>

            <div className="flex items-center text-white group cursor-pointer">
              <div className="w-12 h-12 mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <span className="text-xl font-light group-hover:text-yellow-300 transition-colors">
                Turizm Yatırım - İşletme
              </span>
            </div>
          </div>

          {/* Right Side - Tagline Swiper */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full"
            >
              <SwiperSlide>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
                  Şehre şekil veriyoruz.
                </h2>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
                  Mimari vizyonunuzu gerçeğe dönüştürüyoruz.
                </h2>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
                  Geleceğin yapılarını tasarlıyoruz.
                </h2>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
                  Sürdürülebilir mimari çözümler sunuyoruz.
                </h2>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
