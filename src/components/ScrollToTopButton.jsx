import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RoundedButton({
  children,
  backgroundColor = "#22d3ee",
  className = "",
  ...attributes
}) {
  const circle = useRef(null);
  const buttonRef = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  // Initialize GSAP timeline on component mount
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden rounded-full font-sans border border-gray-500 cursor-pointer flex items-center justify-center px-6 py-2 ${className}`}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...attributes}
    >
      <span className="relative z-10 text-sm text-white">
        {children}
      </span>

      <div
        ref={circle}
        style={{ backgroundColor }}
        className="absolute w-full  rounded-full top-full left-[-25%] transform z-0"
      ></div>
    </button>
  );
}