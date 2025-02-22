import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentInfo from './pages/StudentInfo.tsx';
import Recommendations from './pages/Recommendations.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student-info" element={<StudentInfo />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;