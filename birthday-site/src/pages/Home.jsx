import React from 'react';
import BirthdayHero from '../components/home/BirthdayHero';
import BalloonAnimation from '../components/home/BalloonAnimation';
import PageTransition from '../components/common/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="relative">
        <BalloonAnimation />
        <BirthdayHero />
      </div>
    </PageTransition>
  );
};

export default Home;