import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import heroImage from '/danix.png';
import ParallaxReveal from './ParallaxReveal';

const HeroSection = () => {
  const [showButton, setShowButton] = useState(false);
  const [clipPath, setClipPath] = useState('polygon(0 0, 100% 0, 100% 100%, 0 100%)');
  
  // 1. Definisikan Marquee Content
  const baseText = "Daniramdani Daniramdani Daniramdani Daniramdani ";
  const marqueeContent = baseText.repeat(5); // Ulangi 5 kali

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
    <section className=" font-Inter h-screen gap-8 ">
      
      {/* Gambar Hero dengan clip-path */}
   <div
    className="absolute z-10 inset-0 bg-cover w-full  h-[100%] md:w-[50%] md:left-[25%]"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundPosition: 'center 4%',
      clipPath: clipPath,
      transition: 'clip-path 1s ease-out'
    }}
  />
      {/* 2. Marquee Content */}
      {/* Tempatkan di posisi latar belakang, z-index rendah */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-1"> 
          <div className="marquee-container   text-[200px]"> 
              {/* Duplikasi konten dua kali di H1 untuk loop seamless */}
              <h1 className="marquee-text text-shadow-lg text-neutral-600">
                  {marqueeContent}
                  {marqueeContent} 
              </h1>
          </div>
      </div>
      
     
      
   <div className='relative h-[100%] px-20'>
        <div className='absolute md:left-[55%] left-[60%] z-20  md:bottom-[15rem] bottom-[28rem]'> 
          <img src="/arrow.svg" alt="" className=' h-10 md:h-16' />
        </div>
    <div className='absolute inset-x-0 bottom-24 flex justify-between md:px-[60px]  z-20 text-justify px-2'>
     <div className='md:w-[60vh] w-[40vh] text-xs'>
          <h1>I am ready to collaborate in designing and developing together to provide the best, modern, responsive and in accordance with the challenges of the times to meet your needs.</h1>
        </div>
        <div className='w-[20vh] md:w-[80vh] -mt-[36vh] md:-mt-[18vh] text-xs md:text-lg md:right-0'>
          <h1 className='flex flex-col'>I'am Daniramdani.<span>Fullstak Developer
          </span>
 </h1>
        </div>
    </div>
   </div>
 {/* <ParallaxReveal paragraph="Simplifying and Humanizing"/> <br /> 
              <ParallaxReveal paragraph="The Bridge Between Ideas and Reality."/> */}

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