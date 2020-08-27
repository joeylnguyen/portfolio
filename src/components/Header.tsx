import React, { useState, createContext, useContext } from 'react';
import NavList from './NavList'
import useViewport from './hooks/useViewport';
import { buttonStyles } from './styles';


const Header = () => {
  const [visible, setVisible] = useState(false);
  const { width } = useViewport();
  const breakpoint = 1025;

  const handleClick = () => {
    setVisible(!visible);
  }

  return (
    <header>
      <nav className="lg:flex items-center justify-between flex-wrap bg-white p-6 border-solid border-0 border-b-2 border-gray-200 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-5">
            <span className="font-semibold text-3xl tracking-tight border border-black rounded-full h-16 w-16 mr-5 flex items-center justify-center">J N</span>
          </div>
          <div className="block lg:hidden z-40">
            <button className="border-gray-800 text-gray-800flex items-center px-3 py-2 border rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent hover:text-white hover:bg-gray-800 hover:shadow-xl" onClick={handleClick}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
        </div>
        {
        width >= breakpoint
        ? <NavList visible={true} />
        : <NavList visible={visible} />
        }
      </nav>
    </header>
  )
}

export default Header;

/*

TODO:
High:
[] Define href endpoints for nav links
[] Make header disappear on scroll

Medium:
[] Disable scroll when mobile nav menu is open

Low:
[] Fix menu appearing slightly when shrinking window size

Done:
[x] Add eventListener for when screen width is 1025px+... need to set visibility to true at this point
[x] Fix logo fill
[x] Fix responsiveness of logos... need to align to center when screen shrinks
[x] Create logic for menu expand
*/