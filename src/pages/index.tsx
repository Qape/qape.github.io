import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { HeadFC } from 'gatsby';
import * as React from 'react';

import AppAppBar from '../components/AppAppBar';
import AppFooter from '../components/AppFooter';
import Hero from '../components/Hero';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#122838',
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
      <AppFooter />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>QAPE developers</title>;
