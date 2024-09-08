import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, useScrollTrigger, Slide } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4Outlined';
// import Brightness7Icon from '@mui/icons-material/Brightness7Outlined';

import Section from './Section.tsx'
import { handleNavigation } from './Utils.tsx';
// import { IsDarkContext } from '../Theme.tsx';


function Header() {
  // const { isDark, setIsDark } = React.useContext(IsDarkContext);

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="sticky" color="transparent" elevation={0} enableColorOnDark>
        <Section disableGutters>
          <Toolbar disableGutters>
            <Typography noWrap variant='button' color="inherit" fontSize="1.5rem"
              sx={{ cursor: "pointer" }}
              onClick={handleNavigation("/Home#")}>
              KIYO YANG
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            {/* <IconButton
            size="small"
            onClick={() => setIsDark(!isDark)}
            color="inherit"
          >
            {isDark ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton> */}
          </Toolbar>
        </Section>
      </AppBar>
    </Slide>
  );
}

export { Header };
