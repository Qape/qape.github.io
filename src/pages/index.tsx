import '../styles/global.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { HeadFC } from 'gatsby';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import AboutUs from '../components/AboutUs';
import AppFooter from '../components/AppFooter';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';
import NavigationBar from '../components/NavigationBar';
import OurCustomers from '../components/OurCustomers';
import ScrollToTop from '../components/ScrollToTop';
import WorkWithUs from '../components/WorkWithUs';

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
    desktopL: true;
  }
}

const DEFAULT_PAGE_COLOR = '#122838';

export const theme = createTheme({
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
      desktopL: 3840,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: DEFAULT_PAGE_COLOR,
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

const queryClient = new QueryClient();

const IndexPage = () => {
  const navigationRef = React.useRef<null | HTMLDivElement>(null);
  const aboutUsRef = React.useRef<null | HTMLDivElement>(null);
  const contactUsRef = React.useRef<null | HTMLDivElement>(null);
  const footerRef = React.useRef<null | HTMLDivElement>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationBar
          aboutUsRef={aboutUsRef}
          contactUsRef={contactUsRef}
          footerRef={footerRef}
          navigationRef={navigationRef}
        />
        <Hero contactUsRef={contactUsRef} />
        <WorkWithUs />
        <OurCustomers />
        <AboutUs aboutUsRef={aboutUsRef} />
        <ContactUs contactUsRef={contactUsRef} />
        <ScrollToTop navigationRef={navigationRef} />
        <AppFooter
          aboutUsRef={aboutUsRef}
          footerRef={footerRef}
          contactUsRef={contactUsRef}
          defaultColor={DEFAULT_PAGE_COLOR}
        />
      </ThemeProvider>
    </QueryClientProvider>
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
