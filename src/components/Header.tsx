import React from 'react';
import { ReactComponent as NavLogo } from '../assets/logo.svg';
import { ReactComponent as GitHubLogo } from '../assets/githubLogo.svg';
import { ReactComponent as LinkedInLogo } from '../assets/linkedInLogo.svg';

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 border-solid border-0 border-b-2 border-gray-200">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <NavLogo className="fill-current text-gray-600 h-16 w-16 mr-4" />
          <span className="font-semibold text-3xl tracking-tight">Joey Nguyen</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4">
              About
            </a>
            <a href="#responsive-header" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4">
              Projects
            </a>
            <a href="#responsive-header" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black">
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <a href="mailto:joeylnguyen95@gmail.com" className="text-sm px-4 py-2 mr-4 leading-none border rounded text-gray-500 border-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent hover:text-white hover:bg-gray-600 mt-4 lg:mt-0">Contact Me</a>
            <div className="flex justify-start items-center text-gray-500">
              <a href="https://github.com/joeylnguyen" className="block flex items-center hover:text-gray-700 mr-3">
                <GitHubLogo className="fill-current w-5 h-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent mt-4 lg:mt-0"/>
              </a>
              <a href="https://www.linkedin.com/in/joeylnguyen/" className="block flex items-center hover:text-gray-700">
                <LinkedInLogo className="fill-current w-5 h-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent mt-4 lg:mt-0"/>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;

/*

TODO:

[] Create logic for menu expand
[] Define href endpoints for nav links
[] Fix responsiveness of logos... need to align to center when screen shrinks
[x] Fix logo fill
[] Make header sticky

*/