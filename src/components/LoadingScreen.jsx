// src/components/LoadingScreen.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  { text: 'Hello', font: 'font-sans' },
  { text: 'Halo', font: 'font-sans' },
  { text: 'Bonjour', font: 'font-sans' },
  { text: 'Hola', font: 'font-sans' },
  { text: 'مرحبًا', font: 'font-arabic' },
  { text: 'Olá', font: 'font-sans' },
  { text: 'こんにちは', font: 'font-japanese' },
  { text: '안녕하세요', font: 'font-korean' },
  { text: 'Nǐ hǎo', font: 'font-chinese' },
];

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cycle through messages every 500ms
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 500);

    // Clean up timers
    return () => {
      clearTimeout(loadingTimer);
      clearInterval(messageInterval);
    };
  }, []);

  const loadingVariants = {
    initial: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center z-50 text-gray-500"
          variants={loadingVariants}
          initial="initial"
          exit="exit"
        >
          <motion.h1
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`text-4xl md:text-6xl font-bold ${messages[currentMessageIndex].font}`}
          >
            {messages[currentMessageIndex].text}
          </motion.h1>
         
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;