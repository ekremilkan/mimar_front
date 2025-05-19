import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Otomatik oynatma modülünü import et

// Swiper stilleri
import "swiper/css";
// Navigasyon CSS'ine artık ihtiyacımız yok: import "swiper/css/navigation";

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionBottom = sectionRect.bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionBottom > 0) {
          setIsVisible(true);
          const scrolled =
            window.scrollY - sectionRef.current.offsetTop + windowHeight;
          setScrollPosition(scrolled * 0.15);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const newServices = [
    {
      id: 1,
      title: "Mimarlık",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>{" "}
        </svg>
      ),
      description:
        "Yenilikçi ve sürdürülebilir mimari çözümlerle projelerinizi hayata geçiriyoruz.",
    },
    {
      id: 2,
      title: "İnşaat",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>{" "}
        </svg>
      ),
      description:
        "Kaliteli malzeme ve uzman işçilikle, güvenilir ve dayanıklı yapılar inşa ediyoruz.",
    },
    {
      id: 3,
      title: "Restorasyon-Tadilat",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
          <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>{" "}
        </svg>
      ),
      description:
        "Mevcut yapılarınızı modern ihtiyaçlara uygun şekilde yeniliyor ve değerlerini artırıyoruz.",
    },
    {
      id: 4,
      title: "Gayrimenkul",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          <circle cx="12" cy="12" r="3"></circle>{" "}
        </svg>
      ),
      description:
        "Gayrimenkul alım, satım ve kiralama süreçlerinizde profesyonel danışmanlık hizmetleri sunuyoruz.",
    },
    {
      id: 5,
      title: "Turizm Yatırım-İşletme",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>{" "}
        </svg>
      ),
      description:
        "Turizm sektöründe karlı yatırım fırsatları ve etkili işletme çözümleri sağlıyoruz.",
    },
  ];

  return (
    <>
      {/* Navigasyon okları için olan <style> etiketi kaldırıldı */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{
          minHeight: "120vh",
          marginTop: "-2rem",
          paddingTop: "8rem",
          paddingBottom: "6rem",
        }}
      >
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollPosition}px)`,
            opacity: 0.8,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(0, 0, 0, 0.7) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.7) 75%, transparent 75%, transparent)",
              backgroundSize: "20px 20px",
              opacity: 0.3,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-16 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Hizmetlerimiz
          </h2>

          <div className="relative">
            {" "}
            {/* Bu sarmalayıcı div kalabilir, zararı yok */}
            <Swiper
              modules={[Autoplay]} // Sadece Autoplay modülünü kullanıyoruz
              spaceBetween={24}
              slidesPerView={1}
              loop={true} // Sonsuz döngüyü etkinleştir
              autoplay={{
                delay: 2500, // Slaytlar arası geçiş süresi (milisaniye)
                disableOnInteraction: false, // Kullanıcı etkileşiminden sonra otomatik oynatmayı durdurma (false devam etmesini sağlar)
                pauseOnMouseEnter: true, // Fare ile üzerine gelince duraklat
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="pb-8"
              // Navigasyon için olan style prop'ları kaldırıldı
            >
              {newServices.map((service, index) => (
                <SwiperSlide key={service.id} style={{ height: "auto" }}>
                  <div
                    className={`bg-white rounded-lg p-6 h-full flex flex-col transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${150 * index}ms` }} // Bu animasyon gecikmesi loop ile nasıl çalışır test etmek gerekebilir.
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 text-black">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-4 text-black">
                        {service.title}
                      </h3>
                      <div className="flex items-center w-48 mb-4">
                        <div className="h-px bg-gray-300 flex-1"></div>
                        <div className="mx-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-400"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                        <div className="h-px bg-gray-300 flex-1"></div>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
