import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MusicToggle from '../components/common/MusicToggle';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />
      <MusicToggle />
      <main className="flex-grow pt-24 pb-12 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
