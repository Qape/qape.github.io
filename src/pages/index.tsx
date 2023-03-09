import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { HeadFC } from 'gatsby';
import * as React from 'react';

import AppAppBar from '../components/AppAppBar';
import AppFooter from '../components/AppFooter';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';

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
