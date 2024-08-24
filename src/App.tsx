import * as React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom";
import { CssBaseline } from '@mui/material';

import './App.css';

import IsDarkContextProvider from './Theme.tsx';
import CatagoriesContextProvider from './Components/Catagory.tsx'
import { Home } from './Home/Home.js';
import { Header } from './Components/Header.tsx';
import { Footer } from './Components/Footer.tsx';
import AnisePatient from './Works/AnisePatient.tsx';
import EdgemereFarm from './Works/EdgemereFarm.tsx';
import MontanaHistoricalSociety from './Works/MontanaHistoricalSociety.tsx'
import Knowunity from './Works/Knowunity.tsx'
import AboutMe from './Home/AboutMe.tsx';

function Layout() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: "end" });
      }
    }
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <IsDarkContextProvider>
      <CssBaseline />
      <CatagoriesContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </CatagoriesContextProvider>
    </IsDarkContextProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='Home' element={<Home />} />
          <Route path='AboutMe' element={<AboutMe />} />
          <Route path='Works'>
            <Route path='AnisePatient' element={<AnisePatient />} />
            <Route path='MontanaHistoricalSociety' element={<MontanaHistoricalSociety />} />
            <Route path='Knowunity' element={<Knowunity />} />
            <Route path='EdgemereFarm' element={<EdgemereFarm />} />
            {/* <Route path='DesignChallenge' element={<DesignChallenge />} /> */}
            <Route path="*" element={<Navigate to=".." />} />
            <Route path="" element={<Navigate to=".." />} />
          </Route>
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route path="/" element={<Navigate to="/Home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
