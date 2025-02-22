import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, GraduationCap, School } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">CampusMate</span>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Sparkles className="h-16 w-16 text-purple-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Powered by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> CampusMate</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Find your perfect college match with our advanced AI-powered recommendation system.
            Get personalized suggestions based on your profile and preferences.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Started
              <GraduationCap className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <School className="h-8 w-8" />,
                title: "Smart Matching",
                description: "Our AI analyzes your profile to find the best college matches"
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Real-time Data",
                description: "Access up-to-date college information and admission probabilities"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Personalized Results",
                description: "Get recommendations tailored to your academic profile and preferences"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}