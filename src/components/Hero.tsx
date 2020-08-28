import React from 'react';
import { buttonStyles } from './styles';

const Hero = () => {
  return (
    <section className="text-sm md:text-lg h-screen flex flex-col justify-center text-left">
      <h1 className="text-gray-500 ">Hello! My name is</h1>
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 ">Joey Nguyen.</h2>
      <div className="text-gray-500 my-4 lg:mb-20 lg:my-10 ">
        <p>
          {`I'm a software engineer that loves building websites, applications, and pretty much anything that gets my gears turning. I enjoy problem-solving, working with others, and - most of all - learning.`}
        </p>
        <p className="mt-5 ">
          {`I'm actively looking for new job opportunities, so feel free to shoot me an email if you'd like to chat!`}
        </p>
      </div>
      <div className="mt-16">
        <a href="mailto:joeylnguyen95@gmail.com" className={`px-8 py-4 mr-4 leading-none ${buttonStyles}`}>Contact Me</a>
      </div>

    </section>
  )
}

export default Hero;
