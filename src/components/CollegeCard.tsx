interface College {
  name: string;
  location: string;
  programs: string[];
  fees: string;
}

interface CollegeCardProps {
  college: College;
}

const CollegeCard = ({ college }: CollegeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-teal-600">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-teal-800">{college.name}</h3>
        <p className="text-teal-600 mb-4 text-sm">{college.location}</p>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-teal-700 mb-2">Programs:</h4>
            <ul className="list-disc list-inside text-teal-600 text-sm">
              {college.programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-teal-700 mb-1">Fees:</h4>
            <p className="text-teal-600 text-sm">{college.fees}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-teal-50 border-t border-teal-100">
        <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;