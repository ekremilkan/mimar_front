import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Demo projeleri (gerçek uygulamada props olarak gelecek)
const sampleProjects = [
  {
    id: 1,
    title: "Modern Villa Projesi",
    location: "İstanbul, Türkiye",
    year: "2023",
    description: "Boğaz manzaralı lüks konut projesi",
    gallery: [
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
    ],
  },
  {
    id: 2,
    title: "Kültür Merkezi",
    location: "Ankara, Türkiye",
    year: "2022",
    description: "Çok amaçlı kültür merkezi ve sergi alanı",
    gallery: [
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
    ],
  },
  {
    id: 3,
    title: "Ofis Kompleksi",
    location: "İzmir, Türkiye",
    year: "2024",
    description: "Sürdürülebilir tasarıma sahip çağdaş iş merkezi",
    gallery: [
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
      "https://placehold.co/100x100",
    ],
  },
];

// Asıl component
const ImageWithGallery = ({ gallery, title }) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Props kontrolü - eğer props verilmemişse örnek veri kullan
  const photos = gallery || sampleProjects[0].gallery;
  const projectTitle = title || sampleProjects[0].title;

  const openGalleryModal = (index) => {
    setCurrentIndex(index);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  // Swiper stilleri
  const paginationStyle = {
    "--swiper-pagination-color": "#ffffff",
    "--swiper-pagination-bullet-inactive-color": "#ffffff",
    "--swiper-pagination-bullet-inactive-opacity": "0.5",
  };

  const navigationStyle = {
    "--swiper-navigation-color": "#ffffff",
  };

  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Ana Galeri Alanı */}
        <div className="w-full relative mb-8">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="rounded-lg shadow-md border-8 border-white"
            style={{ ...paginationStyle, ...navigationStyle }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={photo}
                    alt={`${projectTitle} - Görsel ${index + 1}`}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <button
                    onClick={() => openGalleryModal(index)}
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail Galerisi (İsteğe bağlı) */}
        <div className="hidden md:block">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            className="thumbnail-swiper"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`cursor-pointer rounded-md overflow-hidden h-24 ${
                    currentIndex === index
                      ? "ring-4 ring-blue-500"
                      : "opacity-70"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={photo}
                    alt={`${projectTitle} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Tam Ekran Galeri Modalı */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeGalleryModal}
            className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              initialSlide={currentIndex}
              className="modal-swiper"
              style={{ ...paginationStyle, ...navigationStyle }}
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={photo}
                    alt={`${projectTitle} - Tam Boyut ${index + 1}`}
                    className="w-full h-auto max-h-screen object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

// Component'i doğrudan export ediyoruz
export default ImageWithGallery;
