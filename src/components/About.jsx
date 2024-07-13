import img1 from './image/picture.jpg';
import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center p-4 lg:p-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/3">
          <img
            src={img1}
            alt="Profile"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold tracking-wider mb-4">ABOUT</h2>
          <h3 className="text-2xl font-semibold mb-4">Here is a <a class="underline decoration-blue-500">little</a> background</h3>
          <p className="text-gray-800">
            Web developer with a passion for AI and ML, pursuing B.Tech in AI/ML. I offer professional web
            development services with expertise in JavaScript, TypeScript, React, and Node.js. Alongside my
            development work, I am actively exploring deep learning and its applications. I thrive in fast-
            paced environments, enjoy tackling challenging projects, and believe in continuous learning.
            Let's connect to create innovative web solutions and explore the future of technology together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;