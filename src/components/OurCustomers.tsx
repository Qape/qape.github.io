import { Box, Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

import NewWaveGroup from '../images/newWavegroup.jpeg';
import TeliaLogo from '../images/telia-logo.png';
import VGRLogo from '../images/vgr-logo.png';
import VolvoGroupLogo from '../images/volvogroup-logo.png';

const InformationSection = styled.div`
  margin: 0 1em;
  align-self: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 10rem;
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

/* &:nth-child(n + 4):before {
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background-color: #e6e7e8;
    position: absolute;
    content: '';
  }

  &:after {
    right: -1px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 66%;
    background-color: #e6e7e8;
    position: absolute;
    content: '';
  } */

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
          <Image
            loading="lazy"
            alt="TELIA COMPANY"
            data-src={TeliaLogo}
            src={TeliaLogo}
          />
        </ImageBox>
        <ImageBox>
          <Image
            loading="lazy"
            alt="VOLVO GROUP"
            data-src={VolvoGroupLogo}
            src={VolvoGroupLogo}
          />
        </ImageBox>
        <ImageBox>
          <Image
            loading="lazy"
            alt="VGR"
            data-src={VGRLogo}
            src={VGRLogo}
            style={{
              backgroundColor: 'rgb(50, 50, 50)',
              padding: '1rem',
              borderRadius: '5px',
              maxWidth: '11rem',
            }}
          />
        </ImageBox>
        <ImageBox>
          <Image
            loading="lazy"
            alt="New wave group"
            data-src={NewWaveGroup}
            src={NewWaveGroup}
            style={{
              borderRadius: '5px',
              maxWidth: '11rem',
            }}
          />
        </ImageBox>
        <ImageBox>
          <Image
            loading="lazy"
            alt="Kunder"
            data-src="https://cinode.com/wp-content/uploads/resized/47/semcon-2_320x320_8f4bbcdb89bb52097ae0d2e8a0f23965.png"
            src="https://cinode.com/wp-content/uploads/resized/47/semcon-2_320x320_8f4bbcdb89bb52097ae0d2e8a0f23965.png"
          />
        </ImageBox>
        <ImageBox></ImageBox>
      </Box>
    </Box>
  );
}
