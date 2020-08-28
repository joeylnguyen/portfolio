import React from 'react';
import Header from './Header.jsx';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <main className="px-8 md:px-16 lg:px-32">
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
[] Create projects section
[] Create contact section
[] Find actual portrait for about me section
[] Allow resume button to open a new tab with resume

Medium:
[] Create footer
[] Figure out how to make content look like its loading on the spot with incrementing transition delay
[] Extract nav list and nav buttons into own components to import into side and top navs (take from sidenav)
[] Fix tsx for Navs
Low:
[] Extract divider into own component (i.e. "About me -----")

Done:
[x] Fix padding on each section so that only one section appears on screen at a time

Tradeoff notes:
- Had to create two menu buttons since the first menu button was getting hidden behind the side nav... not sure why this is happening. Solution was to have another menu with separate logic and styling on the sidenav layer
*/
