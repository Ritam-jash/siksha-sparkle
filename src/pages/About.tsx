import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, BookOpen, Users, Building2, GraduationCap, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">About Siksha Education</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Empowering students with expert guidance and support since 2013. ISO 9001:2015 certified institution dedicated to transforming education.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Top Rankings</h3>
                <p className="text-gray-600 mt-2">Ranked among top 20 West B-Schools</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">5000+</h3>
                <p className="text-gray-600 mt-2">Partner Institutions</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-600 mt-2">Placement Assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Specialized Programs</h3>
                <p className="text-gray-600">Offering various specializations including Marketing, Finance, HR, and Business Analytics</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
                <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
                <p className="text-gray-600">Strong connections with leading companies for placements and internships</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
                <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Experienced professors and industry experts as faculty members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rankings Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Rankings & Achievements</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-blue-900">Times B-School Rankings</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Ranked 8th among the top 20 West B-Schools</li>
                  <li>• Ranked 9th among the top Private Institutes across India</li>
                  <li>• Ranked 20th among the top 150 B-Schools in India</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-blue-900">Industry Recognition</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Best Management College in West India, 2022</li>
                  <li>• 5 Star Institute Innovation Council 2022</li>
                  <li>• Top Institute for PGDM Placements Awards-2022</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
