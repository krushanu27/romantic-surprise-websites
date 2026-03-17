import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Button from '../components/common/Button';
import { Heart } from 'lucide-react';

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Moments That Became Memories"
          subtitle="Little pieces of us, quietly becoming something beautiful."
        />
        <GalleryGrid />

        <div className="flex justify-center mt-16 md:mt-20">
          <Button onClick={() => navigate('/letter')} className="text-lg px-8 py-4">
            <span>Read My Letter</span>
            <Heart className="w-5 h-5 ml-2" fill="currentColor" />
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;