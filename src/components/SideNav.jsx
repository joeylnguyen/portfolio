import React from 'react';
import { ReactComponent as GitHubLogo } from '../assets/githubLogo.svg';
import { ReactComponent as LinkedInLogo } from '../assets/linkedInLogo.svg';
import { buttonStyles } from './styles';

const SideNav = ({ showSideNav, width, handleClick }) => {
  return (
    <div>

    <div className={`${showSideNav ? 'visible lg:hidden' : 'hidden'} w-halfScreen h-full fixed`} onClick={handleClick}></div>
    <div className={`${width < 1024 ? 'visible' : 'hidden'} ${showSideNav ? '-translate-x-0 shadow-xl' : 'translate-x-full'} transform top-0 right-0 w-halfScreen h-full bg-gray-100 overflow-auto ease-in-out fixed transition-all duration-500 flex flex-col space-y-10 justify-center p-6 lg:overflow-visible lg:transition-none lg:bg-transparent lg:h-auto lg:relative lg:flex-row lg:flex-grow lg:items-center lg:w-auto lg:space-y-0 lg:py-10 lg:ml-32 lg:mr-8 `}>
      <div className="block lg:hidden top-0 right-0 absolute top-0 right-0 p-6 pt-10">
        <button className="border-gray-800 text-gray-800flex items-center px-3 py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent hover:text-white hover:bg-gray-800 hover:shadow-xl" onClick={handleClick}>
          <svg className="fill-current h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Close Menu</title><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </button>
      </div>
      <div className="text-xl flex flex-col space-y-10 lg:text-sm lg:space-y-0 lg:flex-row items-center lg:flex-grow ">
        <a href="#About" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black lg:mr-4" onClick={handleClick}>
          About
        </a>
        <a href="#Projects" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black lg:mr-4" onClick={handleClick}>
          Projects
        </a>
        <a href="#Contact" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black" onClick={handleClick}>
          Contact
        </a>
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center flex-wrap lg:flex">
       <a href="#resume" className={`text-xl px-8 py-4 lg:text-sm lg:px-4 lg:py-2 lg:mr-4 transform ${buttonStyles}`} onClick={handleClick}>Resume</a>
        <div className="flex justify-start items-center text-gray-500">
          <a href="https://github.com/joeylnguyen" className="block flex items-center hover:text-gray-700 mr-3">
          <GitHubLogo className="fill-current w-8 h-8 lg:w-5 lg:h-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent mt-4 lg:mt-0"/>
          </a>
          <a href="https://www.linkedin.com/in/joeylnguyen/" className="block flex items-center hover:text-gray-700">
            <LinkedInLogo className="fill-current w-8 h-8 lg:w-5 lg:h-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent mt-4 lg:mt-0"/>
          </a>
       </div>
      </div>
    </div>
    </div>
      )
}

export default SideNav;

/*

TODO:
High:

Medium:
[]

Low:
[]

Done:
[x] Implement ability to click outside of side menu to close it
[x] Clicking on any side menu button closes the side menu
*/
