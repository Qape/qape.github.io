import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MutableRefObject } from 'react';

import BackgroundImage from '../images/homeHero.png';
import HeroLayout from './HeroLayout';

type ProductHeroProps = {
  contactUsRef?: MutableRefObject<HTMLDivElement | null>;
};

export default function ProductHero({ contactUsRef }: ProductHeroProps) {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography
        data-testid="typography-qape"
        gutterBottom={true}
        sx={{
          mr: 1,
          color: 'inherit',
          textDecoration: 'none',
          textAlign: 'center',
          marginRight: 0,
          padding: { mobile: '2rem', sm: '3rem' },
          typography: {
            mobile: 'h6',
            sm: 'h4',
            desktop: 'h2',
          },
          fontWeight: '500 !important',
        }}
      >
        Ditt innovativa IT-bolag för digital transformation och
        mjukvaruutveckling.
      </Typography>
      <Button
        size="large"
        sx={{
          color: '#fff',
          border: '1px solid #fff',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#122838',
            border: '1px solid #fff',
          },
        }}
        color="primary"
        variant="outlined"
        onClick={() =>
          contactUsRef?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          })
        }
      >
        Kom i kontakt
      </Button>
    </HeroLayout>
  );
}
