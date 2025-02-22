import React from 'react';
import { Building2, MapPin, GraduationCap, Percent } from 'lucide-react';

const mockColleges = [
  {
    name: "Anna University",
    location: "Chennai, Tamil Nadu",
    affiliation: "Government",
    admissionProbability: 85,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
  },
  {
    name: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu",
    affiliation: "Autonomous",
    admissionProbability: 75,
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80"
  },
  {
    name: "College of Engineering, Guindy",
    location: "Chennai, Tamil Nadu",
    affiliation: "Government",
    admissionProbability: 90,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80"
  }
];

export default function Recommendations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Recommended Colleges
          </h1>
          <p className="text-gray-300 text-lg">
            Based on your profile, here are your best matches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockColleges.map((college, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${college.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {college.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{college.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span>{college.affiliation}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    <span>Engineering</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Percent className="h-5 w-5 mr-2" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>Admission Probability</span>
                        <span>{college.admissionProbability}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-500 rounded-full h-2"
                          style={{ width: `${college.admissionProbability}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}