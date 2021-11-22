import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import styled from 'styled-components';
import Dlwebdev from '../assets/dlwebdev.png';
import { findIcon } from './contact';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: var(--lightOrange);

  .socials {
    display: flex;
    align-items: center;

    svg {
      --size: 2.4rem;
      width: var(--size);
      height: var(--size);
      margin: 0 1rem 1rem;
      color: var(--black);
    }
  }

  .private-policy,
  .copyright,
  .createdBy {
    color: var(--black);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;

    a {
      color: var(--black);
      margin-left: 0.5rem;

      img {
        width: 72px;
      }
    }
  }

  .copyright {
    font-size: 1.4rem;
  }

  .createdBy {
    display: flex;
    align-items: center;
  }

  .heart {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
    color: red;
    fill: red;
    margin: 0 0.5rem;
  }
`;

export default function Footer() {
  const { allSanitySocials } = useStaticQuery(graphql`
    query socials {
      allSanitySocials {
        nodes {
          id
          type
          url
        }
      }
    }
  `);

  const { nodes } = allSanitySocials;

  return (
    <StyledFooter>
      <ul className="socials">
        {nodes.map(({ id, type, url }) => (
          <li className="icon" key={id}>
            <a href={url}>{findIcon(type)}</a>
          </li>
        ))}
      </ul>
      <Link to="/polityka-prywatnosci" className="private-policy">
        polityka prywatności
      </Link>
      <p className="copyright">
        © 2021 Mat-Dab Mable Na Wymiar. <br /> Wszelkie prawa zastrzeżone
      </p>
      <p className="createdBy">
        Strona wykonana z <FiHeart className="heart" /> ️przez:
        <a href="https://dlwebdev.com">
          <img src={Dlwebdev} alt="dlwebdev strony internetowe" />
        </a>
      </p>
    </StyledFooter>
  );
}
