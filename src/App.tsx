// import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Assets from './pages/Assets';
import Map from './pages/Map'

function App() {
  return (
    <Router>
    <div className="md:hidden h-screen flex justify-center items-center"><span>Sorry we doesn't support Mobile Version</span></div>
    <div className="hidden md:grid  grid-cols-8">
      <Navbar />
      <div className="col-span-7">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/assets" element={<Assets />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
