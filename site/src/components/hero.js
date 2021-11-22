import React from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.jpg';
import logo from '../assets/logo.png';
import kitchen from '../assets/kitchen.png';
import wardrobe from '../assets/wardrobe.png';
import cloakroom from '../assets/cloakroom.png';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 800px;
  height: 98vh;

  #logo {
    object-fit: cover;
    width: 80%;
    max-width: 380px;
  }

  .box {
    position: absolute;
    max-width: 1200px;
    width: calc(100% - 40px);
    background-color: var(--white);
    padding: 30px 20px;
    border-radius: var(--radius);
    bottom: 0;
    transform: translateY(50%);
    box-shadow: var(--shadow);

    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      align-items: center;

      li {
        display: grid;
        justify-items: center;
        color: var(--black);
        border-right: 2px dotted var(--lightOrange);
        width: 100%;

        &:nth-last-child(1) {
          border: none;
        }

        img {
          object-fit: cover;
          padding: 10px 0;
          width: 32px;
        }

        p {
          font-size: 1.6rem;
          font-family: var(--alfaFont);
        }
      }
    }
  }
`;

export default function Hero() {
  return (
    <StyledHeader heroimg="">
      <img id="logo" src={logo} alt="mat-dab logo" />
      <article className="box">
        <ul>
          <li>
            <img src={kitchen} alt="kuchnie" />
            <p>kuchnie</p>
          </li>
          <li>
            <img src={wardrobe} alt="szafy" />
            <p>szafy</p>
          </li>
          <li>
            <img src={cloakroom} alt="garderoby" />
            <p>garderoby</p>
          </li>
        </ul>
      </article>
    </StyledHeader>
  );
}
