import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative pt-20 min-h-[80vh]">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Shape Your Future with Expert Education Guidance
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Empowering students with personalized career counseling and admission guidance to help them achieve their academic goals.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-md border-2 border-teal-600 hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;