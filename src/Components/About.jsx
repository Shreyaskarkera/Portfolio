import React from 'react';
import Button from './Buttons/Button';
import NavigationButton from './NavigationButton';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <div className="mt-24 px-4 sm:px-6 md:px-12 lg:px-24">
                {/* ABOUT Heading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-[var(--text-color)] mb-3 tracking-[0.10em] sm:tracking-[0.12em] md:tracking-[0.15em]"
                >
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-normal text-[var(--maintext-color)] tracking-[0.15em] md:tracking-[0.20em] mt-8">
                        ABOUT
                    </span>
                </motion.p>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed sm:leading-8 md:leading-10 lg:leading-[3rem] tracking-wide text-[var(--text-color)]"
                >
                    I’m Shreyas Karkera, a passionate web developer who loves creating clean,
                    modern, and responsive websites.
                </motion.p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-9 mb-12 sm:mb-16 justify-center items-center">
                <Button name="Resume" />
                <Link to="/more-about">
                    <Button name="More" />
                </Link>
            </div>

            {/* Navigation Button */}
            <div className="flex justify-center">
                <NavigationButton name="PROJECTS" />
            </div>
        </>
    );
};

export default About;
