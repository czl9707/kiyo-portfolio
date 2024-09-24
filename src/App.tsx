import * as React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom";
import { CssBaseline } from '@mui/material';

import IsDarkContextProvider from './Theme.tsx';
import CatagoriesContextProvider from './Components/Catagory.tsx'
import Home from './Home/Home.js';
import Header from './Components/Header.tsx';
import Footer from './Components/Footer.tsx';
// import AboutMe from './Home/AboutMe.tsx';

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

const projects = [
  'AnisePatient',
  'MontanaHistoricalSociety',
  'Knowunity',
  'EdgemereFarm',
  'RobotVacuum',
]

function App() {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='Home' element={<Home />} />
            {/* <Route path='AboutMe' element={<AboutMe />} /> */}

            <Route path='Works'>
              {
                projects.map((p, i) => {
                  const Component = React.lazy(() => import(`./Works/${p}.tsx`));
                  return (
                    <Route path={p} key={i} element={<Component />} />
                  );
                })
              }
              <Route path="*" element={<Navigate to=".." />} />
              <Route path="" element={<Navigate to=".." />} />
            </Route>

            <Route path="*" element={<Navigate to="/Home" />} />
            <Route path="/" element={<Navigate to="/Home" />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
