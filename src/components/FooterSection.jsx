// 🛰️ FOOTER SESSION – CYBER UNIX 2025
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FooterSession = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className=" container border-t py-4 border-b/30 mt-40 text-black/80">
      <div className=" items-center flex justify-center font-medium">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-6">
          <div className="flex items-center  space-x-2 col-span-2 md:col-span-1">
            <img src="/l.png" alt="CyberUnix Logo" className="h-24" />
            <div>
              <h3 className="text-xl font-bold mb-2">Dani Ramdani</h3>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Kontak</h3>
            <div className="flex flex-col space-y-1 text-sm gap-2">
              <a href="https://drive.google.com/file/d/1_UOHFTPSpkwtn_nOUtSNGv7vC18AzJgm/view?usp=drive_link" className="hover:text-black transition">Read.CV</a>
              <a href="mailto:danird1240@gmail.com" className="hover:text-black transition">Email</a>
              <a href="#" className="hover:text-black transition">+62 881-0128-04615</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Social Media</h3>
            <div className="flex flex-col space-y-1 text-sm gap-2">
              <a href="https://www.instagram.com/danird_7?igsh=MXZiMnRy4dnhpePNOZg==" className="hover:text-black transition">Instagram</a>
              <a href="https://www.facebook.com/share/!2CcaleQKY8/" className="hover:text-black transition">Facebook</a>
              <a href="https://www.linkedin.com/in/dani-ramdani-254284344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-black transition">LinkedIn</a>
               <a href="https://facebook.com/your-profile" className="hover:text-black transition">GitHub</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <div className="flex flex-col space-y-1 text-sm gap-2">
              <p>📍 Bandung, Majalaya</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">LIVE CLOCK</h3>
            <motion.p
              key={time.toLocaleTimeString()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm"
            >
              {time.toLocaleTimeString()} – UTC+7
            </motion.p>
          </div>
        </div>

        {/* Bottom row */}
      </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Powered by React • TailwindCSS</p>
        </div>
    </footer>
  );
};

export default FooterSession;