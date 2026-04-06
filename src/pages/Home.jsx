import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Collection from '../components/Collection.jsx';
import NewCollection from '../components/NewCollection';
import LifestyleStrip from '../components/LifestyleStrip';
import About from '../components/About';
import InstagramFeed from '../components/InstagramFeed';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Collection />
      <NewCollection />
      <LifestyleStrip />
      <About />
      <InstagramFeed />
      <ComingSoon />
      <Footer />
    </div>
  );
}