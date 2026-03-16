import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import EnvelopeOpenAnimation from '../components/letter/EnvelopeOpenAnimation';

const Letter = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4">
        <SectionTitle title="A Note For You" subtitle="Words From the Heart" />
        <EnvelopeOpenAnimation />
      </div>
    </PageTransition>
  );
};

export default Letter;
