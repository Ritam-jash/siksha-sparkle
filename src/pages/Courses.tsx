import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, MapPin, IndianRupee, BookOpen } from "lucide-react";

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

        {/* Course Types Section */}
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
            </ul>
          </div>
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
    college: "BIBS Kolkata",
    location: "18D, Lake View Rd, Kolkata",
    program: "MBA - Marketing/Finance/HR/Digital Marketing",
    fees: "698,000"
  },
  {
    college: "St. Xaviers University",
    location: "Action Area III B, Newtown",
    program: "MBA",
    fees: "1,080,000"
  },
  {
    college: "IMI Kolkata",
    location: "2/4 C Judges Court Rd, Kolkata",
    program: "PGDM - Marketing/Finance/HRM",
    fees: "1,450,000"
  },
  {
    college: "IIM Calcutta",
    location: "Diamond Harbour Road",
    program: "MBA/PGDM",
    fees: "2,500,000"
  },
  {
    college: "Calcutta University",
    location: "College Street",
    program: "MBA",
    fees: "850,000"
  },
  {
    college: "IISWBM",
    location: "Management House, College Square West",
    program: "MBA",
    fees: "750,000"
  }
];

const delhiCourses = [
  {
    college: "IILM University",
    location: "3, Lodhi Road, New Delhi",
    program: "MBA - Marketing/Finance/HR",
    fees: "1,200,000"
  },
  {
    college: "FMS Delhi",
    location: "University of Delhi, Delhi",
    program: "MBA",
    fees: "200,000"
  },
  {
    college: "IMI Delhi",
    location: "B-10, Qutab Institutional Area",
    program: "PGDM",
    fees: "1,650,000"
  },
  {
    college: "FORE School of Management",
    location: "Qutab Institutional Area",
    program: "PGDM",
    fees: "1,450,000"
  },
  {
    college: "JIMS Rohini",
    location: "Rohini Sector-5",
    program: "PGDM",
    fees: "890,000"
  },
  {
    college: "NDIM",
    location: "Tughlakabad Institutional Area",
    program: "PGDM",
    fees: "750,000"
  }
];

const bangaloreCourses = [
  {
    college: "IIM Bangalore",
    location: "Bannerghatta Road",
    program: "MBA",
    fees: "2,500,000"
  },
  {
    college: "Christ University",
    location: "Hosur Road",
    program: "MBA",
    fees: "800,000"
  },
  {
    college: "XIME Bangalore",
    location: "Electronics City Phase II",
    program: "PGDM",
    fees: "1,250,000"
  },
  {
    college: "IFIM Business School",
    location: "Electronics City",
    program: "PGDM",
    fees: "1,450,000"
  },
  {
    college: "Alliance University",
    location: "Anekal",
    program: "MBA",
    fees: "950,000"
  },
  {
    college: "ISBR Business School",
    location: "Electronic City Phase I",
    program: "PGDM",
    fees: "850,000"
  }
];

export default Courses;