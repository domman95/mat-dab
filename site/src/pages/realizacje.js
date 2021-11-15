import { graphql } from 'gatsby';
import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';
import Slider from 'react-slick';
import styled from 'styled-components';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeader from '../components/sectionHeader';
import SEO from '../components/seo';
import Title from '../components/title';

const CarouselStyled = styled(Slider)`
  width: 100%;

  .wrapper {
    width: 100%;
    height: 260px;

    img {
      object-fit: cover;
      height: 100%;
    }
  }

  .slick-next,
  .slick-prev {
    &::before {
      display: none;
    }
  }

  .slick-dots {
    button::before {
      font-size: 10px;
    }
    bottom: 20px;
  }
`;

const StyledMain = styled.main`
  padding: 10rem 2rem 6rem 2rem;

  .container {
    max-width: 1200px;
    margin: 2rem auto 0;

    columns: 3 300px;
    column-gap: 2rem;

    .realization {
      display: inline-block;
      margin-bottom: 2rem;
      width: 100%;
      box-shadow: var(--shadow);

      img {
        width: 100%;
      }

      .details {
        background: var(--sectionColor);
        padding: 2rem;

        .paragraph {
          margin: 2rem 0;
        }
      }
    }
  }
`;

export default function RealizationPage({ data }) {
  const { nodes } = data.allSanityRealization;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  return (
    <Layout>
      <SEO title="Realizacje" />
      <StyledMain>
        <SectionHeader>realizacje</SectionHeader>
        <div className="container">
          {nodes.map(({ id, title, content, image }) => (
            <div className="realization" key={id}>
              <CarouselStyled {...settings}>
                {image.map((item) => (
                  <div className="wrapper" key={item.asset._id}>
                    <SanityImage {...item} alt={title} />
                  </div>
                ))}
              </CarouselStyled>
              <div className="details">
                <Title>{title}</Title>
                <Paragraph>{content}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </StyledMain>
    </Layout>
  );
}

export const query = graphql`
  query realization {
    allSanityRealization {
      nodes {
        id
        title
        content
        image {
          ...ImageWithPreview
        }
      }
    }
  }
`;
