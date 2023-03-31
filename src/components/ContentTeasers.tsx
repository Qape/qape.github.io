import { Typography } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const ImageAreaContainer = styled.div<{ flipOrder?: boolean }>`
  width: 100%;
  position: relative;
  height: 32rem;
  @media (min-width: 37.5em) {
    height: 40rem;
  }
  @media screen and (min-width: 64em) {
    width: 60%;
    height: 40rem;
    padding-right: 0;
    ${({ flipOrder }) => (flipOrder ? `order: 1; padding-left: 0;` : '')}
  }
`;

const ContentTeaserContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 24px;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    :not(:last-child) {
      margin-bottom: 80px;
    }
  }
`;

const Image = styled.img<{ isImageLoaded?: boolean }>`
  ${({ isImageLoaded }) =>
    isImageLoaded
      ? `transition: opacity ease-in-out 400ms;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;`
      : `opacity: 0;`}
`;

const ContentArea = styled.div<{
  imageAreaVisible: boolean;
}>`
  color: black;
  padding: 24px;
  width: 100%;

  @media (min-width: 64em) {
    ${({ imageAreaVisible }) => imageAreaVisible && `padding: 0 0 48px 48px;`}
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
  }
`;

const PreambleText = styled.span`
  font-size: 1.8rem;
  hyphens: manual;
  @media (min-width: 37.5em) {
    font-size: 2rem;
  }
  @media (min-width: 64em) {
    font-size: 2.4rem;
  }
`;

const PreambleContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.6rem;
`;

const teasers = [
  {
    title: 'Hej',
    preamble: 'dagens teaser',
    id: '123',
    imageUrl: 'https://i.ibb.co/C06b58w/workwithus.jpg',
  },
  {
    title: 'Hej igen',
    preamble: 'dagens teaser 2',
    id: '1234',
    imageUrl: 'https://i.ibb.co/C06b58w/workwithus.jpg',
  },
];

export const ContentTeasers = () => {
  return (
    <>
      {teasers.map((teaser, index) => {
        return (
          <ContentTeaser
            key={teaser.id}
            id={`content-teaser-${index}`}
            flipOrder={!!(index % 2)}
            teaser={teaser}
          />
        );
      })}
      ;
    </>
  );
};

export type Props = {
  id: string;
  teaser: {
    title: string;
    preamble: string;
    id: string;
    imageUrl: string;
  };
  flipOrder: boolean;
};

const ContentTeaser = ({ teaser, id, flipOrder }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const imageUrl = teaser?.imageUrl || '';
  const shouldRenderImageArea = Boolean(imageUrl);

  return Object.keys(teaser).length !== 0 ? (
    <ContentTeaserContainer key={id} data-testid={id}>
      {shouldRenderImageArea ? (
        <ImageAreaContainer
          flipOrder={flipOrder}
          data-testid={`${id}-image-area-container`}
        >
          {imageUrl && (
            <Image
              data-testid={`${id}-image`}
              isImageLoaded={imageLoaded}
              onLoad={() => {
                setImageLoaded(true);
              }}
              alt="image qape"
              src={imageUrl}
            />
          )}
        </ImageAreaContainer>
      ) : null}
      <ContentArea imageAreaVisible={shouldRenderImageArea}>
        {teaser?.title ? (
          <Typography
            component="h1"
            variant="h1"
            id={id}
            data-testid={`${id}-heading`}
          >
            {teaser.title}
          </Typography>
        ) : null}
        {teaser?.preamble ? (
          <PreambleContainer data-testid={`${id}-preamble`}>
            <Typography variant="subtitle1">
              <PreambleText>{teaser.preamble}</PreambleText>
            </Typography>
          </PreambleContainer>
        ) : null}
      </ContentArea>
    </ContentTeaserContainer>
  ) : null;
};
