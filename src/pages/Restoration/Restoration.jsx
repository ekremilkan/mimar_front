import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import banner from "../../assets/img/bgmain.jpg";

const RestorationPage = () => {
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
            alt="Toprak Mimarlık Restorasyon Tadilat Banner"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Toprak Mimarlık Restorasyon & Tadilat
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Tarihi Değerleri Koruyoruz, Yaşam Alanlarınızı Yeniliyoruz
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
              Toprak Mimarlık olarak, tarihi ve kültürel değere sahip yapıların
              aslına uygun şekilde restorasyonu ve modern yaşam alanlarının
              yenilenmesi konusunda uzmanlaşmış bir ekibiz. Her yapının kendine
              özgü karakterini korurken, çağdaş yaşamın gereksinimlerini
              karşılayan projeler geliştiriyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Tarihi yapıların restorasyonunda geleneksel yapı teknikleri ile
              modern mühendislik çözümlerini harmanlayarak, kültürel mirasımızı
              gelecek nesillere aktarıyoruz. Konutlardan ticari alanlara, tarihi
              binalardan modern yapılara kadar geniş bir yelpazede tadilat ve
              restorasyon hizmetleri sunuyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Toprak Mimarlık olarak her projeye bilimsel bir yaklaşımla
              başlıyor, yapının tarihsel ve mimari özellikleri hakkında detaylı
              araştırmalar yapıyoruz. Uzman mimarlar, restoratörler ve sanat
              tarihçilerinden oluşan ekibimizle, yapıların orijinal değerlerini
              koruyarak yeniden hayat bulmasını sağlıyoruz.
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
                  <path d="M3 3h18v18H3zM3 15h18"></path>
                  <path d="M12 3v18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tarihi Restorasyon</h3>
              <p className="text-gray-600">
                Tarihi ve kültürel değere sahip yapıların aslına uygun şekilde
                restorasyonunu gerçekleştiriyor, mimari mirasımızı koruyoruz.
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
                  <path d="M3 3v18h18"></path>
                  <path d="M18 9l-3-3-3 3-3-3-3 3"></path>
                  <path d="M3 9h18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Tadilat</h3>
              <p className="text-gray-600">
                Konut ve işyeri tadilatlarında çağdaş tasarım anlayışı ile
                mekanlarınızı yeniliyor, işlevsellik ve estetiği bir araya
                getiriyoruz.
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
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mimari Danışmanlık</h3>
              <p className="text-gray-600">
                Yapınızın durumuna özel analiz ve raporlama hizmetleri sunuyor,
                restorasyon ve tadilat süreçlerinde uzman mimari danışmanlık
                sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RestorationPage;
