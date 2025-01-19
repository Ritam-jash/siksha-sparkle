import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesHero from "@/components/CoursesHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { collegeData } from "@/data/collegeData";
import CollegeCard from "@/components/CollegeCard";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <CoursesHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Tabs defaultValue="kolkata" className="w-full">
          <TabsList className="grid w-full max-w-[800px] grid-cols-5 mx-auto mb-8 bg-teal-100">
            <TabsTrigger 
              value="kolkata"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
            >
              Kolkata
            </TabsTrigger>
            <TabsTrigger 
              value="delhi"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
            >
              Delhi
            </TabsTrigger>
            <TabsTrigger 
              value="bangalore"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
            >
              Bangalore
            </TabsTrigger>
            <TabsTrigger 
              value="pune"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
            >
              Pune
            </TabsTrigger>
            <TabsTrigger 
              value="hyderabad"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
            >
              Hyderabad
            </TabsTrigger>
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