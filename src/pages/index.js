import React from 'react';
import styled from 'styled-components';
import Hero from '../components/hero';
import Nav from '../components/nav';
import SEO from '../components/seo';
import Section from '../components/section';
import GlobalStyle from '../styles/GlobalStyles';
import Button from '../components/button';
import Paragraph from '../components/paragraph';
import Title from '../components/title';
import About from '../assets/about.png';
import RealizationGallery from '../components/realizationGallery';
import Proof from '../components/proof';
import Customers from '../assets/customers.png';
import Contact from '../assets/contact.png';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Form from '../components/form';
import Footer from '../components/footer';
import Layout from '../components/layout';

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
          <img className="illustration" src={Contact} alt="" />
          <div className="contact">
            <h3 className="title">skontaktuj się z nami</h3>
            <ul className="social-media">
              <li className="social">
                <FaFacebookF />
                <a href="">facebook/matdab</a>
              </li>
              <li className="social">
                <FaInstagram />
                <a href="">instagram/matdab</a>
              </li>
              <li className="social">
                <FaPhoneAlt />
                <a href="">+48 667 172 626</a>
              </li>
              <li className="social">
                <HiOutlineMail />
                <a href="">matdab@gmail.com</a>
              </li>
            </ul>
          </div>
        </Section>

        <Form />
      </StyledMain>
    </Layout>
  );
}
