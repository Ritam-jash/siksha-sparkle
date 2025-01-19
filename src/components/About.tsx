const About = () => {
  return (
    <div id="about" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/lovable-uploads/8b68eac9-334e-41b7-9917-6e1896d65325.png"
              alt="About Siksha Education"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-teal-800">About Siksha Education</h2>
            <p className="text-lg text-teal-600">
              Success Siksha (a unit of Siksha Education Consulting & Trust) was established in 2013 with the vision of providing quality education services to all. Founded by Late Siladitya Chakraborty and Mr. Chandan Kumar Jha, we have grown to become a trusted name in education consulting.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-teal-600">5000+</h3>
                <p className="text-teal-600">Partner Institutions</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-teal-600">10+</h3>
                <p className="text-teal-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;