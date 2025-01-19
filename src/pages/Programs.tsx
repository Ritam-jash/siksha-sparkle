import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/ProgramsHero";
import { BookOpen, GraduationCap, Award, Users, Target, Briefcase } from "lucide-react";

const Programs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <ProgramsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Our Programs</h1>
          <p className="text-lg text-teal-600 max-w-2xl mx-auto">
            Comprehensive educational programs designed to shape your future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-600">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-teal-800">{program.title}</h3>
              <p className="text-teal-600 mb-6">{program.description}</p>
              <ul className="space-y-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-teal-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const programs = [
  {
    title: "Career Counseling",
    description: "Expert guidance to help you choose the right career path",
    icon: <Target className="w-6 h-6 text-primary" />,
    features: [
      "Personality Assessment",
      "Career Mapping",
      "Industry Insights",
      "One-on-One Sessions"
    ]
  },
  {
    title: "Admission Assistance",
    description: "Complete support for college admissions process",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    features: [
      "College Selection",
      "Application Process",
      "Document Preparation",
      "Interview Preparation"
    ]
  },
  {
    title: "Skill Development",
    description: "Enhance your professional capabilities",
    icon: <Award className="w-6 h-6 text-primary" />,
    features: [
      "Soft Skills Training",
      "Technical Workshops",
      "Leadership Programs",
      "Industry Certifications"
    ]
  },
  {
    title: "Study Abroad",
    description: "Guidance for international education opportunities",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    features: [
      "Country Selection",
      "University Applications",
      "Visa Assistance",
      "Pre-departure Briefing"
    ]
  },
  {
    title: "Placement Support",
    description: "Comprehensive placement assistance",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    features: [
      "Resume Building",
      "Interview Training",
      "Job Matching",
      "Industry Connect"
    ]
  },
  {
    title: "Mentorship Program",
    description: "Learn from industry experts",
    icon: <Users className="w-6 h-6 text-primary" />,
    features: [
      "Industry Mentors",
      "Regular Sessions",
      "Project Guidance",
      "Network Building"
    ]
  }
];

export default Programs;