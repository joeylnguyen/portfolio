import React from 'react';

const Contact = () => {
  return (
    <section id="Contact" className="flex flex-col justify-center h-screen text-gray-500">
      <div className="py-20 text-center">
        <h4 className="text-6xl font-extrabold text-gray-800">
          Let's Chat?
        </h4>
        <div className="py-5 max-w-lg m-auto text-lg">
          <p>
            I'm actively searching for new opportunities as a Software Engineer at awesome companies. Feel free to get in touch if you have an opening!
          </p>
        </div>
        <div className="flex justify-center my-8">
          <a href="mailto:joeylnguyen95@gmail.com" className={`text-lg flex flex-col justify-center w-40 h-16 text-center leading-none text-gray-600 bg-gray-300 border-gray-300 border rounded transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-transparent hover:text-white hover:bg-gray-800 hover:shadow-xl mt-4 lg:mt-0`}>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Contact;
