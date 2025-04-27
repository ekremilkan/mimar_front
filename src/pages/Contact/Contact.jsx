import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const infoSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInfoVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (infoSectionRef.current) {
      observer.observe(infoSectionRef.current);
    }

    return () => {
      if (infoSectionRef.current) {
        observer.unobserve(infoSectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white z-10">
            Bize Ulaşın
          </h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        ref={infoSectionRef}
        className="py-16 bg-black text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-black opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(30, 30, 30, 0.7) 25%, rgba(20, 20, 20, 0.7) 25%, rgba(20, 20, 20, 0.7) 50%, rgba(30, 30, 30, 0.7) 50%, rgba(30, 30, 30, 0.7) 75%, rgba(20, 20, 20, 0.7) 75%, rgba(20, 20, 20, 0.7))",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Phone */}
            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 ${
                isInfoVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-full p-6 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Telefon</h3>
              <div className="w-12 h-1 bg-white mb-6"></div>
              <p className="text-gray-300 mb-4">
                Bizi arayın, projenizin detaylarını görüşelim.
              </p>
              <p className="font-medium mb-2">Eşref Demirci</p>
              <p className="text-xl">+90 (532) 709 3754</p>
            </div>

            {/* Email */}
            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-200 ${
                isInfoVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-full p-6 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Email</h3>
              <div className="w-12 h-1 bg-white mb-6"></div>
              <p className="text-gray-300 mb-4">
                Mail üzerinden ilettiğiniz mesajlarınız en kısa sürede
                cevaplanır.
              </p>
              <a
                href="mailto:iletisim@maketchi.com"
                className="text-xl hover:underline"
              >
                iletisim@toprakmimarlik.com
              </a>
            </div>

            {/* Address */}
            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-400 ${
                isInfoVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-full p-6 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Adres</h3>
              <div className="w-12 h-1 bg-white mb-6"></div>
              <p className="text-gray-300 mb-4">
                Aziziye Mah. 350. Sok. No:9A, 54500 Karasu/Sakarya
              </p>
              <a
                href="https://maps.google.com/?q=Aziziye+Mah.+350.+Sok.+No:9A,+54500+Karasu/Sakarya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Google Maps'te Görüntüle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - REDESIGNED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto h-[400px] relative shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.9758463971403!2d30.756683!3d41.0764797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409f8c98a7c7fa3b%3A0x99309aa3a9c6fe85!2sAziziye%2C%20350.%20Sk.%20No%3A9A%2C%2054500%20Karasu%2FSakarya!5e0!3m2!1str!2str!4v1650000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Bize Mesajınızı İletin
            </h2>
            <p className="text-gray-600">
              En kısa sürede size dönüş yapacağız.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınız*"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon Numaranız*"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Adresiniz*"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Konu*"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mesajınız*"
                required
                rows="6"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                GÖNDER
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
