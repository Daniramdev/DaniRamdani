import React from 'react';
import { motion } from 'framer-motion';

// Variants for the word-by-word reveal animation
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

    return (
        <>
            {words.map(({ id, word }) => (
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
            ))}
        </>
    );
}

export default ParallaxReveal;