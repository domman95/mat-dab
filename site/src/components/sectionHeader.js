import React from 'react';
import styled from 'styled-components';

const StyledSectionHeader = styled.h1`
  font-size: clamp(1vw, 8vw, 12.2rem);
  font-weight: var(--extraBold);
  font-family: var(--montserrat);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: var(--lightOrange);
  margin: 0;
  padding: 0;
`;

export default function SectionHeader({ children }) {
  return (
    <StyledSectionHeader className="sectionHeader">
      {children}
    </StyledSectionHeader>
  );
}
