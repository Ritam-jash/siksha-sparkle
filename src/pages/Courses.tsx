import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { collegeData } from "@/data/collegeData";
import CollegeCard from "@/components/CollegeCard";
import { GraduationCap, BookOpen } from "lucide-react";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of Undergraduate and Postgraduate programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Undergraduate Programs</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• BBA - Bachelor of Business Administration</li>
              <li>• B.Com - Bachelor of Commerce</li>
              <li>• BCA - Bachelor of Computer Applications</li>
              <li>• BA Economics</li>
              <li>• BSc Computer Science</li>
              <li>• BA English</li>
              <li>• BSc Mathematics</li>
              <li>• BA Psychology</li>
              <li>• BBA Aviation Management</li>
              <li>• BSc Data Science</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Postgraduate Programs</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• MBA - Master of Business Administration</li>
              <li>• PGDM - Post Graduate Diploma in Management</li>
              <li>• MCA - Master of Computer Applications</li>
              <li>• M.Com - Master of Commerce</li>
              <li>• MA Economics</li>
              <li>• MSc Computer Science</li>
              <li>• MA English</li>
              <li>• MSc Data Analytics</li>
              <li>• MBA Digital Marketing</li>
              <li>• MBA Healthcare Management</li>
            </ul>
          </div>
        </div>

        <Tabs defaultValue="kolkata" className="w-full">
          <TabsList className="grid w-full max-w-[800px] grid-cols-5 mx-auto mb-8">
            <TabsTrigger value="kolkata">Kolkata</TabsTrigger>
            <TabsTrigger value="delhi">Delhi</TabsTrigger>
            <TabsTrigger value="bangalore">Bangalore</TabsTrigger>
            <TabsTrigger value="pune">Pune</TabsTrigger>
            <TabsTrigger value="hyderabad">Hyderabad</TabsTrigger>
          </TabsList>
          
          {Object.entries(collegeData).map(([zone, colleges]) => (
            <TabsContent key={zone} value={zone} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {colleges.map((college, index) => (
                  <CollegeCard key={index} college={college} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;