import React from 'react';

const Hero = () => {
  return (
    <section className="text-sm md:text-base flex-col text-left py-16 md:py-64">
      <h1 className="text-gray-500">Hello! My name is</h1>
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800">Joey Nguyen.</h2>
      <div className="text-gray-500 my-4 w-3/5 md:my-10">
        <p>
          Veniam exercitation commodo aute id reprehenderit ut aliqua exercitation fugiat eu eiusmod reprehenderit consequat. Mollit velit est excepteur exercitation esse fugiat irure exercitation dolore irure.
        </p>
      </div>
      <a href="mailto:joeylnguyen95@gmail.com" className="px-8 py-4 mr-4 leading-none text-gray-500 border rounded border-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent hover:text-gray-100 hover:bg-gray-600 mt-4 lg:mt-0">Let's Chat!</a>
    </section>
  )
}

export default Hero;
