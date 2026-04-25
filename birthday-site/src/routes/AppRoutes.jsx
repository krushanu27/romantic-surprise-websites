import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Gifts from '../pages/Gifts';
import Reasons from '../pages/22Reasons';
import Memories from '../pages/Memories';
import Letter from '../pages/Letter';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="reasons" element={<Reasons />} />
          <Route path="memories" element={<Memories />} />
          <Route path="letter" element={<Letter />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;