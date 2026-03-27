import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import BirthdayGallery from '../components/gallery/BirthdayGallery';
import Button from '../components/common/Button';
import PageTransition from '../components/common/PageTransition';
import { switchToFavoriteTrack } from '../components/common/MusicToggle';
import { useEffect } from 'react';

const Memories = () => {
  useEffect(() => {
    switchToFavoriteTrack();
  }, []);
  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Our Memories"
            subtitle="A few moments I never want to stop reliving."
          />

          <BirthdayGallery />

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/reasons">
              <Button variant="outline">Previous</Button>
            </Link>

            <Link to="/letter">
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Memories;