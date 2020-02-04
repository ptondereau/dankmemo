import React from 'react';
import styled, { css } from 'styled-components/macro';

const CardBack = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #556;
  background-image: linear-gradient(
      30deg,
      #445 12%,
      transparent 12.5%,
      transparent 87%,
      #445 87.5%,
      #445
    ),
    linear-gradient(
      150deg,
      #445 12%,
      transparent 12.5%,
      transparent 87%,
      #445 87.5%,
      #445
    ),
    linear-gradient(
      30deg,
      #445 12%,
      transparent 12.5%,
      transparent 87%,
      #445 87.5%,
      #445
    ),
    linear-gradient(
      150deg,
      #445 12%,
      transparent 12.5%,
      transparent 87%,
      #445 87.5%,
      #445
    ),
    linear-gradient(
      60deg,
      #99a 25%,
      transparent 25.5%,
      transparent 75%,
      #99a 75%,
      #99a
    ),
    linear-gradient(
      60deg,
      #99a 25%,
      transparent 25.5%,
      transparent 75%,
      #99a 75%,
      #99a
    );
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
  backface-visibility: hidden;
`;

const CardContainer = styled.div<{ flipped: boolean }>`
  width: 137px;
  height: 200px;
  cursor: pointer;
  perspective: 1000px;
  ${props =>
    !props.flipped &&
    css`
      ${CardInner} {
        transform: rotateY(180deg);
      }
    `}
`;

type Props = {
  imageSource: string;
  flipped: boolean;
  onClick: () => void;
};

const Card: React.FC<Props> = ({ imageSource, flipped, onClick }) => {
  return (
    <CardContainer flipped={flipped} onClick={onClick}>
      <CardInner>
        <CardFront />
        <CardBack src={imageSource} />
      </CardInner>
    </CardContainer>
  );
};

export default Card;
