import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import EnvelopeOpenAnimation from '../components/letter/EnvelopeOpenAnimation';
import LoveLetterSection from '../components/letter/LoveLetterSection';
import Button from '../components/common/Button';
import { Heart } from 'lucide-react';

const Letter = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle
          title="A Letter From My Heart"
          subtitle="Some things are easier to write than to say."
        />

        <div className="mb-12 md:mb-16">
          <EnvelopeOpenAnimation />
        </div>

        <LoveLetterSection />

        <div className="flex justify-center mt-16 md:mt-20">
          <Button onClick={() => navigate('/reasons')} className="text-lg px-8 py-4">
            <span>Why I Choose You</span>
            <Heart className="w-5 h-5 ml-2" fill="currentColor" />
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Letter;