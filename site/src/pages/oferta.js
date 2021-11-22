import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Button from '../components/button';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import Seo from '../components/seo';
import Title from '../components/title';
import OfferPng from '../assets/offer.png';
import OfferCard from '../components/offerCard';
import Layout from '../components/layout';
import SectionHeader from '../components/sectionHeader';

const StyledMain = styled.main`
  padding: 16rem 2rem 6rem 2rem;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 600px) {
      gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    padding: 20rem 6rem 6rem 6rem;
    .container {
      grid-template-columns: 1fr;
    }
  }

  .sectionHeader {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-10%, -50%) rotate(4deg);
  }
`;

export default function OfferPage({ data }) {
  const { nodes } = data.allSanityOffer;

  return (
    <Layout>
      <Seo title="Oferta" />
      <StyledMain>
        <Section>
          <SectionHeader>oferta</SectionHeader>
          <img className="illustration" src={OfferPng} alt="" />
          <div className="content">
            <Title>oferujemy realizację marzeń...</Title>
            <Paragraph>
              o nowoczesnej i funkcjonalnej kuchni, o przestronnej i pojemnej
              garderobie oraz...
            </Paragraph>
            <Button link="#oferty">czytaj dalej</Button>
          </div>
        </Section>
        <div className="container" id="oferty">
          {nodes.map(({ id, name, content, image }) => (
            <OfferCard
              key={id}
              title={name}
              description={content}
              image={image}
            />
          ))}
        </div>
      </StyledMain>
    </Layout>
  );
}

export const query = graphql`
  query Offer {
    allSanityOffer(sort: { fields: name }) {
      nodes {
        id
        name
        content
        image {
          ...ImageWithPreview
        }
      }
    }
  }
`;
