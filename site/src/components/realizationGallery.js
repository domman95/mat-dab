import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Button from './button';

const StyledGallery = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 100px auto;
  max-width: 1200px;

  .gallery {
    margin-bottom: 40px;

    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .image {
    border-radius: var(--radius);
    width: 100%;
    height: 240px;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: var(--shadow);

    &:nth-last-child(1) {
      margin: 0;
    }
  }
`;

export default function RealizationGallery() {
  const { allSanityRealization } = useStaticQuery(graphql`
    query images {
      allSanityRealization {
        nodes {
          id
          title
          image {
            ...ImageWithPreview
          }
        }
      }
    }
  `);

  const { nodes } = allSanityRealization;

  return (
    <StyledGallery>
      <div className="gallery">
        {nodes.slice(0, 6).map(({ id, title, image }) => (
          <SanityImage key={id} className="image" {...image[0]} alt={title} />
        ))}
      </div>
      <Button link="realizacje">zobacz wszystkie realizacje</Button>
    </StyledGallery>
  );
}
