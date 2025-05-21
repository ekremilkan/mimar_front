import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import banner from "../../assets/img/vipbanner.webp";

const EstatePage = () => {
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
            alt="Degger Gayrimenkul VIP Banner"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Degger Gayrimenkul
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Kalite ve Güvenin Adresi
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
              Tüm gayrimenkul yatırımlarımızda Türkiye'nin farklı şehirlerinde,
              uzun araştırmalar sonucu özen ve titizlikle seçilmiş en değerli
              konumda yaşam alanları üretiyoruz. Tabiatın içinde ve ona saygı
              ile üretilen yaşam alanlarında, en güncel teknik ve teknolojiler
              kullanılıyor, uzun yıllar sağlık ve mutlulukla yaşanacak evlere
              hayat veriyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Güven, saygınlık ve kaliteli hizmet anlayışımızdan taviz vermeden,
              proje yönetimi ve proje geliştirme alanlarında sektörün en değerli
              şirketi olma vizyonu ile çalışmalarımızı sürdürüyoruz.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Türkiye'nin birçok ilinde vizyon projeleri olan Degger Yapı
              Mimarlık çatısı altındaki Degger Gayrimenkul, tüm faaliyet ve
              projelerini toplumsal gelişime sürdürülebilir katkı sağlamak
              anlayışıyla gerçekleştiriyor. Degger Gayrimenkul, proje
              geliştirirken, 'toplum', 'tasarım', 'tabiat' ve 'teknoloji'
              başlıklarından oluşan 4T yaklaşımıyla hareket ediyor.
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Kaliteli Yaşam Alanları
              </h3>
              <p className="text-gray-600">
                Uzun araştırmalar sonucu özenle seçilmiş konumlarda, doğayla
                uyumlu yaşam alanları tasarlıyoruz.
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Güven ve Saygınlık</h3>
              <p className="text-gray-600">
                Kaliteli hizmet anlayışımızdan taviz vermeden, sektörün en
                değerli şirketi olma vizyonuyla çalışıyoruz.
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
                  <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                  <path d="M15 7h6v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sürdürülebilir Gelişim</h3>
              <p className="text-gray-600">
                Toplum, tasarım, tabiat ve teknoloji odaklı 4T yaklaşımıyla
                sürdürülebilir projeler geliştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EstatePage;
