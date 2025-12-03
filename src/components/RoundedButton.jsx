import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Button({ children }) {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    // Timeline for the circle animation
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circleRef.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circleRef.current,
        { top: "-150%", width: "125%", duration: 0.25, ease: "power3.out" },
        "exit"
      )
      .set(circleRef.current, { top: "100%", width: "100%" });
  }, []);

  const handleMouseEnter = () => {
    timeline.current.tweenFromTo("enter", "exit");
    
    // GSAP for magnetic effect on hover
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.2,
      ease: "power3.out"
    });
  };

  const handleMouseLeave = () => {
    timeline.current.play();

    // GSAP for magnetic effect on mouse leave
    gsap.to(buttonRef.current, {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.2,
      ease: "power3.out"
    });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-full h-40 w-full cursor-pointer flex items-center justify-center will-change-transform"
    >
      <p className="relative z-10 transition-colors duration-400 text-4xl text-black">
        {children}
      </p>
      <div
        ref={circleRef}
        style={{ backgroundColor: "#222222ff" }}
        className="absolute w-[100%] h-75 rounded-full top-full transform z-0"
      ></div>
    </div>
  );
}