import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-teal-600 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/ebfc23ce-cd87-4310-9a66-e442294bb011.png" alt="Siksha Education" className="h-12 w-12" />
              <span className="text-2xl font-bold text-white">
                Siksha Education
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-100 transition-colors duration-200 font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-100 transition-colors duration-200 font-medium">About</Link>
            <Link to="/programs" className="text-white hover:text-gray-100 transition-colors duration-200 font-medium">Programs</Link>
            <Link to="/courses" className="text-white hover:text-gray-100 transition-colors duration-200 font-medium">Courses</Link>
            <Link to="/contact" className="text-white hover:text-gray-100 transition-colors duration-200 font-medium">Contact</Link>
            
            <div className="flex items-center space-x-4">
              <button className="bg-white text-teal-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2">
                <UserCircle className="w-5 h-5" />
                <span>Sign In</span>
              </button>
              <button className="bg-white text-teal-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200">
                Sign Up
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-200 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-teal-700 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-white hover:text-gray-100 transition-colors duration-200">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-white hover:text-gray-100 transition-colors duration-200">About</Link>
              <Link to="/programs" className="block px-3 py-2 text-white hover:text-gray-100 transition-colors duration-200">Programs</Link>
              <Link to="/courses" className="block px-3 py-2 text-white hover:text-gray-100 transition-colors duration-200">Courses</Link>
              <Link to="/contact" className="block px-3 py-2 text-white hover:text-gray-100 transition-colors duration-200">Contact</Link>
              <div className="space-y-2 pt-2">
                <button className="w-full bg-white text-teal-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <UserCircle className="w-5 h-5" />
                  <span>Sign In</span>
                </button>
                <button className="w-full bg-white text-teal-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;