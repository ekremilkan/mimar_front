import { useState, useEffect } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience-section");
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

  return (
    <section id="experience-section" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left side - Architectural Illustration */}
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="Modern architectural building sketch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Mimari Maket'te Tecrübeliyiz
            </h2>

            <p className="text-gray-700 leading-relaxed">
              20 yıllık tecrübe, sayısız proje ve istisnasız memnun müşteri
              portföyümüzü yeni bir yapılanmayla Toprak Mimarlık'de bir araya
              getirdik.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Her bir projede, özenle seçilmiş malzemelerle özgün ve kaliteli
              maketler üretiyoruz. Maket yapım sürecimizde, en son teknolojik
              imkanları kullanarak tasarımlarınızı hayata geçirirken kaliteyi ön
              planda tutuyoruz. Hedefimiz, Toprak Mimarlık'ı maket sanatının
              zarafet ve özgünlükle buluştuğu bir hizmet noktasına dönüştürmek.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Projelerimizde estetik detaylara verdiğimiz önemle,
              müşterilerimize benzersiz ve etkileyici mimari maketler sunuyoruz.
              Toprak Mimarlık'ın ana prensibi, her bir maketin özel bir hikaye
              taşıması ve müşterilerimizin hayallerini gerçeğe dönüştürmek için
              sanatsal bir dokunuş sunmaktır.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Uzman ekibimiz, tasarımın detaylarını incelikle işleyip, bilgi,
              tutku ve ustalıklarını her bir projeye yansıtarak, kaliteli ve
              özgün hizmet sunmak için buradalar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
