import { BookOpen, Users, Award, TrendingUp } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Career Counseling",
    description: "Expert guidance to help you choose the right career path based on your interests and abilities."
  },
  {
    icon: Users,
    title: "Admission Assistance",
    description: "Complete support throughout the college admission process, from application to enrollment."
  },
  {
    icon: Award,
    title: "Course Selection",
    description: "Personalized course recommendations aligned with your career goals and market demands."
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description: "Comprehensive programs to enhance your professional skills and market readiness."
  }
];

const Services = () => {
  return (
    <div id="services" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-teal-800">Our Services</h2>
          <p className="mt-4 text-lg text-teal-600">Comprehensive education consulting services to guide your academic journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">{service.title}</h3>
              <p className="text-teal-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;