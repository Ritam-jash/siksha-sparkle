import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/lovable-uploads/44b36013-108a-4573-a441-be762bf9c5b6.png",
  "/lovable-uploads/8b68eac9-334e-41b7-9917-6e1896d65325.png",
  // Add more images as needed
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
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
            <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-hover transition-colors flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="bg-white text-primary px-8 py-3 rounded-md border-2 border-primary hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;