import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactComponent from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="pt-16">
        <ContactComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;