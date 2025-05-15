import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("TÜMÜ");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);

  const headerRef = useRef(null);
  const categoriesRef = useRef(null);
  const projectsRef = useRef(null);

  // Project data
  const projects = [
    {
      id: "sarimert-residence",
      title: "Sarımert Residence",
      category: "MİMARİ MAKETLER",
      image: "/images/projects/sarimert-residence.jpg",
    },
    {
      id: "sirius-hotel",
      title: "Sirius Hotel",
      category: "MİMARİ MAKETLER",
      image: "/images/projects/sirius-hotel.jpg",
    },
    {
      id: "israkoy-village",
      title: "İsraköy Yaşam Alanı",
      category: "MİNYATÜR PARK MAKETLERİ",
      image: "/images/projects/israkoy-village.jpg",
    },
    {
      id: "modern-villa",
      title: "Modern Villa",
      category: "MİMARİ MAKETLER",
      image: "/images/projects/modern-villa.jpg",
    },
    {
      id: "garden-house",
      title: "Bahçeli Ev",
      category: "MİMARİ MAKETLER",
      image: "/images/projects/garden-house.jpg",
    },
    {
      id: "blue-residence",
      title: "Mavi Residence",
      category: "MİMARİ MAKETLER",
      image: "/images/projects/blue-residence.jpg",
    },
    {
      id: "industrial-facility",
      title: "Endüstriyel Tesis",
      category: "ENDÜSTRİYEL MAKETLER",
      image: "/images/projects/industrial-facility.jpg",
    },
    {
      id: "luxury-apartment",
      title: "Lüks Apartman",
      category: "TEFRİŞ MAKETLER",
      image: "/images/projects/luxury-apartment.jpg",
    },
    {
      id: "theme-park",
      title: "Tema Parkı",
      category: "MİNYATÜR PARK MAKETLERİ",
      image: "/images/projects/theme-park.jpg",
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

    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the appearance of projects
          const newVisibleProjects = {};
          filteredProjects.forEach((project, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => ({
                ...prev,
                [project.id]: true,
              }));
            }, 100 * index);
          });

          projectsObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (categoriesRef.current)
      categoriesObserver.observe(categoriesRef.current);
    if (projectsRef.current) projectsObserver.observe(projectsRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (categoriesRef.current)
        categoriesObserver.unobserve(categoriesRef.current);
      if (projectsRef.current) projectsObserver.unobserve(projectsRef.current);
    };
  }, [filteredProjects]);

  useEffect(() => {
    // Filter projects based on active category
    if (activeCategory === "TÜMÜ") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }

    // Reset visible projects when category changes
    setVisibleProjects({});

    // Re-observe projects section when category changes
    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the appearance of projects
          filteredProjects.forEach((project, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => ({
                ...prev,
                [project.id]: true,
              }));
            }, 100 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
      return () => {
        projectsObserver.unobserve(projectsRef.current);
      };
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
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
          <h1
            className={`text-5xl md:text-6xl font-bold text-white z-10 transition-all duration-1000 ${
              isHeaderVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            Projelerimiz
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

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                style={{
                  transition: "all 0.6s ease",
                  transitionDelay: `${index * 100}ms`,
                  opacity: visibleProjects[project.id] ? 1 : 0,
                  transform: visibleProjects[project.id]
                    ? "translateY(0)"
                    : "translateY(40px)",
                }}
              >
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
