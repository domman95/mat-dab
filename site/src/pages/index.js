import React from 'react';
import styled from 'styled-components';
import Hero from '../components/hero';
import Section from '../components/section';
import Button from '../components/button';
import Paragraph from '../components/paragraph';
import Title from '../components/title';
import About from '../assets/about.png';
import RealizationGallery from '../components/realizationGallery';
import Proof from '../components/proof';
import Customers from '../assets/customers.png';
import ContactPng from '../assets/contact.png';
import Form from '../components/form';
import Layout from '../components/layout';
import Contact from '../components/contact';

const StyledMain = styled.main`
  padding: 16rem 2rem 6rem 2rem;
`;

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <StyledMain>
        <Section right>
          <img className="illustration" src={About} alt="" />
          <div className="content">
            <Title>kilka słów o nas...</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </Paragraph>
            <Button link="/oferta">zobacz pełną ofertę</Button>
          </div>
        </Section>

        <RealizationGallery />

        <Section left>
          <img className="illustration" src={Customers} alt="" />
          <div className="content">
            <Title>co mówią o nas...</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </Paragraph>
            <Button link="#proof">zobacz co w sieci piszczy</Button>
          </div>
        </Section>

        <Proof />

        <Section right id="contact">
          <img className="illustration" src={ContactPng} alt="" />
          <Contact />
        </Section>
        <Form />
      </StyledMain>
    </Layout>
  );
}
