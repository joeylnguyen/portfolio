import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';

function App() {
  return (
    <div>
      <Header />
      <main className="px-5 md:px-16 lg:px-32">
        <Hero />
        <About />
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

Medium:
[] Create footer
[] Fix padding on each section so that only one section appears on screen at a time
Low:
[] Abstract divider into own component (i.e. "About me -----")

Done:
*/
