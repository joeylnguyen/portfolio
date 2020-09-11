import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <main className="px-8 md:px-16 lg:px-32 max-w-screen-2xl mx-auto min-h-screen snap snap-y snap-mandatory">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

/*

TODO:
High:
[x] Create all device logos
[x] Edit HTML
[x] Edit descriptions
[x] Get SVG for project pop out
[] Get domain name
[] Figure out how to conditionally polyfill scroll behavior

Medium:
[] Create footer
[] Extract nav list and nav buttons into own components to import into side and top navs (take from sidenav)
[] Extract button into own component

Low:
[] Extract divider into own component (i.e. "About me -----")
[] Figure out how to make content look like its loading on the spot with incrementing transition delay

Done:
[x] Fix padding on each section so that only one section appears on screen at a time
[x] Create contact section
[x] Create projects section
[x] Find actual portrait for about me section
  [x] Portrait found
  [x] Figure out how to have portrait show up...lol
[x] Allow resume button to open a new tab with resume
[x] Fix tsx for Navs


Tradeoff notes:
- Had to create two menu buttons since the first menu button was getting hidden behind the side nav... not sure why this is happening. Solution was to have another menu with separate logic and styling on the sidenav layer
- Due to weird styling issues, needed to make two separate nav bar components that share very similar logic. The sidebar needed to live outside of the main header section, otherwise the styling for having the header disappear on scroll would intefere with how the sidebar appears. Will probably have to extract out some of the logic for each navbar into their own components.
- Can't use transform styling on buttons on main content due to it making the buttons float above everything. The buttons will be superimposed over navbar for example. Because of this, they don't get the floating effect when hovering over.

*/
