import React from 'react';
import Header from './Header';
import Hero from './Hero';

function App() {
  return (
    <div>
      <Header />
      <main className="px-5 md:px-16 lg:px-32">
        <Hero />
      </main>
    </div>
  );
}

export default App;
