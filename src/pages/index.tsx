import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppAppBar from '../modules/views/AppAppBar';
import AppFooter from '../modules/views/AppFooter';
import type { HeadFC } from 'gatsby';
import Hero from '../modules/views/Hero';

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
