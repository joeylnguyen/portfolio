import React from 'react';

const About = () => {
  return (
    <section id="About" className="flex flex-col justify-center h-screen">
      <div className="flex items-center">
        <h3 className="flex-0 mr-5 text-gray-800 text-2xl lg:text-3xl">About me</h3>
        <div className="border-b flex-1 w-full" style={{height: "8px"}}>{""}</div>
      </div>
      <div className="flex flex-col items-center lg:justify-between lg:flex-row text-gray-500">
        <div className="flex flex-col py-20 lg:w-1/2">
          <div className="md:text-lg  my-4 md:my-10">
              <p>
                Hi! I'm Joey Nguyen, and I'm a software engineer based out of California.
              </p>
              <p className="mt-5">
                I love building websites, applications, and pretty much anything that gets my gears turning. I enjoy problem-solving, working with others, and - most of all - learning.
              </p>
              <p className="mt-5">
                After graduating from UC Berkeley, I worked as a digital marketer specifically focused on programmatic media. After 3 years, I left my job to pursue my passion for programming and joined HackReactor's rigorous coding immersive to equip myself with the technical skills and knowledge necessary to succeed as an Engineer.
              </p>
              <p className="mt-5">
                Here are a few techonolgies I've been working with:
              </p>
            </div>
            <ul className="text-sm grid grid-cols-2">
              <li className="mb-3">- Javascript</li>
              <li className="mb-3 -ml-10">- React</li>
              <li className="mb-3">- Node.js/Express</li>
              <li className="mb-3 -ml-10">- TailwindCSS</li>
            </ul>
        </div>
          <div className="mt-5">
            <img src="http://lorempixel.com/output/animals-q-g-300-300-7.jpg" alt="Portrait" className="object-center"/>
          </div>
      </div>

    </section>
  )
}

export default About;


/*
TODO:

High:

Medium:
[] Flesh out paragraphs

Low:
[] Extract hardcoded list items into external objects and import for maintenance and reusability
[] Create Component for technology list using map function
*/
