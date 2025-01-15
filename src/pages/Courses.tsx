import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, MapPin, IndianRupee } from "lucide-react";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of MBA and PGDM programs
          </p>
        </div>
        
        <Tabs defaultValue="kolkata" className="w-full">
          <TabsList className="grid w-full max-w-[600px] grid-cols-3 mx-auto mb-8">
            <TabsTrigger value="kolkata" className="text-lg">Kolkata</TabsTrigger>
            <TabsTrigger value="delhi" className="text-lg">Delhi</TabsTrigger>
            <TabsTrigger value="bangalore" className="text-lg">Bangalore</TabsTrigger>
          </TabsList>
          
          <TabsContent value="kolkata" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kolkataCourses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.college}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{course.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.program}</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    <span>{course.fees}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="delhi" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {delhiCourses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.college}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{course.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.program}</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    <span>{course.fees}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bangalore" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bangaloreCourses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.college}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{course.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.program}</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    <span>{course.fees}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

const kolkataCourses = [
  {
    college: "BIBS",
    location: "18D, Lake View Rd, Kolkata",
    program: "MBA - Marketing/Finance/HR/Digital Marketing",
    fees: "698000"
  },
  {
    college: "St. Xaviers University",
    location: "Action Area III B, Newtown",
    program: "MBA",
    fees: "1080000"
  },
  {
    college: "IMI",
    location: "2/4 C Judges Court Rd, Kolkata",
    program: "PGDM - Marketing/Finance/HRM",
    fees: "1450000"
  },
  // Add more courses from the images
];

const delhiCourses = [
  {
    college: "IILM",
    location: "3, Lodhi Road, New Delhi",
    program: "MBA - Marketing/Finance/HR",
    fees: "1200000"
  },
  {
    college: "FMS",
    location: "University of Delhi, Delhi",
    program: "MBA",
    fees: "200000"
  },
  // Add more courses from the images
];

const bangaloreCourses = [
  {
    college: "IIM Bangalore",
    location: "Bannerghatta Road, Bangalore",
    program: "MBA",
    fees: "2500000"
  },
  {
    college: "Christ University",
    location: "Hosur Road, Bangalore",
    program: "MBA",
    fees: "800000"
  },
  // Add more courses from the images
];

export default Courses;
