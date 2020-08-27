import React from 'react';
import { ReactComponent as GitHubLogo } from '../assets/githubLogo.svg';
import { ReactComponent as LinkedInLogo } from '../assets/linkedInLogo.svg';
import { buttonStyles } from './styles';

type NavListProps = {
  visible: boolean,
}

const NavList = ( { visible }: NavListProps ) => {

  return (
    <div className={`${visible ? 'translate-x-0' : 'translate-x-full'} transform top-0 right-0 w-64 fixed h-full bg-gray-100 overflow-auto ease-in-out transition-all duration-500 z-30 flex flex-col space-y-10 justify-center lg:overflow-visible lg:transition-none lg:bg-transparent lg:h-auto lg:relative lg:flex-row lg:flex-grow lg:items-center lg:w-auto lg:space-y-0`}>
      <div className="text-xl flex flex-col space-y-10 lg:text-sm lg:space-y-0 lg:flex-row items-center lg:flex-grow ">
        <a href="#responsive-header" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black lg:mr-4">
          About
        </a>
        <a href="#responsive-header" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black lg:mr-4">
          Projects
        </a>
        <a href="#responsive-header" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black">
          Contact
        </a>
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center flex-wrap lg:flex">
        <a href="#resume" className={`text-xl px-8 py-4 lg:text-sm lg:px-4 lg:py-2 lg:mr-4 ${buttonStyles}`}>Resume</a>
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
  )
}

export default NavList;

/*

TODO:
High:
[] Allow resume button to open a new tab with resume

Medium:
[]

Low:
[]

Done:
*/
