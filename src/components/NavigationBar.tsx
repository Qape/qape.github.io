import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { navigate } from 'gatsby';
import { MutableRefObject, useEffect, useState } from 'react';

import Logo from '../images/logo.png';

const drawerWidth = 240;
const navItemHome = 'HEM';
const navItemAboutUs = 'OM OSS';
const navItemContactUs = 'KONTAKTA OSS';

const navItems = [navItemHome, navItemAboutUs, navItemContactUs];

type NavigationBarProps = {
  aboutUsRef?: MutableRefObject<HTMLDivElement | null>;
  contactUsRef?: MutableRefObject<HTMLDivElement | null>;
  footerRef?: MutableRefObject<HTMLDivElement | null>;
  navigationRef?: MutableRefObject<HTMLDivElement | null>;
  id?: string;
};

export default function NavigationBar({
  aboutUsRef,
  contactUsRef,
  navigationRef,
  id,
}: NavigationBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (selectedNavItem === navItemAboutUs) {
      aboutUsRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      setSelectedNavItem('');
    }

    if (selectedNavItem === navItemContactUs) {
      contactUsRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
      setSelectedNavItem('');
    }
  }, [selectedNavItem]);

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const drawer = (
    <>
      <DrawerHeader>
        <IconButton
          id="close-button"
          onClick={handleDrawerToggle}
          aria-label="stänga meny"
          sx={{
            ':hover': {
              bgcolor: '#1c374b',
            },
          }}
        >
          <CloseIcon sx={{ color: 'white' }} />
        </IconButton>
      </DrawerHeader>
      <Box
        onClick={handleDrawerToggle}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={() => setSelectedNavItem(item)}
                id={`menu-item-button-${index}`}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {item.toUpperCase()}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container =
    typeof window !== 'undefined' && window !== undefined
      ? () => window.document.body
      : undefined;

  const navigateHome = () => {
    return navigate('/');
  };

  return (
    <Box sx={{ display: 'flex' }} ref={navigationRef}>
      <CssBaseline />
      <AppBar component="nav" position="static" id={id || 'app-bar'}>
        <Toolbar
          id="back-to-top-anchor"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box
            sx={{ height: 50 }}
            component="img"
            alt="Company logo"
            src={Logo}
            onClick={() => navigateHome()}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            id="drawer-icon"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { mobile: 'none', sm: 'flex' },
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#fff',
                  ':hover': {
                    bgcolor: '#1c374b',
                  },
                }}
                onClick={() => setSelectedNavItem(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" id="mobile-nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { mobile: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: '#122838',
              opacity: '0.98',
              color: '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
