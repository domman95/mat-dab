import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .title {
    color: var(--darkOrange);
    font-size: 2.6rem;
    font-size: clamp(2rem, 10vw, 2.6rem);
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-family: var(--montserrat);
  }

  .social-media {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    svg {
      --size: 2.2rem;
      width: var(--size);
      height: var(--size);
      margin-right: 2rem;
    }

    a {
      color: var(--white);
      font-size: 1.8rem;
      text-decoration: none;
    }
  }
`;

export default function Contact() {
  const { allSanitySocials, allSanityContact } = useStaticQuery(graphql`
    query socialsAndContacts {
      allSanitySocials {
        nodes {
          id
          name
          slug {
            current
          }
          url
        }
      }
      allSanityContact {
        nodes {
          id
          name
          value
        }
      }
    }
  `);

  return (
    <StyledContact>
      <h3 className="title">skontaktuj się z nami</h3>
      <ul className="social-media">
        {console.log(allSanitySocials)}
        {allSanitySocials.nodes.map(({ id, name, slug, url }) => (
          <li key={id} className="social">
            <FaFacebookF />
            <a href={url}>{slug.current}</a>
          </li>
        ))}
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
    </StyledContact>
  );
}
