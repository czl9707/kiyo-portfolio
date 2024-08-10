import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { Section } from './Section.tsx'
import { FadeIn } from './Effect.tsx'


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

  function handlenavigation(uri: string, external: boolean): () => void {
    return () => {
      window.open(uri, external ? "_blank" : "_self");
    }
  }

  return (
    <FadeIn>
      <AppBar position="sticky" enableColorOnDark sx={{ boxShadow: 0 }}>
        <Section>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                display: 'block',
                textDecoration: 'none',
              }}
              href='/Home'
            >
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
                      handlenavigation(item.uri, item.external)();
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
                  onClick={handlenavigation(item.uri, item.external)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Section>
      </AppBar>
    </FadeIn>
  );
}

export { Header };
