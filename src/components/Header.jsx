import React, { useState } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav.jsx';
import useViewport from './hooks/useViewport';
import useScrollPosition from './hooks/useScrollPosition';

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showTopNav = useScrollPosition();
  const { width } = useViewport();

  const handleClick = () => {
    setShowSideNav(!showSideNav);
  }

  return (
    <header>
      <nav className={`lg:flex items-center justify-between flex-wrap bg-white p-6 w-full ease-in-out transform transition-all duration-500 fixed ${showTopNav ? 'top-0' : '-translate-y-full shadow-xl'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-5">
            <span className="font-semibold text-3xl tracking-tight border border-black rounded-full h-16 w-16 mr-5 flex items-center justify-center">J N</span>
          </div>
          <div className="block lg:hidden">
            <button className="border-gray-800 text-gray-800flex items-center px-3 py-2 border rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block hover:border-transparent hover:text-white hover:bg-gray-800 hover:shadow-xl" onClick={handleClick}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
        </div>
        <TopNav width={width} />
      </nav>
      <SideNav showSideNav={showSideNav} width={width} handleClick={handleClick}/>
    </header>
  )
}

export default Header;

/*

TODO:
High:

Medium:
[] Disable scroll when mobile nav menu is open

Low:
[] Have animation for when menu is clicked

Done:
[x] Add eventListener for when screen width is 1025px+... need to set visibility to true at this point
[x] Fix logo fill
[x] Fix responsiveness of logos... need to align to center when screen shrinks
[x] Create logic for menu expand
[x] Make header disappear on scroll
[x] Weird screen sizing when going from smaller screen to above 1024 width
[x] Define href endpoints for nav links
[x] Fix menu appearing slightly when shrinking window size
[x] Modify menu button:
  [x] Change icon to X when clicked
[x] Added shadow to header for when it disappears
*/