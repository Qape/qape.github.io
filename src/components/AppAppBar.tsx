import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';

import Logo from '../images/logo.png';

const pages: Array<string> = []; //['Om oss', 'Teamet', 'Kontakt'];

export default function AppAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          sx={{ height: 50 }}
          alt="Company logo"
          src={Logo}
        />
        <Box sx={{ display: { md: 'flex' } }}>
          {pages?.map((page) => (
            <Button
              key={page}
              sx={{
                alignSelf: 'flex-end',
                color: 'white',
                display: 'inline-block',
                letterSpacing: '.1rem',
                my: 2,
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
