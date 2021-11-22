import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--lightOrange);
  padding: 20px 40px;
  z-index: 99;

  ${({ toggle }) =>
    toggle &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: var(--black);
        opacity: 0.5;
      }
    `}

  .logo {
    font-size: 32px;
    font-family: var(--alfaFont);
    text-transform: uppercase;
    font-weight: var(--extraBold);
    color: var(--white);
    text-decoration: none;
    font-family: var(--montserrat);
  }

  ul {
    position: fixed;
    top: 0;
    right: 0;
    max-width: 360px;
    width: 100%;
    height: 100%;
    background-color: var(--lightOrange);
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 20px;
    transition: transform 0.3s linear;
    transform: ${({ toggle }) =>
      toggle ? 'translateX(0)' : 'translateX(100%)'};

    .centered {
      display: grid;
      justify-items: center;
    }

    li {
      position: relative;
      font-size: 18px;
      display: flex;

      .navlink {
        padding: 8px 26px;
        color: var(--black);
        text-decoration: none;
      }

      .rounded {
        border: 1px solid var(--black);
        border-radius: 25px;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    padding: 20px 60px;

    ul {
      position: static;
      grid-template-columns: 1fr auto;
      max-width: none;
      gap: 0;
      transform: none;

      .centered {
        justify-content: center;
        align-items: center;
        grid-template-columns: 1fr auto 1fr;

        li:nth-child(1)::before {
          --size: 8px;
          content: '';
          position: absolute;
          top: 50%;
          right: calc(var(--size) / -2);
          transform: translateY(-50%);
          width: var(--size);
          height: var(--size);
          background-color: var(--black);
          border-radius: 50%;
        }
      }
    }
  }
`;

const Hamburger = styled.button`
  position: relative;
  --size: 28px;
  width: var(--size);
  height: var(--size);
  border: none;
  background-color: transparent;
  display: grid;
  align-items: center;
  cursor: pointer;
  z-index: 10;

  div {
    height: 2px;
    background-color: var(--black);
  }

  ${({ toggle }) =>
    toggle &&
    css`
      div:nth-child(1) {
        position: relative;
        transform: rotate(45deg);

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--black);
          transform: rotate(90deg);
        }
      }

      div:nth-child(2),
      div:nth-child(3) {
        display: none;
      }
    `};

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <StyledNav toggle={toggle}>
      <Link to="/" className="logo">
        mat-dab
      </Link>
      <ul>
        <div className="centered">
          <li>
            <Link to="/oferta" className="navlink">
              oferta
            </Link>
          </li>
          <li>
            <Link to="/realizacje" className="navlink">
              realizacje
            </Link>
          </li>
        </div>
        <li>
          <Link to="/#contact" className="navlink rounded">
            kontakt
          </Link>
        </li>
      </ul>
      <Hamburger onClick={handleToggle} toggle={toggle}>
        <div />
        <div />
        <div />
      </Hamburger>
    </StyledNav>
  );
}
