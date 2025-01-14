import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Clock, BookOpen } from "lucide-react";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of undergraduate and postgraduate programs
          </p>
        </div>
        
        <Tabs defaultValue="ug" className="w-full">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="ug" className="text-lg">Undergraduate</TabsTrigger>
            <TabsTrigger value="pg" className="text-lg">Postgraduate</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ug" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ugCourses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{course.specializations} specializations</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pg" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pgCourses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{course.specializations} specializations</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const ugCourses = [
  {
    title: "Bachelor of Technology (B.Tech)",
    description: "Comprehensive engineering program with various specializations",
    duration: "4 years",
    specializations: 8
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    description: "Learn business management and entrepreneurial skills",
    duration: "3 years",
    specializations: 5
  },
  {
    title: "Bachelor of Science (B.Sc)",
    description: "Strong foundation in scientific principles and research",
    duration: "3 years",
    specializations: 6
  },
  {
    title: "Bachelor of Arts (BA)",
    description: "Explore humanities and social sciences",
    duration: "3 years",
    specializations: 7
  },
  {
    title: "Bachelor of Commerce (B.Com)",
    description: "Study commerce, accounting, and finance",
    duration: "3 years",
    specializations: 4
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    description: "Learn computer science and application development",
    duration: "3 years",
    specializations: 3
  }
];

const pgCourses = [
  {
    title: "Master of Technology (M.Tech)",
    description: "Advanced engineering studies with research focus",
    duration: "2 years",
    specializations: 10
  },
  {
    title: "Master of Business Administration (MBA)",
    description: "Advanced business management and leadership",
    duration: "2 years",
    specializations: 8
  },
  {
    title: "Master of Science (M.Sc)",
    description: "Advanced scientific research and specialization",
    duration: "2 years",
    specializations: 6
  },
  {
    title: "Master of Arts (MA)",
    description: "Advanced studies in humanities and social sciences",
    duration: "2 years",
    specializations: 5
  },
  {
    title: "Master of Commerce (M.Com)",
    description: "Advanced commerce and financial studies",
    duration: "2 years",
    specializations: 4
  },
  {
    title: "Master of Computer Applications (MCA)",
    description: "Advanced computer applications and development",
    duration: "2 years",
    specializations: 5
  }
];

export default Courses;