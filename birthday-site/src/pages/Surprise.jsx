import React from 'react';
import { Link } from 'react-router-dom';
import FinalSurprise from '../components/surprise/FinalSurprise';
import Button from '../components/common/Button';
import PageTransition from '../components/common/PageTransition';

const Surprise = () => {
  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FinalSurprise />

          <div className="mt-10 flex justify-center sm:justify-start">
            <Link to="/letter">
              <Button variant="outline">Previous</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Surprise;