import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import Title from '../components/title';

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 0 2rem;
  height: 84vh;

  .errorCode {
    position: relative;
    display: inline-block;
    font-family: var(--montserrat);
    font-size: 10rem;
    font-size: clamp(3.4rem, 10vw, 10rem);
    width: 100%;
    text-align: center;

    &::before {
      content: '404';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -40%);
      opacity: 0.07;
      font-size: 24rem;
      font-size: clamp(7rem, 25vw, 24rem);
    }
  }

  .errorContent {
    margin: 3rem auto 0;
    padding: 2rem;
    text-align: center;

    .paragraph {
      margin: 2rem 0;
    }
  }
`;

export default function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <div className="errorCode">Błąd 404</div>
        <div className="errorContent">
          <Title>coś poszło nie tak...</Title>
          <Paragraph>
            Prawdopodobnie strona, o którą pytasz nie istnieje... wróć do strony
            głównej i spróbuj raz jeszcze!
          </Paragraph>
          <Button link="#proof">wróć na stronę główną</Button>
        </div>
      </Container>
    </Layout>
  );
}
