import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import product2 from "../../assets/img/product2.webp";
import product3 from "../../assets/img/product3.webp";
import product4 from "../../assets/img/product4.webp";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("TÜMÜ");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Project data
  const projects = [
    {
      id: "sarimert-residence",
      title: "Sarımert Residence",
      category: "MİMARİ MAKETLER",
      image: product2,
    },
    {
      id: "sirius-hotel",
      title: "Sirius Hotel",
      category: "MİMARİ MAKETLER",
      image: product4,
    },
    {
      id: "israkoy-village",
      title: "İsraköy Yaşam Alanı",
      category: "MİNYATÜR PARK MAKETLERİ",
      image: product3,
    },
    {
      id: "modern-villa",
      title: "Modern Villa",
      category: "MİMARİ MAKETLER",
      image: product2,
    },
    {
      id: "garden-house",
      title: "Bahçeli Ev",
      category: "MİMARİ MAKETLER",
      image: product2,
    },
    {
      id: "blue-residence",
      title: "Mavi Residence",
      category: "MİMARİ MAKETLER",
      image: product4,
    },
    {
      id: "industrial-facility",
      title: "Endüstriyel Tesis",
      category: "ENDÜSTRİYEL MAKETLER",
      image: product4,
    },
    {
      id: "luxury-apartment",
      title: "Lüks Apartman",
      category: "TEFRİŞ MAKETLER",
      image: product3,
    },
    {
      id: "theme-park",
      title: "Tema Parkı",
      category: "MİNYATÜR PARK MAKETLERİ",
      image: product2,
    },
  ];

  // Categories
  const categories = [
    "TÜMÜ",
    "ENDÜSTRİYEL MAKETLER",
    "MİMARİ MAKETLER",
    "MİNYATÜR PARK MAKETLERİ",
    "TEFRİŞ MAKETLER",
  ];

  useEffect(() => {
    // Filter projects based on active category
    if (activeCategory === "TÜMÜ") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // İlk yüklemede tüm projeleri göster
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: `url('/images/projects-header.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
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
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <h1 className="text-5xl md:text-6xl font-bold text-white z-10">
            Projelerimiz
          </h1>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/images/placeholder.jpg"}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl text-gray-500">
                Bu kategoride henüz proje bulunmamaktadır.
              </h3>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProjectsPage;
