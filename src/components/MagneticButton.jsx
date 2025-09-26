import React, { useRef } from "react";
import gsap from "gsap"; // You don't need GSAP in MagneticButton anymore

export default function MagneticButton({ children }) {
  const buttonRef = useRef(null);

  const handleMove = (clientX, clientY) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      scale: 1.05,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const resetTransform = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    resetTransform();
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    if (touch) {
      handleMove(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    resetTransform();
    // You can also add a small timeout to ensure the transform resets smoothly
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      // Apply the styling here
      className="absolute md:right-52 right-4 overflow-hidden  rounded-full md:h-32 md:w-32 w-20 h-20 font-sans border border-gray-500 cursor-pointer flex items-center justify-center will-change-transform"
    >
      {children}
    </div>
  );
}