import { Container, Grid, Link, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { siGatsby, siGithub, siMui } from 'simple-icons/icons';

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
      <Grid container justifyContent="flex-end" item xs={2}>
        <Grid item xs={8}>
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
            href="https://mui.com/"
            title="MUI: The React component library you always wanted"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginRight: 1 }}
          >
            <SvgIcon htmlColor="#007FFF">
              <path d={siMui.path} />
            </SvgIcon>
          </Link>
          <Link
            href="https://github.com/"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcon htmlColor="#181717">
              <path d={siGithub.path} />
            </SvgIcon>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
