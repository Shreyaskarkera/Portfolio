import React from 'react';
import Button from "./Buttons/Button.jsx"

const MoreProjects = () => {

  const projectDetails = [
    {
      date: 2025,
      name: "Urban Care",
      github: true,
      live: false
    },
    {
      date: 2025,
      name: "CryptoDex",
      github: true,
      live: true
    }
  ];

  return (
    <div className="text-white mt-30 w-full flex justify-center">
      <table className="w-full max-w-4xl border-collapse text-center">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="py-2">Date</th>
            <th className="py-2">Name</th>
            <th className="py-2">Links</th>
          </tr>
        </thead>

        <tbody>
          {projectDetails.map((project, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-2">{project.date}</td>
              <td className="py-2">{project.name}</td>
              <td className="py-2">
                <div className="flex justify-center items-center gap-3">
                  {project.github && <Button name="Github" />}
                  {project.live && <Button name="Live" />}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoreProjects;
