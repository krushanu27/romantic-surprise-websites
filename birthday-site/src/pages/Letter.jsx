import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import BirthdayLetter from '../components/letter/BirthdayLetter';
import Button from '../components/common/Button';
import PageTransition from '../components/common/PageTransition';
import { switchToFavoriteTrack } from '../components/common/MusicToggle';
import { useEffect } from 'react';

const Letter = () => {
  useEffect(() => {
    switchToFavoriteTrack();
  }, []);
  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="A Letter for You"
            subtitle="Some feelings are better written slowly."
          />

          <BirthdayLetter />

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/memories">
              <Button variant="outline">Previous</Button>
            </Link>

            <Link to="/">
              <Button>Back to Start</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Letter;