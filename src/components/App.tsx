import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import ViewportProvider from './hooks/useViewport';

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
