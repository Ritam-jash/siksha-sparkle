import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "BBA Student",
    content: "Siksha Education helped me choose the perfect course and college. Their guidance was invaluable in shaping my career path.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "Engineering Student",
    content: "The career counseling sessions were eye-opening. They helped me understand my strengths and choose the right engineering stream.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Amit Patel",
    role: "MBA Aspirant",
    content: "Their admission assistance made the entire process smooth and stress-free. I got into my dream business school!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from those who have transformed their careers with us</p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center">
            <button
              onClick={prev}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="bg-white rounded-xl shadow-xl p-8 mx-12 md:mx-24">
              <Quote className="w-12 h-12 text-primary opacity-20 mb-6" />
              <p className="text-lg text-gray-600 mb-6">{testimonials[currentIndex].content}</p>
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <button
              onClick={next}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;