import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Collection from '../components/Collection';
import Lookbook from '../components/Lookbook';
import About from '../components/About';
import InstagramFeed from '../components/InstagramFeed';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Collection />
      <Lookbook />
      <About />
      <InstagramFeed />
      <ComingSoon />
      <Footer />
    </div>
  );
}