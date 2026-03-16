import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundMusicToggle from '../components/common/BackgroundMusicToggle';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <BackgroundMusicToggle />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
