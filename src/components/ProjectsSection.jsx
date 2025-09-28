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
  "title": "PT. PLN Data Management Application",
  "desc": "A full-stack application for data management that improves workflow efficiency.",
  "fullDesc": "Full-stack developer with over 2 years of experience, focused on building data-driven solutions and high-performance web applications. Proficient in Python Flask and PHP CodeIgniter, and proven expertise in RESTful API integration and responsive design using atomic design methodology. I have a proven track record of optimizing performance and implementing robust security, resulting in operational efficiency improvements of up to 80% and uptime efficiency of 30%.",
  "tech": [
    "Flask",
    "Html",
    "Tailwind CSS",
    "MySQL",
    "Highcharts",
    "Python"
  ],
  "color": "#0066cc",
  "image": "/pln.jpg",
  "details": [
    "Built an efficient data management application using Python Flask with a responsive design using Tailwind CSS.This application successfully increased team efficiency by 30%.The application is supported by a RESTful API that ensures efficient data flow, as well as intuitive CRUD and search filter features.",
    "Designed and implemented a secure multi-level authentication system (RBAC and JWT) to ensure the integrity and confidentiality of user data.",
    "Translated complex data into easy-to-understand visualizations using over 26 interactive charts (Highcharts). The interface was intuitively and responsively designed to facilitate faster data-driven decision-making",
    "Optimized performance by designing efficient input-output data flows to handle large data volumes.This strategy, combined with MySQL query optimization,successfully increased rendering speed by up to 25%.",
    
  ]
}, 
   {
  "id": "p-inti",
  "title": "PT. INTI Contract Management System",
  "desc": "A web application for property contract management that improves workflow efficiency.",
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
    "Designed and built a property contract management system using the CodeIgniter framework, significantly improving documentation and asset management efficiency.",
    "Implemented LDAP authentication to provide a centralized and secure login system, strengthening the company's data security posture.",
    "Implemented CRUD features and advanced search filters, simplifying data tracking and workflows.",
    "Employed techniques such as pagination, lazy loading, and asynchronous processing to manage large amounts of data, ensuring a seamless user experience without compromising performance.",
    "Designed and implemented an optimal data input-output (I/O) workflow, minimizing loading times and latency when processing and displaying data.",
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
    alert('This project is internal and developed specifically for corporate data management, so it cannot be displayed or accessed by the public to maintain data confidentiality and security.');
  };

  return (
    <section className="container -mt-40 relative overflow-hidden" id="work">
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
              <ParallaxReveal paragraph="Work"/>
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
            // PERBAIKAN: Menambahkan z-50 dan p-3 untuk meningkatkan area klik di mobile
            className="absolute top-4 right-4 z-50 bg-gray-900/80 text-white p-3 rounded-full hover:bg-red-500 transition-colors"
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
        
        {/* Modal Body... (bagian ini tidak diubah) */}
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
                href="https://drive.google.com/file/d/13xCcMSZy2fSnfvdN72qV-1vEIPT8dkYv/view?usp=drive_link" 
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