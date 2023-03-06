import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import * as React from 'react';

const ContactUs = () => {
  const [name, setName] = React.useState<TextField | undefined>(undefined);
  const [email, setEmail] = React.useState<TextField | undefined>(undefined);
  const [message, setMessage] = React.useState<TextField | undefined>(
    undefined
  );

  type TextField = {
    value: string;
    valid?: boolean;
  };

  const isEmail = (email: string | undefined): boolean =>
    // eslint-disable-next-line no-useless-escape
    email ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) : false;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    console.log(val);
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

  console.log(email);
  console.log(message);

  return (
    <Box sx={{ background: '#122838', padding: '4em' }}>
      <Typography
        variant="h5"
        align="center"
        component="h1"
        gutterBottom
        color="#fff"
      >
        {'Kontakta oss'.toUpperCase()}
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <form
            id="contact-form"
            className=""
            onSubmit={(e) => {
              console.log(e);
            }}
          >
            <Grid item>
              <TextField
                required
                id="name"
                label="Namn"
                error={name?.value === ''}
                helperText={name?.value === '' ? 'Fyll i namn' : ''}
                name="userName"
                inputProps={{ maxLength: 30 }}
                onChange={(e) => {
                  setName({ value: e.target.value, valid: true });
                  console.log(e);
                }}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="email"
                label="din@epostadress.se"
                name="email"
                error={
                  email?.value === '' ||
                  (email?.valid !== undefined && email?.valid === false)
                }
                helperText={
                  email?.value === ''
                    ? 'Fyll i mejladress'
                    : email?.valid !== undefined && email?.valid === false
                    ? 'Ej giltig mejladress använd formatet din@epostadress.se'
                    : ''
                }
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="message"
                label="Meddelande"
                name="message"
                onChange={(e) => {
                  console.log(e);
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
              style={{ marginTop: 20 }}
            >
              <Grid item>
                <Button type="reset" variant="contained">
                  Avbryt
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  color="primary"
                  variant="outlined"
                  onClick={(e) => e?.preventDefault()}
                >
                  Skicka
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
