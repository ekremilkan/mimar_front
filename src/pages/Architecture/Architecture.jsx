import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import banner from "../../assets/img/bgmain.jpg";

const ArchitecturePage = () => {
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
            className="w-full h-64 md:h-80 object-cover" // Reduced height with responsive sizing
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Toprak Mimarlık
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Yaratıcı Tasarım, Sürdürülebilir Çözümler
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
              Toprak Mimarlık olarak 20 yıllık tecrübemizle, mimari tasarım ve
              uygulama alanında yenilikçi çözümler sunuyoruz. Projelerimizde
              insan odaklı, çevre dostu ve sürdürülebilir bir yaklaşım
              benimseyerek, her mekanın potansiyelini en üst düzeye çıkarmayı
              hedefliyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Konut projelerinden ticari yapılara, kentsel dönüşüm projelerinden
              kültürel mekanlara kadar geniş bir yelpazede hizmet veren
              ekibimiz, her projeye özgün bir bakış açısıyla yaklaşıyor. Modern
              mimari trendleri takip ederken, kültürel ve yerel değerleri
              korumaya özen gösteriyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Tasarım sürecinde teknolojinin tüm imkanlarını kullanarak, 3D
              modelleme, BIM (Building Information Modeling) ve sanal gerçeklik
              uygulamalarıyla müşterilerimize projelerini somut bir şekilde
              deneyimleme fırsatı sunuyoruz. Konsept geliştirmeden uygulama
              projelerine, iç mimari tasarımdan peyzaj düzenlemelerine kadar tüm
              mimari hizmetleri tek çatı altında birleştiriyoruz.
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
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mimari Tasarım</h3>
              <p className="text-gray-600">
                Konsept tasarımdan uygulama projelerine kadar, kullanıcı
                ihtiyaçlarını ve mekanın bağlamını gözeten özgün mimari çözümler
                geliştiriyoruz.
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">İç Mimari Tasarım</h3>
              <p className="text-gray-600">
                Mekanların işlevselliğini ve estetiğini bir araya getiren,
                kullanıcı deneyimini ön planda tutan iç mimari tasarım çözümleri
                sunuyoruz.
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
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sürdürülebilir Mimari</h3>
              <p className="text-gray-600">
                Enerji verimliliği, yenilenebilir malzemeler ve çevre dostu
                yapım teknikleriyle doğaya saygılı, sürdürülebilir yapılar
                tasarlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ArchitecturePage;
