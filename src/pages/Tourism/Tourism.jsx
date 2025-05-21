import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import banner from "../../assets/img/bgmain.jpg";

const TourismInvestmentPage = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
          contentObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <>
      <Header />

      {/* Banner Header Section */}
      <div
        ref={headerRef}
        className={`w-full transition-all duration-1000 ${
          isHeaderVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <div className="relative">
          <img
            src={banner}
            alt="Toprak Mimarlık Banner"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Toprak Mimarlık
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Estetik, Fonksiyonellik ve Sürdürülebilirlikte Öncü Yaklaşımlar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 bg-white">
        <div
          className={`container mx-auto px-4 max-w-4xl transition-all duration-1000 delay-300 ${
            isContentVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="space-y-8 text-center">
            <p className="text-gray-700 leading-relaxed">
              Toprak Mimarlık olarak 15 yıllık sektörel deneyimimizle, mimari
              tasarım ve yapı projeleri alanında yaratıcı ve fonksiyonel
              çözümler sunuyoruz. Her projemizde estetik anlayışı,
              sürdürülebilirliği ve kullanıcı ihtiyaçlarını ön planda tutarak,
              mekanları yaşam alanına dönüştürüyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Konut projelerinden ticari yapılara, iç mimariden peyzaj
              tasarımına kadar geniş bir yelpazede hizmet veren ekibimiz, her
              projeye özgün bir vizyonla yaklaşıyor. Global tasarım trendlerini
              takip ederken, yerel dokuyu ve kültürel değerleri korumaya özen
              gösteriyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Proje süreçlerinde kapsamlı analizler, fizibilite çalışmaları ve
              mimari modellemelerle yatırımcılara değer katan stratejiler
              sunuyoruz. Konsept geliştirmeden uygulama projelerine, ruhsat
              süreçlerinden şantiye takibine kadar tüm hizmetleri entegre bir
              şekilde sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mimari Danışmanlık</h3>
              <p className="text-gray-600">
                Kapsamlı analizler, yer analizleri ve tasarım geliştirme
                süreçleriyle projelerinizi en verimli ve estetik şekilde
                planlamanıza yardımcı oluyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Proje Uygulama ve Takibi
              </h3>
              <p className="text-gray-600">
                Yapı ruhsatı, uygulama projeleri ve şantiye süreçlerini
                titizlikle yöneterek, projelerinizin zamanında ve standartlara
                uygun şekilde tamamlanmasını sağlıyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sürdürülebilir Tasarım</h3>
              <p className="text-gray-600">
                Enerji verimliliği, doğal malzeme kullanımı ve çevre dostu
                çözümlerle, hem doğaya hem kullanıcıya saygılı sürdürülebilir
                projeler üretiyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TourismInvestmentPage;
