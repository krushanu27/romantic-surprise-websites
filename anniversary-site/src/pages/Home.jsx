import React from 'react';
import PageTransition from '../components/common/PageTransition';
import HeroSection from '../components/home/HeroSection';
import FloatingHearts from '../components/home/FloatingHearts';

const Home = () => {
  return (
    <PageTransition>
      <FloatingHearts />
      <HeroSection />
    </PageTransition>
  );
};

export default Home;
