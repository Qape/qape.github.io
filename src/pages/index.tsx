import '../styles/global.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { HeadFC } from 'gatsby';
import * as React from 'react';

import AppFooter from '../components/AppFooter';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';
import NavigationBar from '../components/NavigationBar';
import WorkWithUs from '../components/WorkWithUs';
import OurCustomers from '../components/OurCustomers';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: true;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    mobileM: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    desktop: true;
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
  breakpoints: {
    values: {
      mobile: 0,
      mobileM: 375,
      mobileL: 425,
      sm: 600,
      tablet: 768,
      laptop: 1024,
      laptopL: 1440,
      desktop: 2560,
    },
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
  typography: {
    fontFamily: 'Poppins',
  },
});

const IndexPage = () => {
  const footerRef = React.useRef<null | HTMLDivElement>(null);
  const contactUsRef = React.useRef<null | HTMLDivElement>(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationBar contactUsRef={contactUsRef} footerRef={footerRef} />
      <Hero />
      <WorkWithUs />
      <OurCustomers />
      <ContactUs contactUsRef={contactUsRef} />
      <AppFooter footerRef={footerRef} />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Qape</title>;
    </>
  );
};
