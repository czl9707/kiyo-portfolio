import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Section from './Section.tsx'
import { handleNavigation } from './Utils.tsx';


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
    uri: `https://drive.google.com/file/d/1fRxv_PRcMMl88VN4TpWCalqxGoVQfd5n/view?usp=drive_link`,
    external: true,
  }
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color='info' sx={{ boxShadow: 0 }}>
      <Section>
        <Toolbar disableGutters>
          <Link noWrap variant='h4' href='/Home' color="inherit" underline="none">
            KIYO YANG
          </Link>

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
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
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
                    handleNavigation(item.uri, item.external)();
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
        </Toolbar>
      </Section>
    </AppBar>
  );
}

export { Header };
