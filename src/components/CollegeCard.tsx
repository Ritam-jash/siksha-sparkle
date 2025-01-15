import { College } from "@/data/collegeData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, GraduationCap, IndianRupee } from "lucide-react";

interface CollegeCardProps {
  college: College;
}

const CollegeCard = ({ college }: CollegeCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all">
      <CardHeader>
        <CardTitle className="text-xl">{college.name}</CardTitle>
        <div className="flex items-center text-gray-600 mt-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{college.location}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center mb-2">
              <GraduationCap className="w-4 h-4 mr-2 text-primary" />
              <span className="font-medium">Programs:</span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
              {college.programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-green-600 font-semibold">
            <IndianRupee className="w-4 h-4 mr-1" />
            <span>₹{college.fees}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeCard;