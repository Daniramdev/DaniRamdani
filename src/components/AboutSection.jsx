import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Ditambahkan AnimatePresence
import { FaArrowUp } from 'react-icons/fa'; 
// Asumsi Anda memiliki komponen ini
import RoundedButton from './RoundedButton'; 
import MagneticButton from './MagneticButton'; 

// --- IMPOR DATA BARU (ASUMSI PATH BENAR) ---
// Pastikan file data/aboutData.js sudah dibuat
// import { accordionItems, introParagraph } from './data/aboutData'; 
// Karena data tidak diimpor, saya gunakan definisi lokal:
const introParagraph = "As a Fullstack Developer with over 2 years of experience, I am passionate about collaborating with teams to innovate and deliver effective solutions.";
const accordionItems = [
    { title: 'Experience', content: <p className="text-md font-medium text-justify">Full-stack Web Developer with experience in the state-owned enterprise (PT. INTI and PLN iConnect), proficient in the Python (Flask) and PHP (Laravel & CodeIgniter) ecosystems...</p> },
    { title: 'Skill', content: <><p><strong className='font-bold'>Back-End:</strong> Python (Flask), PHP (CodeIgniter)</p>...</> },
    { title: 'Hobby', content: <p className="text-md font-medium">Playing futsal and listening to music.</p> },
];


// --- PARALLAX REVEAL COMPONENT ---
const reveal = {
    initial: { y: '100%' },
    open: i => ({ y: '0%', transition: { duration: 0.5, delay: 0.01 * i } }),
};

function ParallaxReveal({ paragraph }) {
    const words = paragraph
        .split(' ')
        .map((word, index) => ({ id: index, word }));

    const text = words.map(({ id, word }) => (
        <span key={id} className='me-2 inline-flex overflow-hidden'>
            <motion.span
                custom={id}
                variants={reveal}
                initial='initial'
                whileInView='open'
            >
                {word}
            </motion.span>
        </span>
    ));
    return <>{text}</>;
}


// --- DATA GAMBAR SLIDE ---
const imageList = [
    "/dani.png",
    "/dani3.png",
    "/dani4.png", 
    
];

// --- VARIANTS UNTUK EFEK SLIDE GAMBAR ---
const imageVariants = {
    exit: { 
        x: "-100%", 
        opacity: 0, 
        transition: { duration: 0.5 } 
    },
    initial: { 
        x: "100%", 
        opacity: 0 
    },
    animate: { 
        x: "0%", 
        opacity: 1, 
        transition: { duration: 0.5 } 
    }
};


// -------------------------------------------------------------------
// ----------------------- ABOUT SECTION COMPONENT -------------------
// -------------------------------------------------------------------

const AboutSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [clipPathValue, setClipPathValue] = useState('circle(96.8% at 50% 3%)');
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    const sectionRef = useRef(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // --- LOGIC SCROLL CLIP-PATH & AUTO-SLIDE GAMBAR ---
    useEffect(() => {
        // 1. Clip-Path Scroll Logic
        const handleScroll = () => {
            if (sectionRef.current) {
                const section = sectionRef.current;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY;

                const startAnimation = sectionTop - window.innerHeight / 2;
                const endAnimation = sectionTop + sectionHeight;

                if (scrollPosition >= startAnimation && scrollPosition <= endAnimation) {
                    const progress = (scrollPosition - startAnimation) / (endAnimation - startAnimation);
                    const newClipPercentage = 96.8 - (96.4 * progress);
                    setClipPathValue(`circle(${newClipPercentage}% at 50% 3%)`);
                }
            }
        };

        // 2. Auto-Slide Image Logic
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => 
                (prevIndex + 1) % imageList.length
            );
        }, 5000); // Ganti setiap 5 detik

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(intervalId); // Cleanup interval
        };
    }, []);


    return (
        <div
            ref={sectionRef}
            className="md:h-[260vh] h-[550vh] relative" // Tambahkan relative
            id="about"
            style={{
                clipPath: clipPathValue,
                background: 'linear-gradient(to top, #b6b6b6ff, #aaaaaaff)',
                transition: 'clip-path 0.1s ease-out',
                
            }}
        >
            <div className='container z-20 mx-auto px-4'> 
                   {/* About Button */}
                <MagneticButton> {/* Asumsi komponen ini diimpor */}
                    <RoundedButton> {/* Asumsi komponen ini diimpor */}
                        <div className='right-4'>
                            <h1 className='text-gray-500'>About</h1>
                        </div>
                    </RoundedButton>
                </MagneticButton>

                {/* === RESPONSIVE: GAMBAR DAN DESKRIPSI (Grid 1/2) === */}
                <div className="p-10 max-w-5xl mx-auto h-screen  font-semibold"> 
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'>
                        
                        {/* Kolom 1: Deskripsi Teks + Akordeon (Mobile: Bawah, Desktop: Kiri) */}
                        <div className="w-full order-2 md:order-1 py-20">
                            
                            {/* Deskripsi Teks */}
                            <p className="mt-0 md:mt-6 text-xl text-black/90 text-justify leading-relaxed">
                                <ParallaxReveal paragraph={introParagraph} />
                            </p>
                            
                            {/* === AKORDEON === */}
                            <div className="space-y-2 md:h-full mb-20 md:mb-40 mx-auto max-w-5xl"> 
                                {accordionItems.map((item, index) => (
                                    <div key={index} className={`accordion-item border-b border-gray-400 overflow-hidden`}>
                                        <button
                                            className="accordion-button flex justify-between items-center w-full p-4 text-left cursor-pointer"
                                            onClick={() => handleAccordionClick(index)}
                                        >
                                            <span className="text-4xl md:text-2xl lg:text-4xl font-semibold text-black/50 transition-transform duration-300 transform hover:scale-105">
                                                {item.title}
                                            </span>
                                            <span className={`accordion-icon text-3xl md:text-5xl text-gray-600 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
                                        </button>
                                        <div className="accordion-content overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: openIndex === index ? '1000px' : '0' }}>
                                            <div className="p-4 pt-0 text-black/90 font-medium">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Kolom 2: Gambar (Mobile: Atas, Desktop: Kanan) - DENGAN SLIDE EFFECT */}
                        <div className="w-full mt-20 flex justify-center md:justify-end pt-20 md:pt-40 order-1 md:order-2 relative overflow-hidden h-[620px]"> 
                            {/* Tinggi (h-[...]) diatur agar AnimatePresence berfungsi dengan baik */}
                            <AnimatePresence initial={false} mode="wait">
                                <motion.img 
                                    key={currentImageIndex} // Kunci unik untuk Framer Motion
                                    src={imageList[currentImageIndex]} 
                                    alt={`Dani Ramdani - Image ${currentImageIndex + 1}`} 
                                    
                                    // Terapkan Variants Slide
                                    variants={imageVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    
                                    // Styling: absolute agar tumpang tindih saat transisi
                                    className="w-2/3 md:w-full h-full object-cover rounded-lg shadow-lg absolute top-0 left-0"
                                    style={{ width: '100%' }} // Memastikan gambar mengisi kontainer absolute
                                />
                            </AnimatePresence>
                        </div>
                        
                    </div>
                </div>
                {/* ======================================= */}
                
             
                
            </div>
        </div>
    );
};

export default AboutSection;