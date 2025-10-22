import React from 'react';


const ProjectCard = (props) => {
    return (
        <div className="w-full bg-[#1e1e1e] border border-gray-700 rounded-xl p-5 hover:-translate-y-2 transition-all duration-300 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 mb-5 mt-5">

            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-62">
                <img
                    src={props.image}
                    alt={props.title}
                    className=" w-full h-40 object-cover rounded-lg"
                />
            </div>


            {/* Text Section */}
            <div className="flex flex-col text-left">
                <h3 className="text-xl font-semibold text-white mb-2">{props.title}</h3>
                <p className="text-[var(--text-color)] text-sm mb-4">
                    {props.description}
                </p>
                <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF5900] text-sm font-medium hover:underline"
                >
                    View Project →
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
