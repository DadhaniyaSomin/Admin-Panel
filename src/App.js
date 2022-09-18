import React from 'react';
import Topbar from './componant/Topbar';
import Sidebar from './componant/Sidebar';
import Home from './pages/Home';
import './style.css';

export default function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
          <Sidebar></Sidebar>
          <Home />
      </div>
    </div>
  );
}
