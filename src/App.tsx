import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate, useLocation } from "react-router-dom";

import './App.css';

import { APPLIGHTTHEME, APPDARKTHEME } from './Theme.tsx';
import { Home } from './Home/Home.jsx';
import { Header } from './Components/Header.tsx';
import { Footer } from './Components/Footer.jsx';
import AnisePatient from './Works/AnisePatient.jsx'
import MontanaHistoricalSociety from './Works/MontanaHistoricalSociety.jsx'
import Knowunity from './Works/Knowunity.jsx';
import EdgemereFarm from './Works/EdgemereFarm.jsx';
import DesignChallenge from './Works/DesignChallenge.jsx'
import AboutMe from './Home/AboutMe.jsx';

import ThemeProvider from '@mui/material/styles/ThemeProvider';


const THEME = {
  LIGHT: `
  * {
    --primary-background: white;
    --secondary-background: rgb(235, 235, 235);
    --primary-text: black;
    --secondary-text: rgb(20, 20, 20); 
    --primary-shadow: 0 0 1.5em rgb(0, 0, 0, 0.25);
    --secondary-shadow: 0 0 1.5em rgb(0, 0, 0, 0.15);
  }
  `,
  DARK: `
  * {
    --primary-background: rgb(42, 42, 42);
    --secondary-background: rgb(53, 53, 53);
    --primary-text: white;
    --secondary-text: rgb(235, 235, 235); 
    --primary-shadow: 0 0 1.5em rgb(255, 255, 255, 0.25);
    --secondary-shadow: 0 0 1.5em rgb(255, 255, 255, 0.15);
  }
  `,
}



function App() {
  return (
    <BrowserRouter>
      <style>
        {THEME['LIGHT']}
      </style>
      <ThemeProvider theme={APPLIGHTTHEME}>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
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
          <Route path='DesignChallenge' element={<DesignChallenge />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Route>
        <Route path="/*" element={<Navigate to="/Home" />} />
      </Routes>
    </div>
  );
}

export { App };
