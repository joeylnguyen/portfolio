import React from 'react';
import { buttonStyles } from './styles';

const Hero = () => {
  return (
    <section id="Hero" className="text-sm md:text-xl h-screen flex flex-col justify-center items-center text-center pt-24 pb-32 snap-start">
      <h1 className="text-gray-500 ">Hello! My name is</h1>
      <h2 className="text-5xl md:text-7xl font-extrabold text-gray-800">Joey Nguyen</h2>
      <div className="text-gray-500 md:text-2xl my-8 lg:my-10 max-w-4xl">
        <p>
          I'm a software engineer that loves building websites, applications, and pretty much anything that gets my gears turning.
        </p>
      </div>
      <a href="mailto:joeylnguyen95@gmail.com" className={`text-lg flex flex-col justify-center w-40 h-16 text-center ${buttonStyles}`}>Contact Me</a>
    </section>
  )
}

export default Hero;
