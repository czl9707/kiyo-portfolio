import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, MenuItem, useScrollTrigger, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import Brightness4Icon from '@mui/icons-material/Brightness4Outlined';
// import Brightness7Icon from '@mui/icons-material/Brightness7Outlined';

import Section from './Section.tsx'
import { handleNavigation } from './Utils.tsx';
// import { IsDarkContext } from '../Theme.tsx';


const pages = [
  {
    name: 'Projects',
    uri: '/Home#Works',
    external: false,
  },
  {
    name: 'About',
    uri: '/AboutMe',
    external: false,
  },
  {
    name: 'Resume',
    uri: `https://drive.google.com/file/d/1qmcdUPZFv4bVSLY4pBALD2pzfN6JnDwv/view?usp=drive_link`,
    external: true,
  }
];

function Header() {
  // const { isDark, setIsDark } = React.useContext(IsDarkContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const trigger = useScrollTrigger();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="sticky" color="default" elevation={1} enableColorOnDark>
        <Section disableGutters>
          <Toolbar disableGutters>
            <Typography noWrap variant='button' color="inherit" fontSize="1.5rem"
              sx={{ cursor: "pointer" }}
              onClick={handleNavigation("/Home#")}>
              KIYO YANG
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                {pages.map(item => (
                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu();
                      handleNavigation(item.uri, item.external)!();
                    }}
                    key={item.name}
                    dense={true}
                  >
                    <Typography variant='button'>
                      {item.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {pages.map(item => (
                <Button
                  variant='text'
                  color="inherit"
                  key={item.name}
                  onClick={handleNavigation(item.uri, item.external)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

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
