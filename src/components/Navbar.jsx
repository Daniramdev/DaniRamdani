import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'cv', label: 'CV', href: 'https://drive.google.com/file/d/1ETx9qy0eFh9eWXKYiXEkVjhvBF0_732i/view?usp=drive_link' }
  ];

 
  return (
    <nav className="fixed w-full top-0 z-40">
      <div className="container mx-auto flex justify-between items-center relative px-4">
        
        <div className="flex md:-translate-x-10 items-center  left-4 md:left-8 z-50">
          <a href="/" className="flex items-center">
            <img 
              src="/l.png"
              alt="Website Logo" 
              className="h-20 w-14"
            />
          </a>
        </div>

        <div className='z-50'>
          <button 
            onClick={toggleMenu}
            className="focus:outline-none p-2 group"
            aria-label="Toggle menu"
          >
            <div className="relative w-14 h-4">
              <span className={`absolute top-0 left-0 w-10 h-0.5 bg-black/80 transform transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2 bg-black' : 'group-hover:bg-black/90'}`}></span>
              <span className={`absolute bottom-0 left-0 w-10 h-0.5 bg-black/80 transform transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2 bg-black' : 'group-hover:bg-black/90'}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      <div className={`bg-[#DADBDF] top-0  z-40  -mt-20 backdrop-blur-sm w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col text-center md:text-6xl text-4xl gap-8 min-h-screen">
          <div className="flex-grow flex flex-col justify-center space-y-8 py-40">
            {navItems.map((item, index) => (
              <a 
                key={item.id}
                href={item.href} // Menggunakan href dari objek navItems
                className="relative py-2 px-4 group font-medium text-black/80"
                onClick={toggleMenu}
                target={item.id === 'cv' ? "_blank" : "_self"} // Menambahkan target="_blank" untuk CV
                rel={item.id === 'cv' ? "noopener noreferrer" : ""}
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: isOpen ? `${200 + (index * 100)}ms` : '0ms',
                  transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease'
                }}
              >
                <span className="relative inline-block overflow-hidden">
                  <span className="block group-hover:-translate-y-full transition-transform duration-500">
                    {item.label}
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                    {item.label}
                  </span>
                </span>
                
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform -translate-x-1/2 group-hover:w-full transition-all duration-700 origin-center"></span>
              </a>
            ))}
          </div>

          <div 
            className="py-20 flex justify-center space-x-6"
            style={{
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease',
              transitionDelay: isOpen ? '700ms' : '0ms'
            }}
          >
           
               
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;