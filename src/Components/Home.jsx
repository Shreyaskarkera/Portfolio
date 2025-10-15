import React from 'react'
import { motion } from "framer-motion";
import NavigationButton from './NavigationButton';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#262626] text-white text-center">

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-8xl font-light text-[var(--text-color)] mb-3 tracking-[0.15em]"
            >
                CREATIVE
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.5 }}
                className="text-8xl font-semibold tracking-[0.24em] text-[var(--maintext-color)] font-serif"
            >
                FRONTEND
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-8xl font-light text-[var(--text-color)] tracking-[0.15em]"
            >
                DEVELOPER
            </motion.p>
            <NavigationButton name='ABOUT' />
        </div>
    )
}

export default Home
