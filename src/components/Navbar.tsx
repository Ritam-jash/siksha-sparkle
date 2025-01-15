import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[url('/lovable-uploads/c733d67a-12d1-44b6-bab1-24a4873ba3eb.png')] bg-cover bg-center shadow-lg z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/ebfc23ce-cd87-4310-9a66-e442294bb011.png" alt="Siksha Education" className="h-12 w-12" />
              <span className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Siksha Education
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-100 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Home</Link>
            <Link to="/about" className="text-gray-100 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">About</Link>
            <Link to="/programs" className="text-gray-100 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Programs</Link>
            <Link to="/courses" className="text-gray-100 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Courses</Link>
            <Link to="/contact" className="text-gray-100 hover:text-white transition-colors duration-200 font-medium hover:scale-105 transform">Contact</Link>
            
            <div className="flex items-center space-x-4">
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                <UserCircle className="w-5 h-5" />
                <span>Sign In</span>
              </button>
              <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105">
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
          <div className="md:hidden bg-blue-800 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-100 hover:text-white transition-colors duration-200">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-100 hover:text-white transition-colors duration-200">About</Link>
              <Link to="/programs" className="block px-3 py-2 text-gray-100 hover:text-white transition-colors duration-200">Programs</Link>
              <Link to="/courses" className="block px-3 py-2 text-gray-100 hover:text-white transition-colors duration-200">Courses</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-100 hover:text-white transition-colors duration-200">Contact</Link>
              <div className="space-y-2 pt-2">
                <button className="w-full bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <UserCircle className="w-5 h-5" />
                  <span>Sign In</span>
                </button>
                <button className="w-full bg-yellow-400 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors">
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
