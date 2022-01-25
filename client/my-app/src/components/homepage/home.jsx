import React from 'react';
import Hero from './hero';
import Nav from './nav';
import About from './about';
import Footer from './footer';

export const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <Hero />
      </div>
      <div className="flex">
        <About />
      </div>
      <Footer />
    </>
  );
};
