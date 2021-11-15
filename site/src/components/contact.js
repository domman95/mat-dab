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

const findIcon = (input) => {
  switch (input) {
    case 'facebook':
      return <FaFacebookF />;
    case 'instagram':
      return <FaInstagram />;
    case 'phone':
      return <FaPhoneAlt />;
    case 'email':
      return <HiOutlineMail />;
    default:
      break;
  }
};

const typeOfHref = (input) => {
  switch (input) {
    case 'phone':
      return 'tel:';
    case 'email':
      return 'mailto:';
    default:
      break;
  }
};

export default function Contact() {
  const { allSanitySocials, allSanityContact } = useStaticQuery(graphql`
    query socialsAndContacts {
      allSanitySocials {
        nodes {
          id
          name
          type
          slug {
            current
          }
          url
        }
      }
      allSanityContact {
        nodes {
          id
          type
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
        {allSanitySocials.nodes.map(({ id, type, slug, url }) => (
          <li key={id} className="social">
            {findIcon(type)}
            <a href={url}>{slug.current}</a>
          </li>
        ))}
        {allSanityContact.nodes.map(({ id, type, value }) => (
          <li key={id} className="social">
            {findIcon(type)}
            <a href={`${typeOfHref(type)}${value}`}>{value}</a>
          </li>
        ))}
      </ul>
    </StyledContact>
  );
}
