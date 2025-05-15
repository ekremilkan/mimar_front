import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("TÜMÜ");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState({});

  const headerRef = useRef(null);
  const categoriesRef = useRef(null);
  const postsRef = useRef(null);

  // Blog posts data
  const blogPosts = [
    {
      id: "mimari-maket-nedir",
      title: "Mimari Maket Nedir ve Neden Önemlidir?",
      category: "MİMARİ MAKETLER",
      image: "/placeholder.svg?height=400&width=600",
      date: "15 Mayıs 2024",
      author: "Eşref Demirci",
      excerpt:
        "Mimari maketler, bir yapının veya projenin küçük ölçekli üç boyutlu temsilleridir. Bu makalede mimari maketlerin önemi ve faydaları hakkında bilgi edinebilirsiniz.",
    },
    {
      id: "maket-yapim-sureci",
      title: "Profesyonel Maket Yapım Süreci",
      category: "MAKET YAPIMI",
      image: "/placeholder.svg?height=400&width=600",
      date: "10 Mayıs 2024",
      author: "Ahmet Yılmaz",
      excerpt:
        "Profesyonel bir maketin tasarımdan son haline kadar geçirdiği aşamaları ve kullanılan teknikleri detaylı olarak inceliyoruz.",
    },
    {
      id: "3d-baski-teknolojileri",
      title: "Maket Yapımında 3D Baskı Teknolojileri",
      category: "TEKNOLOJİ",
      image: "/placeholder.svg?height=400&width=600",
      date: "5 Mayıs 2024",
      author: "Mehmet Kaya",
      excerpt:
        "3D baskı teknolojilerinin maket yapımında kullanımı ve sağladığı avantajlar hakkında kapsamlı bir inceleme.",
    },
    {
      id: "endustriyel-maket-trendleri",
      title: "2024 Endüstriyel Maket Trendleri",
      category: "ENDÜSTRİYEL MAKETLER",
      image: "/placeholder.svg?height=400&width=600",
      date: "1 Mayıs 2024",
      author: "Zeynep Demir",
      excerpt:
        "Endüstriyel maket sektöründe 2024 yılında öne çıkan trendler ve yenilikçi yaklaşımlar.",
    },
    {
      id: "malzeme-secimi",
      title: "Maket Yapımında Doğru Malzeme Seçimi",
      category: "MAKET YAPIMI",
      image: "/placeholder.svg?height=400&width=600",
      date: "25 Nisan 2024",
      author: "Ali Yıldız",
      excerpt:
        "Farklı maket türleri için en uygun malzemelerin seçimi ve malzeme özelliklerinin detaylı karşılaştırması.",
    },
    {
      id: "minyatur-park-ornekleri",
      title: "Dünyadan Etkileyici Minyatür Park Örnekleri",
      category: "MİNYATÜR PARK MAKETLERİ",
      image: "/placeholder.svg?height=400&width=600",
      date: "20 Nisan 2024",
      author: "Ayşe Kara",
      excerpt:
        "Dünyanın dört bir yanından en etkileyici minyatür park örnekleri ve tasarım hikayeleri.",
    },
    {
      id: "maket-bakim-rehberi",
      title: "Mimari Maketlerin Bakımı ve Korunması",
      category: "MİMARİ MAKETLER",
      image: "/placeholder.svg?height=400&width=600",
      date: "15 Nisan 2024",
      author: "Eşref Demirci",
      excerpt:
        "Mimari maketlerin uzun ömürlü olması için bakım ve koruma yöntemleri hakkında kapsamlı bir rehber.",
    },
    {
      id: "dijital-vs-fiziksel",
      title: "Dijital Modelleme vs. Fiziksel Maketler",
      category: "TEKNOLOJİ",
      image: "/placeholder.svg?height=400&width=600",
      date: "10 Nisan 2024",
      author: "Burak Şahin",
      excerpt:
        "Dijital modelleme ve fiziksel maketlerin karşılaştırması, avantajları ve dezavantajları.",
    },
    {
      id: "maket-olcek-secimi",
      title: "Maket Projelerinde Doğru Ölçek Seçimi",
      category: "MAKET YAPIMI",
      image: "/placeholder.svg?height=400&width=600",
      date: "5 Nisan 2024",
      author: "Canan Yılmaz",
      excerpt:
        "Farklı proje türleri için en uygun ölçek seçimi ve ölçek belirleme kriterleri.",
    },
  ];

  // Categories
  const categories = [
    "TÜMÜ",
    "MİMARİ MAKETLER",
    "ENDÜSTRİYEL MAKETLER",
    "MİNYATÜR PARK MAKETLERİ",
    "MAKET YAPIMI",
    "TEKNOLOJİ",
  ];

  useEffect(() => {
    // Set up intersection observers for animations
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const categoriesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCategoriesVisible(true);
          categoriesObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const postsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the appearance of posts
          filteredPosts.forEach((post, index) => {
            setTimeout(() => {
              setVisiblePosts((prev) => ({
                ...prev,
                [post.id]: true,
              }));
            }, 100 * index);
          });

          postsObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (categoriesRef.current)
      categoriesObserver.observe(categoriesRef.current);
    if (postsRef.current) postsObserver.observe(postsRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (categoriesRef.current)
        categoriesObserver.unobserve(categoriesRef.current);
      if (postsRef.current) postsObserver.unobserve(postsRef.current);
    };
  }, [filteredPosts]);

  useEffect(() => {
    // Filter posts based on active category
    if (activeCategory === "TÜMÜ") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(
        blogPosts.filter((post) => post.category === activeCategory)
      );
    }

    // Reset visible posts when category changes
    setVisiblePosts({});

    // Re-observe posts section when category changes
    const postsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the appearance of posts
          filteredPosts.forEach((post, index) => {
            setTimeout(() => {
              setVisiblePosts((prev) => ({
                ...prev,
                [post.id]: true,
              }));
            }, 100 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (postsRef.current) {
      postsObserver.observe(postsRef.current);
      return () => {
        postsObserver.unobserve(postsRef.current);
      };
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const formatDate = (dateString) => {
    return dateString;
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-15%20at%2014.07.43-mXaZQ5aukVdxAS9MlLu3TLCXIoJYgU.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        >
          {/* Overlay pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
              backgroundSize: "100% 100%",
              opacity: 0.8,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className={`text-5xl md:text-6xl font-bold text-white z-10 transition-all duration-1000 ${
              isHeaderVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            Blog Paylaşımlarımız
          </h1>
        </div>
      </section>

      {/* Category Filter */}
      <section ref={categoriesRef} className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div
            className={`flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-1000 ${
              isCategoriesVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isCategoriesVisible ? 1 : 0,
                  transform: isCategoriesVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                style={{
                  transition: "all 0.6s ease",
                  transitionDelay: `${index * 100}ms`,
                  opacity: visiblePosts[post.id] ? 1 : 0,
                  transform: visiblePosts[post.id]
                    ? "translateY(0)"
                    : "translateY(40px)",
                }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-xs px-3 py-1 m-3 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-end">
                    <button className="text-black font-medium text-sm flex items-center group-hover:text-gray-700 transition-colors">
                      Devamını Oku
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
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl text-gray-500">
                Bu kategoride henüz blog yazısı bulunmamaktadır.
              </h3>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
