import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom"; // React Router için

const Hero = () => {
  // React Router navigasyon hook'u
  const navigate = useNavigate();

  // Yönlendirme fonksiyonu
  const handleNavigate = (path) => {
    navigate(path);
  };

  // Service categories data - her birine URL ve videoSrc eklenmiş hali
  const serviceCategories = [
    {
      title: "Mimarlık",
      icon: (
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
      ),
      heading: "Hayalini Tutkuyla İnşa Et",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.",
      videoSrc: "../videos/architecture.mp4",
      url: "/mimarlik", // Mimarlık sayfası URL'i
    },
    {
      title: "İnşaat",
      icon: (
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
      ),
      heading: "Kaliteli İnşaat Hizmetleri",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.",
      videoSrc: "../videos/construction.mp4",
      url: "/insaat", // İnşaat sayfası URL'i
    },
    {
      title: "Restorasyon - Tadilat",
      icon: (
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
      ),
      heading: "Uzman Restorasyon Hizmetleri",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.",
      videoSrc: "../videos/renovation.mp4",
      url: "/restorasyon-tadilat", // Restorasyon sayfası URL'i
    },
    {
      title: "Gayrimenkul",
      icon: (
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
      ),
      heading: "Premium Gayrimenkul Çözümleri",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.",
      videoSrc: "../videos/realestate.mp4",
      url: "/gayrimenkul", // Gayrimenkul sayfası URL'i
    },
    {
      title: "Turizm Yatırım - İşletme",
      icon: (
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
      ),
      heading: "Turizm Yatırım Fırsatları",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.",
      videoSrc: "../videos/tourism.mp4",
      url: "/turizm-yatirim", // Turizm sayfası URL'i
    },
  ];

  return (
    <div className="relative w-full h-screen">
      <div className="h-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 7000, // Her videonun süresine göre bu değeri ayarlayabilirsiniz
            disableOnInteraction: false,
          }}
          className="h-full"
          //Swiper'ın her slayt değişiminde videoyu baştan başlatması için
          onSlideChange={(swiper) => {
            const currentVideo =
              swiper.slides[swiper.activeIndex].querySelector("video");
            if (currentVideo) {
              currentVideo.currentTime = 0;
              currentVideo.play();
            }
          }}
        >
          {serviceCategories.map((service, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="relative w-full h-full">
                {/* Background Video */}
                <div className="absolute inset-0 w-full h-full">
                  <video
                    src={service.videoSrc} // Dinamik video kaynağı
                    className="w-full h-full object-cover"
                    autoPlay // Otomatik başlat
                    muted // Ses kapalı (tarayıcılar genelde sesli otomatik oynatmaya izin vermez)
                    loop // Döngüye al
                    playsInline // iOS'ta tam ekran olmadan oynatma
                    // poster={foto} // Video yüklenene kadar gösterilecek bir resim (isteğe bağlı)
                  />
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-6 md:px-12 z-10">
                    <div className="max-w-3xl">
                      {/* Service Category and Icon */}
                      <div className="flex items-center text-white mb-6">
                        <div className="w-12 h-12 mr-4 flex items-center justify-center">
                          {service.icon}
                        </div>
                        <span className="text-2xl font-light">
                          {service.title}
                        </span>
                      </div>

                      {/* Main Heading */}
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {service.heading}
                      </h1>

                      {/* Description */}
                      <p className="text-lg text-white/90 mb-8 max-w-xl">
                        {service.description}
                      </p>

                      {/* İNCELE Butonu - Şimdi yönlendirme işlevi eklenmiş */}
                      <button
                        onClick={() => handleNavigate(service.url)}
                        className="px-8 py-3 bg-transparent hover:bg-white/20 text-white border-2 border-white font-medium rounded-full transition-colors duration-300 uppercase tracking-wide"
                      >
                        İNCELE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
