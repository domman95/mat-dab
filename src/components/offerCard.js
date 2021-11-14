import React from 'react';
import styled from 'styled-components';
import Button from './button';
import Paragraph from './paragraph';
import Title from './title';

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem 2rem;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  margin: 4rem 0;

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .paragraph {
      margin: 2rem 0;
    }
  }

  .img {
    display: block;
    transform: translateY(-3rem) rotate(-4deg);
    width: 100%;
    height: 25rem;
    object-fit: cover;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }

  &:nth-child(even) img {
    transform: translateY(-3rem) rotate(4deg);
  }

  @media (min-width: 600px) {
    &:nth-child(even) img {
      transform: translateY(-3rem) rotate(-4deg);
    }
  }

  @media (min-width: 768px) {
    padding: 2rem 2rem;
    flex-direction: row-reverse;
    justify-items: flex-start;
    width: 100%;

    .content {
      max-width: 60%;
    }

    .img {
      max-width: 40%;
      transform: translate(5rem, -5rem) rotate(-4deg);
    }

    &:nth-child(even) {
      flex-direction: row;

      .content {
        align-items: flex-end;

        .paragraph {
          text-align: right;
        }
      }

      .img {
        transform: translate(-5rem, -5rem) rotate(-4deg);
      }
    }
  }
`;

export default function OfferCard() {
  return (
    <StyledCard id="offerCard">
      <img
        className="img"
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
        alt=""
      />
      <div className="content">
        <Title offer>nowoczesne kuchnie</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit ut aliquam, purus sit amet luctus
          venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
          aliquam, purus sit amet luctus venenatis.
        </Paragraph>
        <Button>skontaktuj się z nami</Button>
      </div>
    </StyledCard>
  );
}
