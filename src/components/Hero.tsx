import React from 'react';
import { buttonStyles } from './styles';

const Hero = () => {
  return (
    <section className="text-sm md:text-lg flex-col text-left py-16 md:py-32 lg:py-64">
      <h1 className="text-gray-500">Hello! My name is</h1>
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800">Joey Nguyen.</h2>
      <div className="text-gray-500 my-4 md:my-10">
        <p>
          {`I'm a software engineer that loves building websites, applications, and pretty much anything that gets my gears turning. I enjoy problem-solving, working with others, and - most of all - learning.`}
        </p>
        <p className="mt-5">
          {`I'm actively looking for new job opportunities, so feel free to shoot me an email if you'd like to chat!`}
        </p>
      </div>
      <a href="mailto:joeylnguyen95@gmail.com" className={`px-8 py-4 mr-4 leading-none ${buttonStyles}`}>Contact Me</a>
    </section>
  )
}

export default Hero;
