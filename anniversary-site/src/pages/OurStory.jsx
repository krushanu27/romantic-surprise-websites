import React, { useEffect } from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import TimelineSection from '../components/timeline/TimelineSection';
import {
  playBackgroundMusic,
  resetBackgroundMusicVolume,
} from '../components/common/BackgroundMusicToggle';

const OurStory = () => {
  useEffect(() => {
    resetBackgroundMusicVolume(0.35);
    playBackgroundMusic();
  }, []);

  return (
    <PageTransition>
      <div className="container mx-auto px-4">
        <SectionTitle
          title="A Love That Took Its Time"
          subtitle="Not rushed. Not perfect. Still deeply real."
        />

        <p className="text-center text-softCream/60 italic mb-12">
          Our song: BLUE — Yung Kai
        </p>

        <TimelineSection />
      </div>
    </PageTransition>
  );
};

export default OurStory;