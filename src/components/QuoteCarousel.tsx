import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const quotes = [
    "Code is poetry written for machines to execute and humans to understand.",
    "In the world of ones and zeros, creativity knows no bounds.",
    "Every bug is just an opportunity for growth in disguise.",
    "The best code is written with empathy for those who will read it."
];

export function QuoteCarousel() {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-32 flex items-center justify-center overflow-hidden">
            <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-gray-600 italic text-center"
            >
                "{quotes[currentQuote]}"
            </motion.p>
        </div>
    );
}