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
import Masonry from 'react-masonry-css';

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
`;

const StyledMain = styled.main`
  padding: 10rem 2rem 6rem 2rem;

  .container {
    max-width: 1200px;
    margin: 2rem auto 0;

    .my-masonry-grid {
      display: -webkit-box; /* Not needed if autoprefixing */
      display: -ms-flexbox; /* Not needed if autoprefixing */
      display: flex;
      margin-left: -30px; /* gutter size offset */
      width: auto;
    }
    .my-masonry-grid_column {
      padding-left: 30px; /* gutter size */
      background-clip: padding-box;
    }

    .realization {
      margin-bottom: 2rem;
      width: 100%;
      box-shadow: var(--shadow);
      overflow: hidden;

      .slider {
        width: 100%;

        img {
          width: 100%;
        }
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

  const breakpointsColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Layout>
      <SEO title="Realizacje" />
      <StyledMain>
        <SectionHeader>realizacje</SectionHeader>
        <div className="container">
          <Masonry
            breakpointCols={breakpointsColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {nodes.map(({ id, title, content, image }) => (
              <div className="realization" key={id}>
                <div className="slider">
                  <CarouselStyled {...settings}>
                    {image.map((item) => (
                      <div className="wrapper" key={item.asset._id}>
                        <SanityImage {...item} alt={title} />
                      </div>
                    ))}
                  </CarouselStyled>
                </div>
                <div className="details">
                  <Title>{title}</Title>
                  <Paragraph>{content}</Paragraph>
                </div>
              </div>
            ))}
          </Masonry>
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
