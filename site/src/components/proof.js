import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const CarouselStyled = styled(Slider)`
  margin-bottom: 10rem;
  width: calc(100% + 4rem);
  transform: translateX(-20px);
  background-color: var(--white);
  height: 300px;

  .slick-next {
    right: 25px;

    &::before {
      color: var(--lightOrange);
      font-size: 2.4rem;
    }
  }

  .slick-prev {
    left: 25px;

    &::before {
      color: var(--lightOrange);
      font-size: 2.4rem;
    }
  }

  .slick-dots {
    bottom: 25px;
  }

  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-slide,
  .slick-current {
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
`;

const StyledProof = styled.section`
  display: inline-block;
  color: var(--black);
  font-weight: var(--medium);
  font-size: 1.8rem;
  font-style: italic;
  text-align: center;
  max-width: 60%;
  margin: 0 auto;

  .signature {
    display: inline-block;
    margin-top: 1rem;
    text-align: right;
    width: 100%;
    padding-right: 3rem;
    color: var(--darkOrange);
  }

  @media (min-width: 1000px) {
    max-width: 45%;
  }
`;

export default function Proof() {
  const { allSanityProof } = useStaticQuery(graphql`
    query proof {
      allSanityProof {
        nodes {
          id
          content
          author
        }
      }
    }
  `);

  const { nodes } = allSanityProof;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };

  return (
    <CarouselStyled {...settings}>
      {nodes.map(({ id, content, author }) => (
        <StyledProof key={id}>
          {`"${content}"`}
          <span className="signature">~{author}</span>
        </StyledProof>
      ))}
    </CarouselStyled>
  );
}
