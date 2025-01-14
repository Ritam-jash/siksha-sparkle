import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
        
        <Tabs defaultValue="ug" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
            <TabsTrigger value="ug">Undergraduate</TabsTrigger>
            <TabsTrigger value="pg">Postgraduate</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ug" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ugCourses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="text-sm text-gray-500">Duration: {course.duration}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pg" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pgCourses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="text-sm text-gray-500">Duration: {course.duration}</div>
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
    description: "Engineering degree program in various specializations.",
    duration: "4 years"
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    description: "Management focused undergraduate program.",
    duration: "3 years"
  },
  {
    title: "Bachelor of Science (B.Sc)",
    description: "Science degree with multiple specializations available.",
    duration: "3 years"
  }
];

const pgCourses = [
  {
    title: "Master of Technology (M.Tech)",
    description: "Advanced engineering specialization program.",
    duration: "2 years"
  },
  {
    title: "Master of Business Administration (MBA)",
    description: "Advanced management and business program.",
    duration: "2 years"
  },
  {
    title: "Master of Science (M.Sc)",
    description: "Advanced science specialization program.",
    duration: "2 years"
  }
];

export default Courses;