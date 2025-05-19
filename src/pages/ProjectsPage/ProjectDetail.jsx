import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ImageWithGallery from "../../components/Projects/ImageWithGallery";
import Footer from "../../components/Footer";

// Örnek proje verileri
const projectsData = {
  "sarimert-residence": {
    title: "Sarımert Residence",
    heroImage: "/images/projects/sarimert-residence/hero.jpg",
    category: "MİMARİ MAKETLER",
    client: "Sarımert İnşaat",
    scale: "1/75",
    location: "Sakarya/Karasu",
    year: "2024",
    duration: "35",
    description:
      "Sarımert Residence projesi detaylı açıklaması burada yer alacak.",
    images: [
      "/images/projects/sarimert-residence/image1.jpg",
      "/images/projects/sarimert-residence/image2.jpg",
      "/images/projects/sarimert-residence/image3.jpg",
      "/images/projects/sarimert-residence/image4.jpg",
      "/images/projects/sarimert-residence/image5.jpg",
    ],
    similarProjects: ["sirius-hotel", "blue-residence", "modern-villa"],
  },
  "sirius-hotel": {
    title: "Karasu SIRIUS Projesi",
    heroImage: "/images/projects/sirius-hotel/hero.jpg",
    category: "MİMARİ MAKETLER",
    client: "Sarımert İnşaat",
    scale: "1/75",
    location: "Sakarya/Karasu",
    year: "2024",
    duration: "35",
    description: "Karasu SIRIUS projesi detaylı açıklaması burada yer alacak.",
    images: [
      "/images/projects/sirius-hotel/image1.jpg",
      "/images/projects/sirius-hotel/image2.jpg",
      "/images/projects/sirius-hotel/image3.jpg",
      "/images/projects/sirius-hotel/image4.jpg",
      "/images/projects/sirius-hotel/image5.jpg",
    ],
    similarProjects: ["sarimert-residence", "blue-residence", "modern-villa"],
  },
  // Diğer projeler için benzer yapıda veriler eklenebilir
};

// Benzer projelerin verilerini getiren yardımcı fonksiyon
const getSimilarProjects = (similarProjectIds) => {
  return similarProjectIds
    .map((id) => {
      const project = projectsData[id];
      if (!project) return null;

      return {
        id,
        title: project.title,
        image: project.heroImage,
        category: project.category,
      };
    })
    .filter((project) => project !== null);
};
// ... (Diğer importlar ve kodlar aynı kalacak)

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [similarProjects, setSimilarProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = () => {
      setLoading(true);
      const projectData = projectsData[projectId];

      if (projectData) {
        setProject(projectData);
        if (
          projectData.similarProjects &&
          projectData.similarProjects.length > 0
        ) {
          const similar = getSimilarProjects(projectData.similarProjects);
          setSimilarProjects(similar);
        } else {
          setSimilarProjects([]);
        }
      } else {
        setProject(null);
        setSimilarProjects([]);
      }
      setLoading(false);
    };

    loadProject();
  }, [projectId]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-xl">Proje yükleniyor...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-xl text-red-500">Proje bulunamadı!</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
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

      {/* Project Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Project Gallery */}
            <div className="w-full md:w-2/3">
              <ImageWithGallery gallery={project.images} />
            </div>

            {/* Project Info */}
            <div className="w-full md:w-1/3">
              <div className="space-y-8 bg-white p-6 text-xl">
                <div>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-900">
                      Müşteri:
                    </strong>
                    <span className="ml-2">{project.client}</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-900">
                      Ölçek:
                    </strong>
                    <span className="ml-2">{project.scale}</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-900">
                      Konum:
                    </strong>
                    <span className="ml-2">{project.location}</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-900">
                      Yıl:
                    </strong>
                    <span className="ml-2">{project.year}</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-900">
                      Süre:
                    </strong>
                    <span className="ml-2">{project.duration} gün</span>{" "}
                    {/* Örnek: "gün" birimi eklendi */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Projects Section */}
      {/* ... (Benzer projeler bölümü aynı kalacak) ... */}

      <Footer />
    </>
  );
};

export default ProjectDetail;
