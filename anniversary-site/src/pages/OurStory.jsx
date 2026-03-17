import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import TimelineSection from '../components/timeline/TimelineSection';
import Button from '../components/common/Button';
import { Heart } from 'lucide-react';
import {
  playBackgroundMusic,
  resetBackgroundMusicVolume,
} from '../components/common/BackgroundMusicToggle';

const OurStory = () => {
  const navigate = useNavigate();

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

        <div className="flex justify-center mt-16 md:mt-20">
          <Button onClick={() => navigate('/gallery')} className="text-lg px-8 py-4">
            <span>See Our Memories</span>
            <Heart className="w-5 h-5 ml-2" fill="currentColor" />
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default OurStory;