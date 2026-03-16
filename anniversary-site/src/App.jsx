import React from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-softCream font-sans selection:bg-accentGold selection:text-darkBg">
      <AppRoutes />
    </div>
  );
}

export default App;
