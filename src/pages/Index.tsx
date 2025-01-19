import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-teal-50">
      <Navbar />
      <Hero />
      <div className="bg-teal-50">
        <Services />
        <About />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;