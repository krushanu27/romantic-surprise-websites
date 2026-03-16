import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4">
        <SectionTitle title="Captured Moments" subtitle="Fragments of Time" />
        <GalleryGrid />
      </div>
    </PageTransition>
  );
};

export default Gallery;
