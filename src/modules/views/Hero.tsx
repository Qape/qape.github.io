import * as React from 'react';

import BackgroundImage from '../../images/keyboard-typing.jpg';
import HeroLayout from './HeroLayout';
import Typography from '@mui/material/Typography';

export default function ProductHero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
        backgroundBlendMode: 'hard-light',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom={true}
        sx={{
          mr: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        QaPe
      </Typography>
      peoples.filter(isDeveloper).every(sendEmailToUs)
    </HeroLayout>
  );
}
