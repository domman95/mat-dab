import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: var(--regular);
`;

export default function Paragraph({ children }) {
  return <StyledParagraph className="paragraph">{children}</StyledParagraph>;
}
