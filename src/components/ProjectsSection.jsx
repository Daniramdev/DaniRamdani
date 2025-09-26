// 🚀 PROJECTS SESSION – CYBER UNIX 2025
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Float, OrbitControls, Box, Text } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import ParallaxReveal from './ParallaxReveal';

// You would define the scrollbar CSS in your global stylesheet (e.g., globals.css)
/*
.hide-scrollbar {
  -ms-overflow-style: none; /* For Internet Explorer and Edge */


const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
  {
  "id": "p-pln",
  "title": "Aplikasi Manajemen Data PT. PLN",
  "desc": "Aplikasi full-stack untuk manajemen data yang meningkatkan efisiensi alur kerja.",
  "fullDesc": "Sebagai Full-stack Web Developer, saya bertanggung jawab penuh atas pengembangan aplikasi web manajemen data dari tahap konseptual hingga implementasi. Aplikasi ini menggunakan framework Flask untuk back-end dan Tailwind CSS untuk antarmuka pengguna. Saya merancang arsitektur sistem, mengembangkan fitur-fitur kunci, dan mengoptimalkan performa untuk memastikan aplikasi berjalan dengan lancar dan aman.",
  "tech": [
    "Flask",
    "Tailwind CSS",
    "MySQL",
    "Highcharts",
    "Python"
  ],
  "color": "#0066cc",
  "image": "/pln.jpg",
  "details": [
    "Peningkatan efisiensi kerja sebesar 30%",
    "Peningkatan kecepatan render 25% melalui optimasi query",
    "Sistem otentikasi Role-Based Access Control (RBAC)",
    "Implementasi fitur CRUD dan filter pencarian lanjutan",
    "Mengoptimasi performa aplikasi dengan mengembangkan 26+ grafik interaktif (Highcharts) danmengoptimasi query MySQL, yang menghasilkanpeningkatan kecepatan render sebesar 25%"
  ]
}, 
   {
  "id": "p-inti",
  "title": "Sistem Manajemen Kontrak PT. INTI",
  "desc": "Aplikasi web untuk manajemen kontrak properti yang meningkatkan efisiensi alur kerja.",
  "fullDesc": "Sebagai Full-stack Web Developer, saya bertanggung jawab dalam mengembangkan sistem manajemen kontrak properti berbasis web. Aplikasi ini dibangun menggunakan framework CodeIgniter. Fitur-fitur utamanya mencakup otentikasi LDAP untuk login terpusat, fitur CRUD untuk pengelolaan data yang efisien, dan notifikasi email otomatis untuk pelaporan real-time, yang secara keseluruhan meningkatkan efisiensi dokumentasi dan pengelolaan aset.",
  "tech": [
    "CodeIgniter",
    "PHP",
    "MySQL",
    "LDAP",
    "HTML",
    "CSS"
  ],
  "color": "#e07d0f",
  "image": "/ptinti1.jpg",
  "details": [
    "Otentikasi LDAP untuk login terpusat",
    "Notifikasi email otomatis untuk pelaporan real-time",
    "Pengelolaan aset dan dokumentasi yang efisien",
    "Implementasi fitur CRUD dan filter pencarian lanjutan"
  ]
}
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
    document.body.style.overflow = 'auto';
  };

  const handleLiveDemoClick = () => {
    alert('Proyek ini bersifat internal dan dikembangkan khusus untuk pengelolaan data perusahaan, sehingga tidak dapat ditampilkan atau diakses publik demi menjaga kerahasiaan dan keamanan data');
  };

  return (
    <section className="container -mt-40 relative overflow-hidden" id="project">
      {/* Project Grid Section */}
      <div id="project-grid" className="relative px-4 md:px-8 ">
        <div className='py-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-medium text-black/80 mb-4">
              <ParallaxReveal paragraph="PROJECTS"/>
            </h1>
            <p className="text-lg text-black/50 mb-6 max-w-2xl mx-auto">
              <ParallaxReveal paragraph="These projects highlight my expertise in building seamless, end-to-end applications. Select a project to explore its details."/>
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-black/80/30 cursor-pointer hover:border-black/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-black/50" style={{ backgroundColor: project.color }}>
                  {project.tech[0]}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black/80 mb-2">{project.title}</h3>
                <p className="text-black/60 mb-4">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-black/20 text-black/80 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-black/80 text-sm font-medium flex items-center group">
                  View Details
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-md"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-black/50 rounded-xl overflow-y-auto max-w-4xl w-full max-h-[90vh] border border-black/80/30 hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <button 
                  className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
                  onClick={closeProjectModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6 pt-16">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <p className="text-white mt-2">{selectedProject.desc}</p>
                </div>
              </div>
              
              {/* Modal Body */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                    <p className="text-white leading-relaxed">{selectedProject.fullDesc}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 rounded-full text-sm font-medium text-white" 
                          style={{ backgroundColor: selectedProject.color }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-500 mr-2">■</span>
                      <span className="text-white">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center pt-6 border-t border-black/50">
                  <button onClick={handleLiveDemoClick} className="px-6 py-2 rounded-full bg-black/50 text-white hover:bg-gray-700 transition-colors">
                    View Live Demo
                  </button>
                  {selectedProject.id === 'p-inti' && (
                    <a 
                      href="LINK_GOOGLE_DRIVE_ANDA_DI_SINI" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-6 py-2 rounded-full text-white flex items-center" 
                      style={{ backgroundColor: selectedProject.color }}
                    >
                      Sertifikat
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;