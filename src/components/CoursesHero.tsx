import { ArrowRight } from "lucide-react";

const CoursesHero = () => {
  return (
    <div className="relative pt-20 h-[60vh]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center space-y-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Discover top MBA and PGDM programs across India's leading institutions
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
            Browse Courses <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesHero;