import React from 'react';

const About = () => {
  return (
    <section id="About" className="flex flex-col justify-center h-screen">
      <div className="flex items-center">
        <h3 className="flex-0 mr-5 text-gray-800 text-2xl lg:text-3xl">About me</h3>
        <div className="border-b flex-1 w-full" style={{height: "8px"}}>{""}</div>
      </div>
      <div className="flex flex-col items-center lg:justify-between lg:flex-row text-gray-500">
        <div className="flex flex-col lg:w-1/2">
          <div className="text-sm md:text-lg  my-4 md:my-10">
              <p>
                This is about me.
              </p>
              <p className="mt-5">
                Et consectetur excepteur ullamco ea aliquip velit tempor tempor nostrud commodo do enim mollit deserunt. Ipsum ullamco ad consectetur aliquip veniam incididunt laboris sint eiusmod anim dolore eu.
              </p>
              <p className="mt-5">
                Ipsum aliquip consequat ad labore aute anim fugiat veniam veniam minim. Cillum mollit laborum voluptate laboris commodo labore nulla id pariatur exercitation veniam velit commodo commodo.
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
