import React from 'react';
import Button from './Buttons/Button';
import NavigationButton from './NavigationButton';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <div className="h-screen px-4 md:px-12 lg:px-24 flex flex-col justify-center">
                {/* ABOUT Heading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-[var(--text-color)] mb-3 tracking-[0.10em] sm:tracking-[0.12em] md:tracking-[0.15em]"
                >
                    <span className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-normal text-[var(--maintext-color)] tracking-[0.12em] md:tracking-[0.20em] mt-8">
                        ABOUT
                    </span>
                </motion.p>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mt-10 text-base sm:text-lg md:text-2xl lg:text-2xl leading-relaxed sm:leading-7 md:leading-10 lg:leading-[2rem] tracking-wide text-[var(--text-color)]"
                >
                    I’m Shreyas Karkera, a passionate web developer from India. I create clean, modern, and responsive websites with a focus on user experience. I enjoy turning ideas into interactive web solutions and continuously learning new technologies to enhance my craft.
                </motion.p>
                {/* Buttons */}
                <div className="flex flex-row gap-4 sm:gap-6 mt-2 mb-4 items-center justify-start">
                    <Button name="Resume" />
                    <Link to="/more-about">
                        <Button name="More" />
                    </Link>
                </div>

                {/* Navigation Button */}
            </div>
            <div className="relative bottom-4 sm:bottom-10 left-0 w-full flex justify-center px-2 sm:px-0 ">
                <NavigationButton name='PROJECTS' />
            </div>

        </>
    );
};

export default About;
