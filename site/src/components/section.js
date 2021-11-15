import React from 'react';
import styled, { css } from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  display: grid;
  justify-items: center;
  padding: 4rem 2rem 2rem;
  background: linear-gradient(158deg, #212121 20%, #37373787 50%, #212121 80%);
  max-width: 1200px;
  border-radius: var(--radius);
  margin: 0 auto 10rem;
  box-shadow: var(--shadow);
  height: ${({ header }) => header && '12rem'};

  .illustration {
    width: 100%;
    max-width: 340px;
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .paragraph {
      margin: 2rem 0;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: column;
    column-gap: 2rem;
    padding: 6rem 4rem 4rem;

    .content {
      max-width: 340px;
    }

    ${({ left }) =>
      left &&
      css`
        .illustration {
          grid-column: 1 / 2;
        }

        .content {
          grid-column: 2 / -1;
        }
      `}

    ${({ right }) =>
      right &&
      css`
        .illustration {
          grid-column: 2 / -1;
        }

        .content {
          grid-column: 1 / 2;
        }
      `}
  }
`;

export default function Section({
  children,
  left = true,
  right,
  header = false,
  id,
}) {
  return (
    <StyledSection id={id} left={left} right={right} header={header}>
      {children}
    </StyledSection>
  );
}
