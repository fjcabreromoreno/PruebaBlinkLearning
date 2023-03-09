import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './modules/Home';
import Tasks from './modules/Tasks';
import Welcome from './modules/Welcome';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
