import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import {
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
import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';

import { device } from '../pages/index';
import { isEmail, isMobilePhoneNumber } from './utils/Regex.util';

const BoxWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 2em;

  @media ${device.mobileL} {
    margin-top: 2em;
    flex-direction: column;
  }

  @media ${device.tablet} {
    margin-top: 2em;
    flex-direction: column;
  }

  @media ${device.laptop} {
    margin-top: 0;
    padding: 4em;
    flex-direction: column;
  }

  @media ${device.laptopL} {
    flex-direction: row;
  }
`;

const FormWrapper = styled.form`
  margin: 0 3em;
  @media ${device.tablet} {
    margin: 0 6em;
  }
`;

const InformationSection = styled.div`
  margin: 0 1em 0 1em;
  align-self: center;
`;

const ContactFieldWrapper = styled.div`
  display: block;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

const ContactUs = () => {
  const [name, setName] = React.useState<TextField | undefined>(undefined);
  const [phone, setPhone] = React.useState<TextField | undefined>(undefined);
  const [email, setEmail] = React.useState<TextField | undefined>(undefined);
  const [message, setMessage] = React.useState<TextField | undefined>(
    undefined
  );
  const [gdprChecked, setGdprChecked] = React.useState(false);
  const [captchVerified, setCaptchaVerified] = React.useState(false);

  type TextField = {
    value: string;
    valid?: boolean;
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCaptchaVerified(false);
    setGdprChecked(false);
    setName(undefined);
    setPhone(undefined);
    setEmail(undefined);
    setMessage(undefined);

    // CALL ENDPOINT FOR SENDING EMAIL
  };

  return (
    <BoxWrapper id="box-wrapper">
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
          Är du intresserad av att veta mer om oss eller om IT branchens bästa
          modell?
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
        <Grid item>
          <FormWrapper
            id="contact-form"
            className=""
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <ContactFieldWrapper>
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
            </ContactFieldWrapper>
            <Grid item>
              <TextField
                id="message"
                label="Meddelande"
                name="message"
                variant="standard"
                onChange={(e) => {
                  setMessage({
                    value: e.target.value,
                    valid: true,
                  });
                }}
                error={message?.value === ''}
                helperText={message?.value === '' ? 'Fyll i meddelande' : ''}
                margin="normal"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
            <Grid
              container
              direction="row"
              spacing={2}
              style={{ marginTop: 20, flexDirection: 'column' }}
            >
              <FormGroup sx={{ paddingLeft: '16px', marginBottom: '16px' }}>
                <Typography variant="body1" sx={{ marginBottom: '32px' }}>
                  Markera rutan nedan för att ge ditt medgivande till att vi
                  lagrar och behandlar dina personuppgifter enligt GDPR, EU:s
                  nya dataskyddsförordning. Läs mer om hur vi på Qape använder
                  dina <a href="">personuppgifter</a>
                </Typography>
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
                  label="Jag godkänner att mina uppgifter sparas"
                />
              </FormGroup>
              {process.env.REACT_APP_SITE_KEY &&
                name?.valid &&
                phone?.valid &&
                email?.valid &&
                gdprChecked && (
                  <ReCAPTCHA
                    style={{ marginLeft: '16px' }}
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    onChange={handleCaptchaOnChange}
                  />
                )}
              <Grid item>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={!captchVerified || !gdprChecked}
                >
                  Skicka
                </Button>
              </Grid>
            </Grid>
          </FormWrapper>
        </Grid>
      </Grid>
    </BoxWrapper>
  );
};

export default ContactUs;
