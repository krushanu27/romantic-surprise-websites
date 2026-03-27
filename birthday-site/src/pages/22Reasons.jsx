import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import ReasonsGrid from '../components/reasons/ReasonsGrid';
import Button from '../components/common/Button';
import PageTransition from '../components/common/PageTransition';

const Reasons = () => {
  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="22 Reasons Why I Love You"
            subtitle="Not that I could ever fit all of them on one page."
          />

          <ReasonsGrid />

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/gifts">
              <Button variant="outline">Previous</Button>
            </Link>

            <Link to="/memories">
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Reasons;