import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = () => {
  // State variables for entire page
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [isHakkimizdaVisible, setIsHakkimizdaVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0,
  });
  const [openQuestion, setOpenQuestion] = useState(0);

  // References for sections
  const experienceSectionRef = useRef(null);
  const counterSectionRef = useRef(null);
  const hakkimizdaSectionRef = useRef(null);

  // Target values for counters
  const targetValues = {
    years: 20,
    projects: 150,
    clients: 80,
    satisfaction: 100,
  };

  // FAQ data
  const faqItems = [
    {
      question: "Maketlerde ne tür malzeme kullanılır?",
      answer: (
        <>
          <p className="mb-4">
            Maketlerde kullanılan malzemelerin yelpazesi oldukça geniştir, proje
            detaylarına ve ölçeğine göre kullanılan malzeme değişkenlik
            gösterir.
          </p>
          <p className="mb-4">
            Sektörde gelinen noktada ağırlıklı olarak mimari maketlerde
            kullanılan ana materyal Plexi Glass iken; endüstriyel maketlerde 3D
            Printer cihazlarında işlenen PETG, PLA, ABS gibi malzemeler ve Plexi
            Glass kullanılır.
          </p>
          <p>
            Dış mekanlarda sergilenen minyatür park maketlerinde ise ana malzeme
            farklı yoğunluklarda poliüretanlardır. Maketlerde doğru görsel
            yakalamak adına ana materyale ek olarak her türlü malzeme
            kullanılabilmektedir.
          </p>
        </>
      ),
    },
    {
      question: "Maketin teslimatı ne kadar sürede gerçekleşir?",
      answer: (
        <p>
          Maketin teslimat süresi, projenin karmaşıklığına, ölçeğine ve detay
          seviyesine bağlı olarak değişmektedir. Basit maketler 1-2 hafta
          içerisinde tamamlanabilirken, daha karmaşık ve büyük ölçekli projeler
          4-8 hafta arasında sürebilmektedir. Her proje için özel bir zaman
          planlaması yapılmakta ve müşterilerimize başlangıçta net bir teslimat
          tarihi verilmektedir.
        </p>
      ),
    },
    {
      question: "Maket için ölçek seçenekleri nelerdir?",
      answer: (
        <p>
          Maket ölçekleri projenin türüne, büyüklüğüne ve gösterilmek istenen
          detay seviyesine göre değişmektedir. En sık kullanılan ölçekler 1:25,
          1:50, 1:100, 1:200 ve 1:500'dür. Küçük iç mekan maketleri için 1:20
          veya 1:25 gibi daha büyük ölçekler tercih edilirken, büyük kentsel
          planlama projeleri için 1:1000 veya daha küçük ölçekler
          kullanılabilmektedir. Müşterilerimizle birlikte projenin amacına en
          uygun ölçeği belirlemekteyiz.
        </p>
      ),
    },
  ];

  // Effects for Intersection Observer for Hakkimizda Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHakkimizdaVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (hakkimizdaSectionRef.current) {
      observer.observe(hakkimizdaSectionRef.current);
    }

    return () => {
      if (hakkimizdaSectionRef.current) {
        observer.unobserve(hakkimizdaSectionRef.current);
      }
    };
  }, []);

  // Effects for Intersection Observer for Experience Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExperienceVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (experienceSectionRef.current) {
      observer.observe(experienceSectionRef.current);
    }

    return () => {
      if (experienceSectionRef.current) {
        observer.unobserve(experienceSectionRef.current);
      }
    };
  }, []);

  // Effects for Intersection Observer for Counter Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounterVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  // Effect for counter animation
  useEffect(() => {
    if (!isCounterVisible) return;

    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);

      setCounters({
        years: Math.floor(easeOutQuad * targetValues.years),
        projects: Math.floor(easeOutQuad * targetValues.projects),
        clients: Math.floor(easeOutQuad * targetValues.clients),
        satisfaction: Math.floor(easeOutQuad * targetValues.satisfaction),
      });

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isCounterVisible]);

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hakkımızda Hero Section */}
      <section
        ref={hakkimizdaSectionRef}
        className="relative py-32 md:py-52 bg-black text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover opacity-40"
          style={{
            backgroundImage: `url('/images/texture-bg.jpg')`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1
            className={`text-6xl md:text-8xl font-bold text-center transition-all duration-1000 ${
              isHakkimizdaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Hakkımızda
          </h1>
        </div>
      </section>

      {/* Experience Section (now directly in AboutPage) */}
      <section
        ref={experienceSectionRef}
        className="py-16 md:py-24 bg-black text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 ${
                isExperienceVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="h-1 w-12 bg-white mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                İşimizde Tecrübeliyiz
              </h2>
            </div>
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isExperienceVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p>
                20 yıllık tecrübe, sayısız proje ve istisnasız memnun müşteri
                portföyümüzü yeni bir yapılanmayla MaketChi'de bir araya
                getirdik.
              </p>
              <p>
                Her bir projede, özenle seçilmiş malzemelerle özgün ve kaliteli
                maketler üretiyoruz. Maket yapım sürecimizde, en son teknolojik
                imkanları kullanarak tasarımlarınızı hayata geçirirken kaliteyi
                ön planda tutuyoruz.
              </p>
              <p>
                Hedefimiz, MaketChi'yi maket sanatının zarafet ve özgünlükle
                buluştuğu bir hizmet noktasına dönüştürmek.
              </p>
              <p>
                Projelerimizde estetik detaylara verdiğimiz önemle,
                müşterilerimize benzersiz ve etkileyici mimari maketler
                sunuyoruz. MaketChi'nin ana prensibi, her bir maketin özel bir
                hikaye taşıması ve müşterilerimizin hayallerini gerçeğe
                dönüştürmek için sanatsal bir dokunuş sunmaktır.
              </p>
              <p>
                Uzman ekibimiz, tasarımın detaylarını incelikle işleyip, bilgi,
                tutku ve ustalıklarını her bir projeye yansıtarak, kaliteli ve
                özgün hizmet sunmak için buradalar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section (now directly in AboutPage) */}
      <section
        ref={counterSectionRef}
        className="py-16 md:py-24 bg-black text-white border-t border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">
                {counters.years}+
              </h3>
              <div className="h-1 w-12 bg-white mx-auto mb-4"></div>
              <p className="text-gray-300">Yıllık Tecrübe</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">
                {counters.projects}+
              </h3>
              <div className="h-1 w-12 bg-white mx-auto mb-4"></div>
              <p className="text-gray-300">Proje</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">
                {counters.clients}+
              </h3>
              <div className="h-1 w-12 bg-white mx-auto mb-4"></div>
              <p className="text-gray-300">Müşteri</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-4">
                %{counters.satisfaction}
              </h3>
              <div className="h-1 w-12 bg-white mx-auto mb-4"></div>
              <p className="text-gray-300">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (now directly in AboutPage) */}
      <section className="py-16 md:py-24 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Sıkça Sorulan Sorular
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-800 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? -1 : index)
                  }
                >
                  <h3 className="text-xl font-medium">{item.question}</h3>
                  <span className="text-2xl">
                    {openQuestion === index ? (
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
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
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
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openQuestion === index
                      ? "max-h-[1000px] opacity-100 py-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-gray-300">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
