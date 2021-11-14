import React from 'react';
import styled, { css } from 'styled-components';

const StyledTitle = styled.h2`
  color: var(--white);
  font-size: 2rem;
  font-size: clamp(2rem, 1vw, 2.6rem);
  font-weight: var(--medium);
  font-family: var(--montserrat);

  ${({ offer }) =>
    offer &&
    css`
      text-transform: uppercase;
      font-weight: var(--extraBold);
      color: var(--lightOrange);
      font-size: clamp(2rem, 1vw, 2.6rem);
    `}
`;

export default function Title({ children, offer = false }) {
  return (
    <StyledTitle className="styledTitle" offer={offer}>
      {children}
    </StyledTitle>
  );
}
