import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import heroImage from '/image.png';
import ParallaxReveal from './ParallaxReveal';

const HeroSection = () => {
  const [showButton, setShowButton] = useState(false);
  const [clipPath, setClipPath] = useState('polygon(0 0, 100% 0, 100% 100%, 0 100%)');

  useEffect(() => {
    const handleScroll = () => {
      // Logic for the 'Scroll to Top' button
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      // Logic for the 'scroll up' clip-path animation
      const scrollY = window.scrollY;
      const animationHeight = window.innerHeight;
      const scrollPercentage = Math.min(scrollY / animationHeight, 1);
      
      // Calculate the inverted Y value for the bottom of the polygon
      const yValue = 100 - (scrollPercentage * 100);

      // Update the clipPath state
      setClipPath(`polygon(0 0, 100% 0, 100% ${yValue}%, 0 ${yValue}%)`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="container font-Inter h-screen md:py-24 grid md:grid-cols-3 lg:grid-cols-3 gap-8 items-center relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-bottom rounded-lg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 20%',
          clipPath: clipPath,
          transition: 'clip-path 1s ease-out' // Changed to a slower transition
        }}
      ></div>

      {/* Hero content */}
      <div className="md:col-span-1 lg:col-span-1 space-y-2 z-10 py-40 md:py-20 relative px-6 md:mt-0 mt-20">
    
        <h1 className="text-4xl md:text-5xl lg:text-8xl text-black/80"><ParallaxReveal paragraph="Dani Ramdani"/></h1>
        <p className="text-lg md:text-xl text-black/50"><ParallaxReveal paragraph="Fullstack Web Developer"/></p>
      </div>

      <div className="md:col-span-1 lg:col-span-1 flex justify-center z-10 relative"></div>
<div className="md:col-span-1 lg:col-span-1 flex justify-end items-start mt-4 md:mt-0 z-10">
  <div className="absolute md:bottom-16 bottom-16 md:right-6 text-right text-start text-black/50 font-medium max-w-60">
    <p className="text-xs"><ParallaxReveal paragraph="Simplifying and Humanizing"/> <br /> <ParallaxReveal paragraph="The Bridge Between Ideas and Reality."/></p>
  </div>
</div>

      {/* 'Scroll to Top' button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-black text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};

export default HeroSection;