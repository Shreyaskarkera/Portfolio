import React from 'react'
import ProfileImg from '../assets/paulwalker.jpeg'
import { motion } from "framer-motion";
import Button from './Buttons/Button';
const MoreAbout = () => {
    return (
        <>

            <div className="grid grid-cols-4 md:grid-cols-12  mt-15 gap-6 md:gap-12">
                {/* Image Section */}
                <div className="col-span-2 md:col-span-4 h-[50vh]  md:h-[70vh] lg:h-[85vh] my-6">
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
                            className="text-[32px] md:text-8xl font-black ">
                            Frontend Developer<span className="text-white">,</span> UI Designer
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            className='font-medium text-[12px] md:text-[16px]  text-[var(--text-color)]  md:tracking-[0.15em]s mt-8 md:leading-8'>
                            Hello! I’m Shreyas Karkera, a web developer and UI/UX enthusiast from India, with a Bachelor’s degree in Computer Applications from Srinivas University.
                            Over the years, I’ve built responsive web solutions, dashboards, and full-stack applications, using technologies like HTML, CSS, JavaScript, PHP, and MySQL.
                            I love transforming ideas into intuitive digital experiences, blending robust functionality with elegant design.</motion.p>
                    </div>
                </div>
                <div className="col-span-4 md:col-span-12 text-white">


                    {/* Skill & Interest + Education */}
                    <div className="col-span-4 md:col-span-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 text-white mt-10">

                        {/* Skill & Interest */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.85 }}
                                className="font-bold md:text-3xl"
                            >
                                Skill & Interest
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, delay: 1 }}
                                className="mt-10 text-[var(--text-color)] leading-7"
                            >
                                I’m passionate about continuous learning and constantly improving my skills to keep up with the fast-changing world of web development. I thrive in creative, collaborative environments that value innovation and user-centered design.

                                <span className="block mt-6">
                                    I enjoy crafting responsive web applications, designing clean interfaces, and exploring UI/UX principles that enhance user experiences. Photography, travel, and long rides inspire my creativity.
                                </span>
                            </motion.p>
                        </div>

                        {/* Education */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                className="font-bold md:text-3xl"
                            >
                                Education
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, delay: 1.2 }}
                                className="mt-10 text-[var(--text-color)] leading-7 space-y-6"
                            >
                                <div>
                                    <p className="font-medium text-white">Bachelor of Computer Applications</p>
                                    <p className="text-sm">Srinivas University • 2022 - 2025</p>
                                </div>

                                <div>
                                    <p className="font-medium text-white">Pre-University (Science)</p>
                                    <p className="text-sm">Govt PU College • 2020 - 2022</p>
                                </div>

                                <div>
                                    <p className="font-medium text-white">SSLC</p>
                                    <p className="text-sm">St Aloysius High School • 2019 - 2020</p>
                                </div>
                            </motion.div>
                        </div>

                    </div>


                </div>


            </div>
            <div className="w-full flex flex-row justify-between items-center mb-5 md:mb-10 mt-10 md:mt-20">
                <div className="flex items-center justify-center">
                    <a
                        href='shreyasResume.pdf'
                        target='_blank'
                    >
                        <Button name="Resume" />
                    </a>
                </div>
                <div className="justify-start">
                    <p className="text-white text-lg font-medium">Contact</p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyasbkutlu@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="text-sm text-[var(--text-color)] cursor-pointer">
                            shreyasbkutlu@gmail.com
                        </p>
                    </a>

                </div>
            </div>

        </>
    )
}

export default MoreAbout
