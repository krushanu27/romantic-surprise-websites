import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundMusicToggle from '../components/common/BackgroundMusicToggle';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />

      <BackgroundMusicToggle />

      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  );
};

export default MainLayout;