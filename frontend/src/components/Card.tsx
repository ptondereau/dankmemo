import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  perspective: 600px;
`;

const Card: React.FC = () => {
    return (
        <CardContainer>
        </CardContainer>
    );
};

export default Card;
