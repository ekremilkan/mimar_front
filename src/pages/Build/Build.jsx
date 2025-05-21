import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import banner from "../../assets/img/bgmain.jpg";

const BuildPage = () => {
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

      {/* Banner Header Section - Reduced Height */}
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
                Güçlü Temeller, Sağlam Yapılar
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
              Toprak Mimarlık olarak, sektördeki 25 yıllık tecrübemizle
              Türkiye'nin dört bir yanında modern, dayanıklı ve estetik yapılar
              inşa ediyoruz. Konut projelerinden ticari yapılara, altyapı
              çalışmalarından endüstriyel tesislere kadar geniş bir yelpazede
              hizmet sunuyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              En son mühendislik teknolojilerini kullanarak, depreme dayanıklı,
              enerji verimli ve çevre dostu binalar tasarlıyor ve inşa ediyoruz.
              Kaliteden ödün vermeden, zamanında teslim ilkesiyle çalışarak
              müşterilerimizin güvenini kazanıyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Toprak Mimarlık olarak, her projemizde sürdürülebilirlik,
              dayanıklılık, estetik ve fonksiyonellik ilkelerini harmanlıyoruz.
              Uzman mühendis ve mimar kadromuzla, projenin ilk aşamasından
              teslim aşamasına kadar titizlikle çalışıyor, müşterilerimizin
              beklentilerinin ötesinde çözümler sunuyoruz.
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
                  <rect x="2" y="6" width="20" height="14" rx="2"></rect>
                  <path d="M12 16v4"></path>
                  <path d="M2 10h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Konut Projeleri</h3>
              <p className="text-gray-600">
                Modern mimariye sahip, depreme dayanıklı ve enerji verimli konut
                projeleri inşa ediyoruz. Dairelerden villalara kadar her
                ihtiyaca uygun çözümler sunuyoruz.
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
                  <path d="M2 6H4V18H2zM10 6H8V18H10z"></path>
                  <path d="M20 6H22V18H20zM14 6H16V18H14z"></path>
                  <path d="M4 10H20"></path>
                  <path d="M4 14H20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Ticari ve Endüstriyel Yapılar
              </h3>
              <p className="text-gray-600">
                Ofis binaları, alışveriş merkezleri, fabrikalar ve depo
                tesisleri gibi ticari ve endüstriyel yapılar inşa ediyor, modern
                iş dünyasının ihtiyaçlarını karşılıyoruz.
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
                  <path d="M3 6l9 4 9-4-9-4-9 4z"></path>
                  <path d="M21 6v8.5a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 14.5V6"></path>
                  <path d="M3 14l9 4 9-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Altyapı Projeleri</h3>
              <p className="text-gray-600">
                Köprüler, yollar, barajlar ve tüneller gibi altyapı projelerinde
                teknik uzmanlığımızla, toplumun yaşam kalitesini artıracak
                dayanıklı çözümler üretiyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BuildPage;
