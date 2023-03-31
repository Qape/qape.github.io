import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import styled from 'styled-components';

const WrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: { mobile: '2rem 0', sm: '4rem 0' },
  opacity: 0.9,
  background: '#122838',
  color: 'white',
};

const InformationSection = {
  margin: '0 1em',
};

const ListWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: { mobile: 'column', laptop: 'row' },
};

const ListItems = styled.li`
  display: inline-block;
  margin: 0 20px;
`;

const TypoGraphyStyle = {
  marginBottom: '2rem',
  margin: {
    mobile: '1rem',
    tablet: '2rem 2rem',
    laptop: '2rem 10rem',
    laptopL: '2rem 15rem',
    desktop: '2rem 40rem',
  },
};

type AboutUsProps = {
  aboutUsRef?: React.MutableRefObject<HTMLDivElement | null>;
};

export default function AboutUs({ aboutUsRef }: AboutUsProps) {
  const aboutUsTitle = 'Vi är Qape';
  return (
    <Box sx={WrapperStyle} id="about-us" ref={aboutUsRef}>
      <Box sx={InformationSection} id="information-section">
        <Typography
          variant="h4"
          align="center"
          component="h4"
          sx={{
            marginBottom: '1em',
            fontWeight: 700,
          }}
        >
          {`${aboutUsTitle}`.toUpperCase()}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          component="h6"
          sx={{
            marginBottom: '1em',
            fontWeight: 500,
          }}
        >
          Qape är ett ledande konsultbolag som specialiserar sig på
          webbutveckling.
        </Typography>
        <Typography variant="body1" sx={TypoGraphyStyle}>
          Vi har ett team av erfarna front-end utvecklare, backend utvecklare
          och test automation specialister som arbetar tillsammans för att
          leverera högkvalitativa lösningar åt våra kunder.
        </Typography>
        <Typography variant="body1" sx={TypoGraphyStyle}>
          Våra front-end utvecklare är experter på Next.js, React och Vue. De
          kan skapa användarvänliga, interaktiva gränssnitt och har en djup
          förståelse för designprinciper och UX.
        </Typography>
        <Typography variant="body1" sx={TypoGraphyStyle}>
          På backend-sidan är våra utvecklare experter på Java och Python. De
          kan bygga skalbara och robusta API:er och hantera databaser och andra
          bakgrundstjänster med lätthet. För att säkerställa högsta kvalitet på
          våra lösningar använder vi test automation.
        </Typography>
        <Typography variant="body1" sx={TypoGraphyStyle}>
          Våra specialister inom testautomation är experter på verktyg som
          Selenium, Cypress och Puppeteer och kan utveckla automatiserade tester
          som garanterar att våra lösningar fungerar som de ska.
        </Typography>
        <Typography variant="body1" sx={TypoGraphyStyle}>
          Vi på Qape är dedikerade till att hjälpa våra kunder att nå sina mål
          genom att leverera lösningar som är både funktionella och
          användarvänliga. Kontakta oss idag för att diskutera hur vi kan hjälpa
          dig och ditt företag!
        </Typography>
        <List sx={ListWrapper}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { mobile: 'column', sm: 'row' },
              width: '100%',
              justifyContent: { sm: 'center' },
            }}
          >
            <ListItems>
              <a target="_blank">#Webbutveckling</a>
            </ListItems>
            <ListItems>
              <a target="_blank">#Testautomation</a>
            </ListItems>
            <ListItems>
              <a target="_blank">#Frontend</a>
            </ListItems>
            <ListItems>
              <a target="_blank">#Backend</a>
            </ListItems>
          </Box>
        </List>
      </Box>
    </Box>
  );
}
