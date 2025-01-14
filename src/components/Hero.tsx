import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="pt-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Shape Your Future with Expert Education Guidance
            </h1>
            <p className="text-lg text-gray-600">
              Empowering students with personalized career counseling and admission guidance to help them achieve their academic goals.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-hover transition-colors flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="bg-white text-primary px-8 py-3 rounded-md border-2 border-primary hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative animate-float">
            <img
              src="/lovable-uploads/44b36013-108a-4573-a441-be762bf9c5b6.png"
              alt="Education Consulting"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;