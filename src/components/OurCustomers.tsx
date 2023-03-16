import { Box, Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

import GbgstadLogo from '../images/gbgstad-logo.png';
import NwgLogo from '../images/nwg-logo.png';
import TeliaLogo from '../images/telia-logo.png';
import VGRLogo from '../images/vgr-logo.png';
import VolvoGroupLogo from '../images/volvogroup-logo.png';

const InformationSection = styled.div`
  margin: 0 1em;
  align-self: center;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  vertical-align: middle;
  filter: grayscale(100%);
`;

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  height: 100px;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  position: relative;
`;

export default function OurCustomers() {
  const servicesTitle = 'Några av våra kunder';

  return (
    <Box sx={{ padding: '0rem 2rem', background: 'whitesmoke' }}>
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
      </InformationSection>
      <Box
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: { mobile: 'column', sm: 'row' },
          justifyContent: 'center',
          minHeight: { mobile: 'auto', sm: '200px' },
          gap: '3rem',
        }}
      >
        <ImageBox>
          <Box sx={{ maxWidth: '13rem' }}>
            <Image
              loading="lazy"
              alt="TELIA COMPANY"
              data-src={TeliaLogo}
              src={TeliaLogo}
            />
          </Box>
        </ImageBox>
        <ImageBox>
          <Box sx={{ maxWidth: '16rem' }}>
            <Image
              loading="lazy"
              alt="VOLVO GROUP"
              data-src={VolvoGroupLogo}
              src={VolvoGroupLogo}
            />
          </Box>
        </ImageBox>
        <ImageBox>
          <Box sx={{ maxWidth: '16rem' }}>
            <Image
              loading="lazy"
              alt="Intraservice"
              data-src={GbgstadLogo}
              src={GbgstadLogo}
            />
          </Box>
        </ImageBox>
        <ImageBox>
          <Box sx={{ maxWidth: '16rem' }}>
            <Image loading="lazy" alt="VGR" data-src={VGRLogo} src={VGRLogo} />
          </Box>
        </ImageBox>
        <ImageBox>
          <Box sx={{ maxWidth: '16rem' }}>
            <Image
              loading="lazy"
              alt="New wave group"
              data-src={NwgLogo}
              src={NwgLogo}
            />
          </Box>
        </ImageBox>
      </Box>
    </Box>
  );
}
