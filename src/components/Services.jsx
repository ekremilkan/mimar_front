import { useState, useEffect, useRef } from "react";

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

        // Check if section is visible
        if (sectionTop < windowHeight && sectionBottom > 0) {
          setIsVisible(true);
          // Calculate how far we've scrolled into the section
          const scrolled =
            window.scrollY - sectionRef.current.offsetTop + windowHeight;
          setScrollPosition(scrolled * 0.15); // Adjust the multiplier to control parallax speed
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Mimari Maket",
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
          <path d="M3 21V10l8-6 8 6v11" />
          <path d="M5 10h14" />
          <path d="M13 14h2v2h-2z" />
          <path d="M13 14v-4h2v4" />
          <path d="M9 14h2v2H9z" />
          <path d="M9 14v-4h2v4" />
        </svg>
      ),
      description:
        "Her ölçek ve ebatta mimari ve endüstriyel maketleriniz kaliteli bir işçilikle üretilip zamanında teslim edilir.",
    },
    {
      id: 2,
      title: "Prototip Üretimi",
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
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9" />
          <path d="M12 2c2.5 0 4.5 4 4.5 9s-2 9-4.5 9" />
          <path d="M12 2C9.5 2 7.5 6 7.5 11s2 9 4.5 9" />
        </svg>
      ),
      description:
        "Tasarımlarınızı üretmeden önce son hallerini görmenizi sağlayan farklı ölçek ve ebatlarda her türlü prototip üretimi gerçekleştirilir.",
    },
    {
      id: 3,
      title: "Çizim ve Tasarım",
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
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
          <path d="M12 17v-6" />
          <path d="M9 14l3 3 3-3" />
        </svg>
      ),
      description:
        "Resmi imza ve onay gerektirmeyen projeleriniz, hayalinizdeki tasarımlarınız ya da basit çizim ve tasarım işleriniz özenli bir şekilde yapılır.",
    },
    {
      id: 4,
      title: "CNC Lazer Kesim",
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
          <path d="M12 4v16" />
          <path d="M4 12h16" />
          <path d="M12 20v-2" />
          <path d="M12 6V4" />
          <path d="M6 12H4" />
          <path d="M20 12h-2" />
          <path d="m14 14-2-2-2 2" />
          <path d="m14 10-2 2-2-2" />
        </svg>
      ),
      description:
        "Plexi Glass, MDF, Karton, Mukavva, Kontraplak vb. gibi malzemelerin toplu kesimleri yapılır ve zamanında teslim edilir.",
    },
    {
      id: 5,
      title: "CNC Router Kesim",
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
          <path d="M3 7h5c2 0 4 1 4 3v7c0 2 2 3 4 3h5" />
          <path d="M21 17h-5c-2 0-4-1-4-3v-7c0-2-2-3-4-3H3" />
          <path d="M7 21v-2" />
          <path d="M17 21v-2" />
          <path d="M7 3v2" />
          <path d="M17 3v2" />
        </svg>
      ),
      description: "CNC Router kesimleri ve 3D modelleme yapılır.",
    },
    {
      id: 6,
      title: "3D Baskı",
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
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l.5-1 .5 1h6.28" />
        </svg>
      ),
      description:
        "Farklı seçenek ve ebatlarda 3D baskı (3D printer) işleri yapılır.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        minHeight: "120vh",
        marginTop: "-2rem", // Negative margin to extend the section upward
        paddingTop: "8rem", // Extra padding at the top to ensure content doesn't overlap
        paddingBottom: "6rem",
      }}
    >
      {/* Parallax background */}
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
        {/* Overlay pattern */}
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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg p-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
