import React from 'react'
import ProfileImg from '../assets/paulwalker.jpeg'
import { motion } from "framer-motion";
const MoreAbout = () => {
    return (
        <div className="grid grid-cols-4 md:grid-cols-12  mt-15 gap-6 md:gap-25">
            {/* Image Section */}
            <div className="col-span-2 md:col-span-4 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] my-6">
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



            {/* Text Section */}
            <div className='row-span-2 col-span-2 md:col-span-7 gap-20'>

                <div className=" text-[var(--maintext-color)] mt-5 ">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-3xl md:text-8xl font-black ">
                        Frontend Developer<span className="text-white">,</span> UI Designer
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        className='font-medium text-[12px]  text-[var(--text-color)]  md:tracking-[0.15em]s mt-10 md:leading-8'>
                        Hello! I’m Shreyas Karkera, a web developer and UI/UX enthusiast from India, with a Bachelor’s degree in Computer Applications from Srinivas University.
                        Over the years, I’ve built responsive web solutions, dashboards, and full-stack applications, using technologies like HTML, CSS, JavaScript, PHP, and MySQL.
                        I love transforming ideas into intuitive digital experiences, blending robust functionality with elegant design.</motion.p>
                </div>
            </div>
            <div className='col-span-4 h-[85vh] my-10 text-white'>
                <p className='font-bold text-4xl'>Skill & Interest</p>
                <p>I’m passionate about continuous learning and constantly improving my skills to keep up with the fast-changing world of web development. I thrive in creative, collaborative environments that value innovation and user-centered design. My technical strengths include HTML, CSS, JavaScript, PHP, and MySQL, along with growing experience in React and Tailwind CSS.


                    I enjoy crafting responsive web applications, designing clean interfaces, and exploring UI/UX principles that enhance user experience. Beyond coding, photography is my creative outlet — it helps me see design, balance, and composition in a whole new way. I also love long rides and exploring new places, which keep me inspired, refreshed, and full of creative energy.</p>
            </div>
        </div>
    )
}

export default MoreAbout
