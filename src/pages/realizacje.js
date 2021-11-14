import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import SectionHeader from '../components/sectionHeader';
import SEO from '../components/seo';
import Title from '../components/title';

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

export default function RealizationPage() {
  return (
    <Layout>
      <SEO title="Realizacje" />
      <StyledMain>
        <SectionHeader>realizacje</SectionHeader>
        <div className="container">
          <div className="realization">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
              alt=""
            />
            <div className="details">
              <Title>Projekt numer 1</Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci, consequuntur vero tenetur aspernatur laboriosam
                perferendis?
              </Paragraph>
            </div>
          </div>
          <div className="realization">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
              alt=""
            />
            <div className="details">
              <Title>Projekt numer 1</Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci, consequuntur vero tenetur aspernatur laboriosam
                perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Possimus, minima.
              </Paragraph>
            </div>
          </div>
          <div className="realization">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
              alt=""
            />
            <div className="details">
              <Title>Projekt numer 1</Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci, consequuntur vero tenetur aspernatur laboriosam
                perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quia debitis tempora dolorum, dicta maiores cupiditate rem
                consequuntur ab sequi cum saepe. Quos at assumenda, quaerat
                similique velit distinctio corrupti unde beatae magni, odio rem
                totam perferendis ab necessitatibus laborum voluptate iusto
                numquam ipsam pariatur deleniti? Libero consequatur similique
                minus delectus.
              </Paragraph>
            </div>
          </div>
          <div className="realization">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
              alt=""
            />
            <div className="details">
              <Title>Projekt numer 1</Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci, consequuntur vero tenetur aspernatur laboriosam
                perferendis? Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Eos, similique. Enim, sequi saepe ipsam nesciunt accusamus
                numquam esse. Sint, quasi?
              </Paragraph>
            </div>
          </div>
          <div className="realization">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
              alt=""
            />
            <div className="details">
              <Title>Projekt numer 1</Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci, consequuntur vero tenetur aspernatur laboriosam
                perferendis? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Possimus, minima.
              </Paragraph>
            </div>
          </div>
        </div>
      </StyledMain>
    </Layout>
  );
}
