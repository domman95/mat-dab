import React from 'react';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';
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

export default function OfferCard({ title, description, image }) {
  return (
    <StyledCard id="offerCard">
      <SanityImage className="img" {...image} alt={title} />
      <div className="content">
        <Title offer>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <Button link="/#contact">skontaktuj się z nami</Button>
      </div>
    </StyledCard>
  );
}
