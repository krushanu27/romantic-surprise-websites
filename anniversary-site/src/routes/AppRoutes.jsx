import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import OurStory from '../pages/OurStory';
import Gallery from '../pages/Gallery';
import Letter from '../pages/Letter';
import Reasons from '../pages/Reasons';
import FinalPage from '../pages/FinalPage';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<OurStory />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="letter" element={<Letter />} />
          <Route path="reasons" element={<Reasons />} />
          <Route path="forever" element={<FinalPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
