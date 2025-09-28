import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa'; // Added for completeness, if you use it here
import RoundedButton from './RoundedButton';
import MagneticButton from './MagneticButton';

// This is the ParallaxReveal component integrated here
const reveal = {
    initial: {
        y: '100%',
    },
    open: i => ({
        y: '0%',
        transition: { duration: 0.5, delay: 0.01 * i },
    }),
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


const AboutSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [clipPathValue, setClipPathValue] = useState('circle(96.8% at 50% 3%)');
    const sectionRef = useRef(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const accordionItems = [
        {
            title: 'Pengalaman',
            content: (
                <p className="text-md font-medium text-justify">
                  Full-stack Web Developer with experience in the state-owned enterprise (PT. INTI and PLN iConnect), proficient in the Python (Flask) and PHP (Laravel & CodeIgniter) ecosystems. My expertise spans the entire development lifecycle, from designing RESTful APIs to implementing interactive statistical data visualizations and LDAP-based authentication systems. I'm accustomed to working with large-scale databases, focusing on performance and security optimization, and building modern user interfaces with Tailwind CSS for an optimal experience.
                </p>
            ),
        },
        {
            title: 'Skill',
            content: (
                <>
                    <p><strong className="font-bold">Framework:</strong> Python (Flask), PHP (CodeIgniter, Laravel), Javascripts</p>
                    <p><strong className="font-bold">Basis Data:</strong> MySQL, PostgreSQL (Optimasi Query)</p>
                    <p><strong className="font-bold">Desain & UI:</strong> Tailwind CSS, Bootstrap, Figma</p>
                    <p><strong className="font-bold">Arsitektur & Metodologi:</strong> RESTful API, OOP, CRUD, RBAC, LDAP</p>
                    <p><strong className="font-bold">Version Control:</strong> Git (GitHub)</p>
                    <p><strong className="font-bold">Deployment & DevOps:</strong> Docker</p>
                </>
            ),
        },
        {
            title: 'Hobi',
            content: <p className="text-md font-medium">Playing futsal and listening to music.</p>,
        },
    ];

    const introParagraph = "Sebagai Fullstack Developer dengan pengalaman lebih dari 2 tahun, saya bersemangat berkolaborasi dengan tim untuk mendapatkan inovasi dan memberikan solusi yang efektif.";

    return (
        <div
            ref={sectionRef}
            className="md:h-[260vh] h-[180vh]"
            id="about"
            style={{
                clipPath: clipPathValue,
                background: 'linear-gradient(to top, #b6b6b6ff, #aaaaaaff)',
                transition: 'clip-path 0.1s ease-out',
            }}
        >
            <div className='container'>
                <div className="p-6 max-w-xl text-justify font-semibold">
                    <MagneticButton>
                        <RoundedButton>
                            <div className='right-4'>
                                <h1 className='text-gray-500'>About</h1>
                            </div>
                        </RoundedButton>
                    </MagneticButton>
                    <p className="mt-40 md:mt-20 text-xl text-black/90 text-justify leading-relaxed">
                        <ParallaxReveal paragraph={introParagraph} />
                    </p>
                </div>

                <div className="space-y-2 md:h-full mb-20 md:mb-40 mx-auto">
                    {accordionItems.map((item, index) => (
                        <div key={index} className={`accordion-item border-b border-gray-400 overflow-hidden ${openIndex === index ? 'is-open' : ''}`}>
                            <button
                                className="accordion-button flex justify-between items-center w-full p-4 text-left cursor-pointer"
                                onClick={() => handleAccordionClick(index)}
                            >
                                <span className="text-2xl md:text-5xl md:text-8xl font-semibold text-black/50 transition-transform duration-300 transform hover:scale-125">
                                    {item.title}
                                </span>
                                <span className={`accordion-icon text-2xl text-gray-600 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
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
        </div>
    );
};

export default AboutSection;