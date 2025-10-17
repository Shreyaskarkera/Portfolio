import React from 'react'
import { motion } from "framer-motion";
import NavigationButton from './NavigationButton';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#262626] text-white px-4 sm:px-6 md:px-12 lg:px-24">

            {/* First Line */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-[var(--text-color)] mb-3 tracking-[0.10em] sm:tracking-[0.12em] md:tracking-[0.15em]"
            >
                CREATIVE
            </motion.p>

            {/* Second Line */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-[0.18em] sm:tracking-[0.20em] md:tracking-[0.24em] text-[var(--maintext-color)]  mb-3 font-serif"
            >
                FRONTEND
            </motion.p>

            {/* Third Line */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-[var(--text-color)] tracking-[0.10em] sm:tracking-[0.12em] md:tracking-[0.15em]"
            >
                DEVELOPER
            </motion.p>

            {/* Navigation Button */}
            <div className="absolute bottom-10 left-0 w-full flex justify-center">
                <NavigationButton name='ABOUT' />
            </div>

        </div>
    )
}

export default Home
