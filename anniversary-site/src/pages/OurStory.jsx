import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import TimelineSection from '../components/timeline/TimelineSection';

const OurStory = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Journey" subtitle="Every Step With You" />
        <TimelineSection />
      </div>
    </PageTransition>
  );
};

export default OurStory;
