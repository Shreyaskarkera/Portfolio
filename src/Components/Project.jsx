import React from 'react'
import ProjectCard from './ProjectCard'
import UrbanCare from "../assets/urbanCare.png"
import CryptoDex from "../assets/cryptodex.png"
import NavigationButton from './NavigationButton'
const Project = () => {
    return (
        <>
            <div className='h-screen px-4 md:px-12 lg:px-24 flex flex-col justify-center md:mt-20'>

                <p className='text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-normal text-[var(--maintext-color)] tracking-[0.12em] md:tracking-[0.20em] md:mb-10'>PROJECTS</p>
                <ProjectCard image={UrbanCare} title='Urban Care' description='Urban care is city management system where citizens can report issues' />
                <ProjectCard image={CryptoDex} title='CryptoDex' description='Crypto dex is crypto currency trcker it gives a real time update of crypto currency' />
                <NavigationButton name='CONTACT' />
            </div>
        </>
    )
}

export default Project
