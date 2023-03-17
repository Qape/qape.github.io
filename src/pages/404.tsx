import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppBar, Box, Button, ThemeProvider, Toolbar } from '@mui/material';
import { HeadFC, Link, navigate } from 'gatsby';

import AppFooter from '../components/AppFooter';
import Logo from '../images/logo.png';
import { theme } from '.';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          component="nav"
          position="static"
          sx={{ backgroundColor: '#122838' }}
        >
          <Toolbar
            id="toolbar"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box
              sx={{ height: 50 }}
              component="img"
              alt="Company logo"
              src={Logo}
              onClick={() => navigate('/')}
            />
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            padding: '2rem 4rem',
            height: '100vh',
            fontFamily: 'Poppins',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              background: '#122838',
              borderRadius: '5px',
              padding: '1rem',
              color: 'white',
              width: '100%',
            }}
          >
            <h1 style={headingStyles}>SIDAN KAN INTE HITTAS</h1>
            <p style={paragraphStyles}>
              Hoppsan 😔, sidan du letar efter har antingen flyttats eller
              tagits bort, vänligen kontrollera webbplatsadressen.
              <br />
              {process.env.NODE_ENV === 'development' ? (
                <>
                  <br />
                  Try creating a page in{' '}
                  <code style={codeStyles}>src/pages/</code>.
                  <br />
                </>
              ) : null}
              <br />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  ':hover': {
                    bgcolor: 'whitesmoke',
                  },
                }}
              >
                <Link to="/" style={{ display: 'flex', color: 'black' }}>
                  Ta mig till första sidan
                  <ChevronRightIcon />
                </Link>
              </Button>
            </p>
          </Box>
        </Box>
        <AppFooter />
      </ThemeProvider>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 Not found</title>;
