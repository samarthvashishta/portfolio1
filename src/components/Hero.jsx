// src/components/Hero.js

import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex items-center">
      <div className="container sm:mx-auto lg:mx-40 px-4">
        <p className="text-gray-400 mb-4">HELLO/NAMASTE</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-neutral-600">
          I'm a <span className="text-white">Web Developer</span> and an <span className="text-white">ML Enthusiast.</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-neutral-600">
         Currently I'm in my <span className="text-white">final year of engineering </span> pursuing <span className="text-white">B.Tech in AI/ML</span> from <span className="text-white">VIPS-TC, Delhi</span>.
        </p>
        {/* <p className="text-lg sm:text-xl md:text-2xl mt-4 text-neutral-600">
          My past design work was featured on <span className="text-white">Microsoft Docs, Youtube, Blogs</span>, and <span className="text-white">Microsoft Build Keynote ‘21</span>.
        </p> */}
      </div>
    </section>
  );
};

export default Hero;
