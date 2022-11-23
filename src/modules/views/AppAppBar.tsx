import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import React from 'react';

const pages = []; //['Om oss', 'Teamet', 'Kontakt'];

export default function AppAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          QAPE
        </Typography>
        <Box sx={{ display: { md: 'flex' } }}>
          {pages.map((page) => (
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
