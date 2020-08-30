import React from 'react';
import { buttonStyles } from './styles';

const Hero = () => {
  return (
    <section id="Hero" className="text-sm md:text-lg h-screen flex flex-col justify-center items-center text-center py-32">
      <h1 className="text-gray-500 ">Hello! My name is</h1>
      <h2 className="text-5xl md:text-7xl font-extrabold text-gray-800">Joey Nguyen</h2>
      <div className="text-gray-500 my-8 lg:my-12 max-w-4xl">
        <p>
          {`I'm a software engineer that loves building websites, applications, and pretty much anything that gets my gears turning. I enjoy problem-solving, working with others, and - most of all - learning.`}
        </p>
        <p className="mt-5">
          {`I'm actively looking for new job opportunities, so feel free to shoot me an email if you'd like to chat!`}
        </p>
      </div>
      <a href="mailto:joeylnguyen95@gmail.com" className={`text-lg flex flex-col justify-center w-40 h-16 text-center ${buttonStyles}`}>Contact Me</a>
    </section>
  )
}

export default Hero;
