import { Box, Card, CardMedia, Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

import UxDesignImage from '../images/uxdesign.jpg';
import BackgroundImage from '../images/workwithus.jpg';

const InformationSection = styled.div`
  margin: 0 1em;
  align-self: center;
`;

const cardInformation = [
  {
    id: '1',
    title: 'Systemuteckling',
    subtitle:
      'Våra erfarna konsulter bygger robusta och innovativa lösningar med fokus på hög kvalite utifrån dina affärsbehov.',
    image: BackgroundImage,
  },
  {
    id: '2',
    title: 'Test',
    subtitle:
      'Vi hjälper din organisation med testning som identifierar utmaningar – innan de blir ett problem.',
    image: BackgroundImage,
  },
  {
    id: '3',
    title: 'Arkitektur',
    subtitle:
      'Våra arkitekter är experter på att hitta rätt dimension och balans i lösningen. Vi hjälper dig till rätt lösning för din organisation.',
    image: BackgroundImage,
  },
  {
    id: '4',
    title: 'UX-design',
    subtitle:
      'Vi kan vägleda, ge dig kloka råd och insikter samt säkerställa att gränssnittet blir som du förväntar dig och som möter dina behov',
    image: UxDesignImage,
  },
];

export default function WorkWithUs() {
  const servicesTitle = 'Vårt kunderbjudande';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '4rem 0',
        background: 'whitesmoke',
      }}
    >
      <InformationSection id="information-section">
        <Typography
          variant="h4"
          align="center"
          component="h4"
          sx={{
            marginBottom: '1em',
            fontWeight: 700,
          }}
        >
          {`${servicesTitle}`.toUpperCase()}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            marginBottom: '2rem',
            margin: { mobile: '0rem', sm: '2rem 15rem', desktop: '2rem 40rem' },
          }}
        >
          Vi på Qape strävar efter att vara branschens bästa leverantör av IT
          tjänster där vårt utbud av tjänster omfattar utveckling,
          programmering, UX-design, test- och projektledning, med mera.
        </Typography>
      </InformationSection>
      <Box
        id="card-wrapper"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: { mobile: 'column', sm: 'row' },
          columnGap: '2rem',
          rowGap: { mobile: '2rem', sm: '0' },
          padding: { mobile: '1rem', sm: '2rem' },
        }}
      >
        {cardInformation.map((card) => {
          return (
            <Card
              key={card.id}
              sx={{
                maxWidth: 375,
                minWidth: { mobile: 250, sm: 350 },
                ':hover': {
                  boxShadow: 20,
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <CardMedia
                  sx={{ height: { mobile: 250, sm: 300 } }}
                  component="img"
                  image={card.image}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: '#122838',
                    opacity: '0.77',
                    color: 'white',
                    padding: '1rem',
                    minHeight: '8rem',
                  }}
                >
                  <Typography variant="h5">{card.title}</Typography>
                  <Typography variant="body2">{card.subtitle}</Typography>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
