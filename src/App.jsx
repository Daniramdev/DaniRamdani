// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSession from './components/FooterSection';
import LoadingScreen from './components/LoadingScreen'; 
import Services from './components/Service';

const App = () => {
  return (
    <div className="relative text-white">
      <LoadingScreen /> {/* Letakkan komponen loading di sini */}
      
      <Navbar />
      <Hero3D />
      <AboutSection />
      <Services/>
      <ProjectsSection />
    
      <FooterSession />
    </div>
  );
};

export default App;