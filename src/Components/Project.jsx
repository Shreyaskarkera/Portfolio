import React from 'react'
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import UrbanCare from "../assets/urbanCare.png";
import CryptoDex from "../assets/cryptodex.png";
import NavigationButton from './NavigationButton';
import Button from './Buttons/Button';

const Project = () => {
    return (
        <>
            <div className="h-screen px-4 md:px-12 lg:px-24 flex flex-col justify-center items-start gap-10 mt-10">

                {/* Heading */}
                <p className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-normal text-[var(--maintext-color)] tracking-[0.12em] md:tracking-[0.20em]">
                    PROJECTS
                </p>

                {/* Project Cards */}
                <div className="flex flex-col gap-1">
                    <ProjectCard
                        image={UrbanCare}
                        title="Urban Care"
                        description="Urban Care is a city management system where citizens can report issues."
                    />
                    <ProjectCard
                        image={CryptoDex}
                        title="CryptoDex"
                        description="CryptoDex is a cryptocurrency tracker that gives real-time updates."
                    />
                </div>

                {/* More Button */}
                <Link to="/more-projects">
                    <Button name="More" />
                </Link>
            </div>

            {/* Navigation Button */}
            <div className=" bottom-4 sm:bottom-10 w-full flex justify-center">
                <NavigationButton name="CONTACT" />
            </div>
        </>
    );
};

export default Project;
