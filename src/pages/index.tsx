import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { HeadFC } from 'gatsby';
import * as React from 'react';

import AppAppBar from '../components/AppAppBar';
import AppFooter from '../components/AppFooter';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#122838',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
  },
});

const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppAppBar />
      <Hero />
      <ContactUs />
      <AppFooter />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>QAPE developers</title>;
