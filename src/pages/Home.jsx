import React from 'react';

import Header from '@/components/Header';

import HeroProductSection from '@/components/HeroProductSection';

import Footer from '@/components/Footer';

import AppUtilities from '@/components/AppUtilities';

import NewsletterPopup from '@/components/NewsletterPopup';


const Home = () => {
  return (
    <>

      <Header />

      <HeroProductSection />

      <Footer />

      <AppUtilities />

      <NewsletterPopup />

    </>
  );
};

export default Home;