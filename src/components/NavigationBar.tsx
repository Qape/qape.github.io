import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

import Logo from '../images/logo.png';

const drawerWidth = 240;
const navItems = ['Hem', 'Om oss', 'Kontakta oss'];

type NavigationBarProps = {
  footerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default function NavigationBar({ footerRef }: NavigationBarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToItem = () => {
    console.log('footer ref', footerRef.current);
    footerRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    console.log(document.getElementById('footer-container'));
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const drawer = (
    <>
      <DrawerHeader>
        <IconButton id="close-button" onClick={handleDrawerToggle}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{ textAlign: 'center' }}
                onClick={() => scrollToItem()}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="static">
        <Toolbar
          id="toolbar"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box
            sx={{ height: 50 }}
            component="img"
            alt="Company logo"
            src={Logo}
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
              <Button key={item} sx={{ color: '#fff' }}>
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
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
