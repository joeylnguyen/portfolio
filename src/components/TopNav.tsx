import React from 'react';
import { ReactComponent as GitHubLogo } from '../assets/githubLogo.svg';
import { ReactComponent as LinkedInLogo } from '../assets/linkedInLogo.svg';
import { buttonStyles } from './styles';

type TopNavProps = {
  width: number,
}

const TopNav = ( { width }: TopNavProps ) => {
  return (
    <div className={`${width >= 1024 ? 'visible' : 'hidden'} overflow-visible transition-none flex bg-transparent h-auto relative flex-grow items-center w-auto`}>
      <div className="flex flex-grow text-sm items-center">
        <a href="#About" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out inline-block mt-0 text-gray-600 hover:text-black mr-4">
          About
        </a>
        <a href="#Projects" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out inline-block mt-0 text-gray-600 hover:text-black mr-4">
          Projects
        </a>
        <a href="#Contact" className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out inline-block mt-0 text-gray-600 hover:text-black">
          Contact
        </a>
      </div>
        <div className="flex items-center flex-wrap">
          <a href={require('../assets/resume.pdf')} rel="nofollow noopener noreferrer" target = "_blank" className={`text-sm px-4 py-2 mr-4 transform ${buttonStyles}`}>Resume</a>
          <div className="flex justify-start items-center text-gray-500">
            <a href="https://github.com/joeylnguyen" className="block flex items-center hover:text-gray-700 mr-3">
              <GitHubLogo className="fill-current w-5 h-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent"/>
            </a>
            <a href="https://www.linkedin.com/in/joeylnguyen/" className="block flex items-center hover:text-gray-700">
              <LinkedInLogo className="fill-current w-5 h-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent"/>
            </a>
          </div>
        </div>
      </div>
  )
}

export default TopNav;

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
