// src/components/ProjectCard.js

import React from 'react';

const projects = [
  {
    title: "Citadel",
    description: "Citadel is a secure crypto wallet designed to combat financial fraud through utilizing advanced algorithms to identify suspicious activity and potential scams.",
    image: "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F8b70d6a0eb494eaaa463c4868a50a55a%2Fprojects%2F2cdb3abc48c046a8b62b6b2139248a15%2Fc809e47d-5a94-4674-a043-537411dc1566.png&w=1440&q=75",
    link: "https://devfolio.co/projects/citadel-faea"
  },
  {
    title: "PeerFund",
    description: "PeerFund: A Peer to Peer Crpyto Lending platform. Borrow and Lend, on Your Terms.",
    image: "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Ffc2ebd5e82f4468799cbf99f26d95257%2Fprojects%2Fd1b561150268464b9403abbdc54fbf84%2F2e237d74-54f8-4b0d-a5cc-a960582dec2e.png&w=1440&q=75",
    link: "https://devfolio.co/projects/peerfund-9f03"
  },
  {
    title: "TrendingOnX",
    description: "Scrape what's happening on X",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZL1J6NwjE0TogaBBCL3oAAIbHL2eFacjxkg&s",
    link: "https://github.com/samarthvashishta/TrendingOnX"
  }
  // Add more projects as needed
];

const ProjectCard = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 mb-20">
      <h2 className="text-3xl font-semibold text-left mb-8">PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
