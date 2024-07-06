import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReferEarnPage from './components/ReferEarnPage';
import NavBar from './components/Navigation';
import ReferStep from './components/ReferStep';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div>
        <Toaster/> 
        <NavBar />
        <Routes>
          <Route path="/" element={<ReferEarnPage />} />
        </Routes>
        <ReferStep />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
