import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Link, Typography } from '@mui/material';
import { navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Logo from '../images/logo.png';

const FooterContainer = styled(Box)<{ defaultcolor?: string | undefined }>`
  display: flex;
  background: ${(p) => (p?.defaultcolor ? p.defaultcolor : '#122838')};
  color: white;
  padding: 2rem 1rem;
`;

type AppFooterProps = {
  footerRef?: React.MutableRefObject<HTMLDivElement | null>;
  contactUsRef?: React.MutableRefObject<HTMLDivElement | null>;
  defaultColor?: string | undefined;
};

export default function AppFooter({
  footerRef,
  contactUsRef,
  defaultColor,
}: AppFooterProps) {
  const defaultPageColor = defaultColor;
  return (
    <FooterContainer
      ref={footerRef}
      id="footer-container"
      defaultcolor={defaultPageColor}
    >
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        columnGap={10}
        rowGap={2}
        sx={{
          display: 'flex',
          flexDirection: { mobile: 'column', sm: 'row' },
        }}
      >
        <Grid item>
          <Box
            onClick={() => navigate('/')}
            component="img"
            sx={{ height: 50 }}
            alt="Company logo"
            src={Logo}
          />
        </Grid>
        <Grid item mobile={2} style={{ maxWidth: '14em' }}>
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
              onClick={() =>
                contactUsRef?.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end',
                  inline: 'nearest',
                })
              }
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
              href="/Policy"
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
      </Grid>
    </FooterContainer>
  );
}
