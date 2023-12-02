import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Home from './routes/Home';
import DentistDetail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favorites from './Routes/Favs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/home" replace /> }/>
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<DentistDetail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
