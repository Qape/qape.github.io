import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import * as React from 'react';

const HeroLayoutRoot = styled('section')(({ theme }) => {
  return {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '70vh',
    minHeight: 500,
    maxHeight: 1900,

    [theme.breakpoints.down('desktop')]: {
      height: '60vh',
      minHeight: 500,
      maxHeight: 1300,
    },
    [theme.breakpoints.down('laptopL')]: {
      height: '50vh',
      minHeight: 500,
      maxHeight: 1300,
    },
    [theme.breakpoints.down('laptop')]: {
      height: '40vh',
      minHeight: 500,
      maxHeight: 1300,
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      minHeight: 300,
      maxHeight: 800,
    },
  };
});

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

export default function HeroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps
) {
  const { sxBackground, children } = props;

  return (
    <HeroLayoutRoot>
      <Container
        id="hero-container"
        sx={{
          marginBottom: { mobile: 0, sm: 0, desktop: 0 },
          marginTop: { mobile: 0, sm: 0, desktop: 0 },
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
      </Container>
    </HeroLayoutRoot>
  );
}
