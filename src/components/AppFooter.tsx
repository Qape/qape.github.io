import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import Logo from '../images/logo.png';
import { device } from './utils/CustomBreakpoints';

const FooterContainer = styled.div`
  background: #122838;
  color: white;
  padding: 2rem 1rem;
`;

const FooterGrid = styled(Grid)`
  display: flex;

  @media ${device.mobileS} {
    margin: 0 1rem;
    flex-direction: column !important;
  }

  @media ${device.tablet} {
    flex-direction: row !important;
  }

  @media ${device.laptop} {
    flex-direction: row !important;
  }

  @media ${device.laptopL} {
    flex-direction: row !important;
  }
`;

export default function AppFooter() {
  return (
    <FooterContainer>
      <FooterGrid
        container
        alignItems="flex-start"
        justifyContent="center"
        columnGap={10}
        rowGap={5}
      >
        <Grid item>
          <Box
            component="img"
            sx={{ height: 50 }}
            alt="Company logo"
            src={Logo}
          />
        </Grid>
        <Grid item xs={2} style={{ maxWidth: '14em' }}>
          <Typography variant="subtitle1" component="h5" gutterBottom>
            Vi älskar TECH
          </Typography>
          <Typography variant="body2">
            Vi erbjuder skräddarsydda lösningar med marknadens senaste tekniker
          </Typography>
        </Grid>
        <Grid item flexDirection={'column'} display={'flex'}>
          <Typography variant="subtitle1" component="h5" gutterBottom>
            Länkar
          </Typography>
          <Typography variant="body2" display={'flex'} flexDirection="column">
            <Link
              href="https://www.gatsbyjs.com/"
              title="Om oss"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginRight: 1 }}
            >
              Om oss
            </Link>
            <Link
              href="https://www.gatsbyjs.com/"
              title="Kontakta oss"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginRight: 1 }}
            >
              Kontakta oss
            </Link>
            <Link
              href="https://www.gatsbyjs.com/"
              title="Jobba hos oss"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginRight: 1 }}
            >
              Jobba hos oss
            </Link>
            <Link
              href="https://www.gatsbyjs.com/"
              title="Policy"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginRight: 1 }}
            >
              Vår policy
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h5" gutterBottom>
            Följ oss
          </Typography>
          <Link
            href="https://www.linkedin.com/company/qape-dev/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BAYXETcFFTaKJPNH4ZndVAw%3D%3D"
            title="Qape-LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginRight: 1 }}
          >
            <LinkedInIcon />
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            {'© '} {new Date().getFullYear()} | QAPE AB | 556925-0631
          </Typography>
        </Grid>
      </FooterGrid>
    </FooterContainer>
  );
}
