import * as React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Outlet } from "react-router-dom";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { CssBaseline } from '@mui/material';

import './App.css';

import { APPLIGHTTHEME, APPDARKTHEME } from './Theme.tsx';
import { Home } from './Home/Home.js';
import { Header } from './Components/Header.tsx';
import { Footer } from './Components/Footer.tsx';
import AnisePatient from './Works/AnisePatient.tsx'
import EdgemereFarm from './Works/EdgemereFarm.jsx';
import AboutMe from './Home/AboutMe.jsx';


const IsDarkContext = React.createContext<{ isDark: boolean, setIsDark: (isDark: boolean) => void }>(
  { isDark: false, setIsDark: () => { } }
)

function Layout() {
  const [isDark, setIsDark] = React.useState<boolean>(false)
  return (
    <ThemeProvider theme={isDark ? APPDARKTHEME : APPLIGHTTHEME} >
      <IsDarkContext.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
        <CssBaseline />
        <Header />
        <Outlet />
        <Footer />
      </IsDarkContext.Provider>
    </ThemeProvider >
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
            {/* <Route path='MontanaHistoricalSociety' element={<MontanaHistoricalSociety />} /> */}
            {/* <Route path='Knowunity' element={<Knowunity />} /> */}
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

export { IsDarkContext }
export default App;
