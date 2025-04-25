import { useState, useEffect } from "react";

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("process-steps");
      if (section) {
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: "Teklif ve Anlaşma",
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
          <path d="M9 15h6" />
          <path d="M9 18h6" />
          <path d="m16 13-3.5 2-3.5-2" />
          <path d="M16 8.5 12.5 11 9 8.5" />
        </svg>
      ),
      description:
        "Projenin mevcut halinin (Mimari Çizimler, Vaziyet Planı, 3D Modeller, Renderlar vb.) tarafımıza ulaştırılmasının ardından uygun ölçek belirlenip bir iş takvimi oluşturulur ve bir fiyat teklifi hazırlanır.",
    },
    {
      id: 2,
      title: "Proje Analizi ve Çizim",
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
          <path d="M3 3v18h18" />
          <path d="M7 17v-5h5V7h5v10" />
          <path d="M18 17H7" />
          <path d="M18 12h-5" />
          <path d="M7 12h5" />
          <path d="M7 7h5" />
        </svg>
      ),
      description:
        "Teklifimizin onaylanmasıyla; eldeki veriler doğrultusunda detaylı bir proje analizi gerçekleştirilir. Ardından, mimari tasarım ve müşteriden gelen talepler doğrultusunda makette kullanılacak parçaların çizim ve tasarımları gerçekleştirilir.",
    },
    {
      id: 3,
      title: "Materyallerin Üretimi",
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
          <path d="m2 17 10-10 10 10" />
          <path d="m2 12 10-10 10 10" />
          <path d="m2 7 10-10 10 10" />
        </svg>
      ),
      description:
        "Çizim aşaması tamamlandıktan sonra Lazer CNC, CNC Router ve 3D Printer gibi hassas ekipmanlarda materyal üretimi gerçekleştirilir.",
    },
    {
      id: 4,
      title: "Montaj",
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
          <path d="M12 22v-5" />
          <path d="M9 8V2" />
          <path d="M15 8V2" />
          <path d="M18 8v4" />
          <path d="M6 8v4" />
          <path d="M12 12v5" />
          <rect x="2" y="8" width="20" height="4" rx="1" />
          <path d="M19 17h-6a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-1" />
          <path d="M5 17h6a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1" />
        </svg>
      ),
      description:
        "Her parçayı uyumlu bir şekilde birleştirmek için özel stratejiler geliştirilir ve projenizin tüm montaj sürecini kapsayan bir plan oluşturulur. Ardından, proje montajı gerçekleştirilir.",
    },
    {
      id: 5,
      title: "Teslimat",
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
          <path d="M3 17h1m16 0h1M5 17H3v4h18v-4h-2" />
          <path d="M15 17V6c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v11" />
          <path d="M19 17v-2c0-1.1-.9-2-2-2h-2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      description:
        "Üretimi tamamlanan projenizin teslimatı atölyemizden veya adrese teslim şeklinde yapılır.",
    },
  ];

  return (
    <section id="process-steps" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            5 Adımda Mimari Maket
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="mb-6 text-black">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-black">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
