import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { ChangeEvent, MutableRefObject, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { isEmail, isMobilePhoneNumber } from './utils/Regex.util';

const FormWrapper = styled.form`
  margin: 2em;
`;

const InformationSection = styled.div`
  margin: 0 1em 0 1em;
  align-self: center;
`;

const ConsentGrid = styled(Grid)`
  margin-top: 2em;
  flex-direction: column;
`;

type ContactUsProps = {
  contactUsRef: MutableRefObject<HTMLDivElement | null>;
};

const ContactUs = ({ contactUsRef }: ContactUsProps) => {
  const [name, setName] = useState<TextField | undefined>(undefined);
  const [phone, setPhone] = useState<TextField | undefined>(undefined);
  const [email, setEmail] = useState<TextField | undefined>(undefined);

  const [gdprChecked, setGdprChecked] = useState(false);
  const [captchVerified, setCaptchaVerified] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>('');

  type TextField = {
    value: string;
    valid?: boolean;
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;

    if (isEmail(val)) {
      setEmail({ value: val });
    } else {
      setEmail({ value: val });
    }
  };

  const handleEmailBlur = () => {
    if (email?.value) {
      if (isEmail(email.value)) {
        setEmail({ value: email?.value, valid: true });
      } else {
        setEmail({ value: email?.value, valid: false });
      }
    }
  };

  const handlePhoneNumberBlur = () => {
    if (phone?.value) {
      if (isMobilePhoneNumber(phone.value)) {
        setPhone({ value: phone.value, valid: true });
      } else {
        setPhone({ value: phone.value, valid: false });
      }
    }
  };

  const handleCaptchaOnChange = (token: string | null) => {
    setCaptchaVerified(Boolean(token));
    setCaptchaToken(token);
  };

  const sendEmail = async () => {
    const res = await fetch(
      'https://y0nvymqx7f.execute-api.eu-north-1.amazonaws.com/v1/qape-dev-contact-form',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          token: captchaToken,
          subject: 'Kund förfrågan',
          email: email?.value,
          name: name?.value,
          phone: phone?.value,
        }),
      }
    );

    if (!res.ok) {
      return { error: 'Failed to fetch' };
    }

    return res;
  };

  const { status, refetch, isFetching } = useQuery('status', sendEmail, {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    setCaptchaVerified(false);
    setGdprChecked(false);
    setName(undefined);
    setPhone(undefined);
    setEmail(undefined);
  }, [isFetching]);

  const handleOnEmailRequestClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: 'Send Email',
      // string - required - Type of interaction (e.g. 'play')
      action: 'Click',
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: 'Skicka',
      // number - optional - Numeric value associated with the event. (e.g. A product ID)
      value: 0,
    });

    refetch();
  };

  const renderEmailMessage = () => {
    if (status === 'success') {
      return (
        <Box sx={{ margin: '2em' }}>
          <Alert severity="success">
            <AlertTitle>Tack för ditt mejl</AlertTitle>
            Vi besvarar din förfrågan så fort vi kan, ha en fortsatt trevlig
            dag!
          </Alert>
        </Box>
      );
    } else if (status === 'error') {
      return (
        <Box sx={{ margin: '2em' }}>
          <Alert severity="error">
            <AlertTitle>Tekniskt fel</AlertTitle>
            Din förfrågan kunde inte skickas. Var god och försök igen om en
            stund.
          </Alert>
        </Box>
      );
    }

    return null;
  };

  return (
    <Box
      ref={contactUsRef}
      id="box-wrapper"
      sx={{
        padding: { mobile: '2em 0', sm: '4rem' },
        display: 'flex',
        flexDirection: { mobile: 'column', laptop: 'row' },
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
          ÄR DU INTRESSERAD AV ATT VETA MER OM OSS?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: '2em', margin: '0 1em' }}
        >
          Vi har alla färdigheter du behöver för att skräddarsy dina behov och
          göra framtiden till en lovande sådan. Fyll i dina uppgifter så
          återkommer vi till dig inom kort för att se hur vi kan hjälpa dig på
          bästa sätt.
        </Typography>
      </InformationSection>

      <Grid container direction="column">
        <Grid sx={{ maxWidth: { mobile: '100%' } }}>
          {status !== 'success' && (
            <FormWrapper
              id="contact-form"
              className=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Box id="contact-field-wrapper">
                <TextField
                  id="name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                  label="Namn"
                  error={name?.value === ''}
                  helperText={name?.value === '' ? 'Fyll i namn' : ''}
                  name="userName"
                  inputProps={{ maxLength: 30 }}
                  onChange={(e) => {
                    setName({ value: e.target.value, valid: true });
                  }}
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="phonenumber"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIphoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                  label="Telefon"
                  error={
                    phone?.value === '' ||
                    (phone?.valid !== undefined && phone?.valid === false)
                  }
                  helperText={
                    phone?.value === ''
                      ? 'Fyll i telefonnummer'
                      : phone?.valid !== undefined && phone?.valid === false
                      ? 'Ogiltigt telefonnummer, vänligen kontrollera formatet på telefonnumret'
                      : ''
                  }
                  name="phone"
                  inputProps={{ maxLength: 12 }}
                  onChange={(e) => {
                    setPhone({ value: e.target.value });
                  }}
                  onBlur={handlePhoneNumberBlur}
                  variant="standard"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                  variant="standard"
                  label="E-post"
                  name="email"
                  error={
                    email?.value === '' ||
                    (email?.valid !== undefined && email?.valid === false)
                  }
                  helperText={
                    email?.value === ''
                      ? 'Fyll i mejladress'
                      : email?.valid !== undefined && email?.valid === false
                      ? 'Ogiltig mejladress använd formatet din@epostadress.se'
                      : ''
                  }
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  margin="normal"
                  fullWidth
                />
              </Box>
              <ConsentGrid>
                <FormGroup sx={{ marginBottom: '2em' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required
                        sx={{
                          justifyContent: 'flex-start',
                        }}
                        inputProps={{ 'aria-label': 'controlled' }}
                        checked={gdprChecked}
                        onChange={(e) => setGdprChecked(e?.target.checked)}
                      />
                    }
                    label="Jag godkänner att mina personuppgifter lagras"
                  />
                  <i>
                    <Typography variant="body1" gutterBottom>
                      Läs mer om hur vi på Qape använder dina{' '}
                      <a href="">Personuppgifter</a>
                    </Typography>
                  </i>
                </FormGroup>
                {process.env.REACT_APP_SITE_KEY && (
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    onChange={handleCaptchaOnChange}
                  />
                )}
                <Button
                  sx={{ marginTop: '2em' }}
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={(event) => handleOnEmailRequestClick(event)}
                  disabled={
                    (!captchVerified &&
                      process.env.NODE_ENV !== 'development') ||
                    !gdprChecked
                  }
                >
                  Skicka
                </Button>
              </ConsentGrid>
            </FormWrapper>
          )}
          {renderEmailMessage()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
