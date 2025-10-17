import React from 'react'
import ProfileImg from '../assets/paulwalker.jpeg'
import { motion } from "framer-motion";
const MoreAbout = () => {
    return (
        <div className="grid grid-cols-12 mt-15">
            {/* Image Section */}
            <div className="col-span-4 h-[85vh] my-6">
                <motion.img
                    src={ProfileImg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            {/* 1-column gap */}
            <div className="col-span-1"></div>

            {/* Text Section */}
            <div className="col-span-7 text-[var(--maintext-color)] mt-5">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-8xl font-black">
                    Frontend Developer<span className="text-white">,</span> UI Designer
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    className='font-medium  text-[var(--text-color)]  tracking-[0.15em]s mt-10 leading-8'>
                    Hello! I’m Shreyas Karkera, a web developer and UI/UX enthusiast from India, with a Bachelor’s degree in Computer Applications from Srinivas University.
                    Over the years, I’ve built responsive web solutions, dashboards, and full-stack applications, using technologies like HTML, CSS, JavaScript, PHP, and MySQL.
                    I love transforming ideas into intuitive digital experiences, blending robust functionality with elegant design.</motion.p>
            </div>
        </div>
    )
}

export default MoreAbout
