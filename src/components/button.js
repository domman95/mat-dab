import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledButton = styled(Link)`
  display: inline-block;
  font-size: 1.2rem;
  font-size: clamp(1.2rem, 1vw, 1.6rem);
  letter-spacing: 0.05rem;
  color: var(--white);
  border: 2px solid var(--lightOrange);
  padding: 0.7rem 1.8rem;
  border-radius: 2.5rem;
  box-shadow: var(--shadow);
  cursor: pointer;

  span {
    margin-left: 0.8rem;
  }
`;

export default function Button({ children, link = '/' }) {
  return (
    <StyledButton tabIndex="0" to={link}>
      {children}
      <span>→</span>
    </StyledButton>
  );
}
