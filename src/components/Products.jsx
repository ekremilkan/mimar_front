import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const swiperRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("project-gallery");
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

  // Add event listener for ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Lock body scroll when modal is open
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const placehold = "https://placehold.co/600x400";

  // Project data
  const projects = [
    {
      id: 1,
      name: "Endüstriyel Tesis Modeli",
      image: placehold,
      category: "Endüstriyel",
    },
    {
      id: 2,
      name: "Konut Projesi",
      image: placehold,
      category: "Konut",
    },
    {
      id: 3,
      name: "Karma Kullanım Kompleksi",
      image: placehold,
      category: "Karma Kullanım",
    },
    {
      id: 4,
      name: "Şehir Planlama Projesi",
      image: placehold,
      category: "Şehir Planlama",
    },
    {
      id: 5,
      name: "Ticari Merkez",
      image: placehold,
      category: "Ticari",
    },
    {
      id: 6,
      name: "Kültür Merkezi",
      image: placehold,
      category: "Kültürel",
    },
    {
      id: 7,
      name: "Eğitim Kampüsü",
      image: placehold,
      category: "Eğitim",
    },
    {
      id: 8,
      name: "Spor Kompleksi",
      image: placehold,
      category: "Spor",
    },
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      // Swipe left
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 75) {
      // Swipe right
      handlePrev();
    }
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, projects.length - 4);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    const maxIndex = Math.max(0, projects.length - 4);
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="project-gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Projelerimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toprak Mimarlık olarak tamamladığımız projelerden bazı örnekler. Her
            bir proje, müşterilerimizin vizyonunu gerçeğe dönüştürmek için
            titizlikle hazırlanmıştır.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
              aria-label="Previous projects"
            >
              <FaChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
              aria-label="Next projects"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          <div
            ref={swiperRef}
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 group relative overflow-hidden cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-[2/3] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 p-4">
                      <h3 className="text-xl font-bold">{project.name}</h3>
                      <p className="text-sm mt-2">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-white rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
              aria-label="Close modal"
            >
              <IoMdClose size={24} />
            </button>

            {/* Image container */}
            <div className="flex-grow overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Project info */}
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-black">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600">{selectedProject.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
