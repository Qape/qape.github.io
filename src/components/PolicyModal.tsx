import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
  openPolicyModal: boolean | undefined;
  setOpenPolicyModal: Dispatch<SetStateAction<boolean | undefined>>;
};

const IconWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '1rem',
};

export default function PolicyModal1({
  openPolicyModal,
  setOpenPolicyModal,
}: Props) {
  const [open, setOpen] = useState<boolean>(!!openPolicyModal);

  useEffect(() => {
    openPolicyModal ? setOpen(true) : undefined;
  }, [openPolicyModal]);

  const handleCloseModal = () => {
    setOpenPolicyModal(false);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { mobile: 400, sm: 'auto' },
              bgcolor: 'background.paper',
              borderRadius: '0',
              boxShadow: 24,
              py: 4,
            }}
          >
            <Box sx={IconWrapper}>
              <Typography variant="h5" component="h2" sx={{ px: 4 }}>
                Integritetspolicy
              </Typography>
              <IconButton
                id="close-button"
                onClick={handleCloseModal}
                aria-label="stänga meny"
                sx={{
                  borderRadius: 0,
                  justifyContent: 'flex-end',
                }}
              >
                <CloseIcon sx={{ color: 'black' }} />
              </IconButton>
            </Box>
            <Typography
              component="div"
              sx={{ px: 4, mt: 2, maxHeight: '50vh', overflowY: 'auto' }}
            >
              <Typography variant="h6" component="h2" gutterBottom>
                1. Vilka personuppgifter hanterar vi?
              </Typography>
              <Typography variant="body1" gutterBottom>
                De personuppgifter vi samlar in om dig består dels av
                kunduppgifter eller kandidatuppgifter som du själv lämnar till
                oss. Personuppgifter du själv lämnar är sådana uppgifter som
                exempelvis namn, telefonnummer, e-postadress eller vid en
                kontakt med oss.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                2. Vad används uppgifterna till
              </Typography>
              <Typography variant="body1" gutterBottom>
                Att fullgöra avtal med kunder. Att fullgöra lagliga
                förpliktelser. Att genomföra direktmarknadsföring. Enligt
                gällande dataskyddsreglering får personuppgifter bara samlas in
                för ”särskilda, uttryckligt angivna och berättigande ändamål.”
                Personuppgifterna får sedan inte behandlas på ett sätt som är
                oförenligt med dessa ändamål. Dessutom måste man också ha stöd i
                dataskyddsreglering för att hantera personuppgifter, ett sådant
                stöd kallas för rättslig grund.
              </Typography>
              <Typography variant="body1" gutterBottom>
                För att vi lagligen ska få behandla dina personuppgifter krävs
                det att någon av följande grunder är uppfylld; Behandlingen är
                nödvändig för att vi ska kunna fullgöra vårt avtal med dig.
                Behandlingen är nödvändig för att vi har en legal skyldighet att
                göra något enligt en annan lag. Behandling är nödvändig för
                berättigande intressen hos Qape och att dina intressen av skydd
                för dina personuppgifter inte väger tyngre. Behandling gäller i
                enlighet med samtycke du som person lämnat.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Vi behandlar dina personuppgifter baserat på någon av följande
                tre rättsliga grunder; Fullgörande av ingångna avtal, Berättigat
                intresse och Efterlevnad av lagar. För att vår verksamhet ska
                fungera på bästa sätt för dig som kund eller kandidat behöver vi
                behandla vissa personuppgifter.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                3. Hur samlar vi in personuppgifter?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Personuppgifter samlas in genom att du lämnar personuppgifter
                vid mejl via hemsidan, kontakt med oss via e-post, telefon eller
                fysiskt besök.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                4. Säkerhet
              </Typography>
              <Typography variant="body1" gutterBottom>
                Vi använder IT-system för att skydda sekretessen, integriteten
                och tillgången till dina personuppgifter. Endast de personer som
                faktiskt behöver behandla dina personuppgifter för att vi ska
                kunna uppfylla våra angivna ändamål har tillgång till dem.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                5. Rättigheter
              </Typography>
              <Typography variant="body1" gutterBottom>
                Vi sparar personuppgifter (i de fall kund inte begärt om en
                radering eller ändring av personuppgifter under avtalstid). Du
                har alltid rätt att vända dig till oss och be att dina
                personuppgifter raderas. Du har rätt att veta vad vi gör med
                dina personuppgifter som till exempel när och hur dina
                personuppgifter behandlas och varför. Du har dessutom rätt att i
                vissa fall få ut dina personuppgifter eller få de flyttade,
                rättade, raderade eller blockade.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Dina rättigheter som kund:
              </Typography>
              <Typography variant="body1" gutterBottom>
                <ul>
                  <li>
                    Tillgång till vilka personuppgifter vi tillhandahåller som
                    berör dig
                  </li>
                  <li>Rättelse av personuppgifter</li>
                  <li>Radering – rätt att bli ”glömd”</li>
                  <li>Begränsning av behandling</li>
                  <li>Invändning</li>
                  <li>Dataportabilitet</li>
                </ul>
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                6. Kontaktuppgifter
              </Typography>
              <Typography variant="body1" gutterBottom>
                Du kan kontakta oss <a href="hej@qape.se">här</a> vid frågor.
              </Typography>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
