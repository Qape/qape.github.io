import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Fab, Zoom } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { MutableRefObject } from 'react';

type ScrollToTopProps = {
  navigationRef?: MutableRefObject<HTMLDivElement | null>;
};

const ScrollToTop = ({ navigationRef }: ScrollToTopProps) => {
  const trigger = useScrollTrigger({
    target: window.document.querySelector('back-to-top-anchor') || undefined,
    disableHysteresis: true,
    threshold: 1000,
  });

  return (
    <Zoom in={trigger} id="scroll-to-top">
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={() =>
            navigationRef?.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest',
            })
          }
          color="primary"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
