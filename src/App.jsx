import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate, useLocation } from "react-router-dom";

import './App.css';

import { Home } from './Home/Home.jsx';
import { Header } from './Components/Header.jsx';
import { Footer } from './Components/Footer.jsx';
import AnisePatient from './Works/AnisePatient.jsx'
import MontanaHistoricalSociety from './Works/MontanaHistoricalSociety.jsx'
import Knowunity from './Works/Knowunity.jsx';
import EdgemereFarm from './Works/EdgemereFarm.jsx'
import AboutMe from './Home/AboutMe.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname])

  return (
    <div id='content_div'>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Works'>
          <Route path='AnisePatient' element={<AnisePatient />} />
          <Route path='MontanaHistoricalSociety' element={<MontanaHistoricalSociety />} />
          <Route path='Knowunity' element={<Knowunity />} />
          <Route path='EdgemereFarm' element={<EdgemereFarm />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Route>
        <Route path="/*" element={<Navigate to="/Home" />} />
      </Routes>
    </div>
  );
}

export { App };
