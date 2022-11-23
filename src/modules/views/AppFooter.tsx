import { Container, Grid, Link, SvgIcon, Typography } from '@mui/material';
import { siGatsby, siGithub } from 'simple-icons/icons';

import React from 'react';

function Copyright() {
  return (
    <React.Fragment>
      {'© '} QAPE {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Container sx={{ my: 8, display: 'flex' }}>
      <Grid container>
        <Grid item xs="auto">
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" xs={2}>
        <Grid item xs={6}>
          <Typography
            variant="caption"
            sx={{ display: 'block' }}
            gutterBottom={true}
          >
            Powered by
          </Typography>
          <Link
            href="https://www.gatsbyjs.com/"
            title="Gatsby"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginRight: 1 }}
          >
            <SvgIcon htmlColor="#653399">
              <path d={siGatsby.path} />
            </SvgIcon>
          </Link>
          <Link
            href="https://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcon>
              <path d={siGithub.path} />
            </SvgIcon>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
