import Navbar from "@/components/Navbar";
import { BookOpen, GraduationCap, Award } from "lucide-react";

const Programs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Our Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Career Counseling</h3>
            <p className="text-gray-600">Comprehensive career guidance sessions with expert counselors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Admission Assistance</h3>
            <p className="text-gray-600">Complete support for college admissions process.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Skill Development</h3>
            <p className="text-gray-600">Professional skill enhancement programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;