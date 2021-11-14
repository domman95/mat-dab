import React from 'react';
import styled from 'styled-components';

const StyledProof = styled.section`
  --top: 50px;
  width: calc(100% + 4rem);
  transform: translateX(-20px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--top) 20px calc(var(--top) + (var(--top) / 2));
  background-color: var(--white);
  margin: 100px 0;

  .proof {
    position: relative;
    display: inline-block;
    color: var(--black);
    font-weight: var(--medium);
    font-size: 1.8rem;
    font-style: italic;
    text-align: center;
    max-width: 60%;

    .signature {
      position: absolute;
      bottom: -30px;
      right: 30px;
      color: var(--darkOrange);
    }
  }

  @media (min-width: 1000px) {
    .proof {
      max-width: 45%;
    }
  }
`;

export default function Proof() {
  return (
    <StyledProof id="proof">
      <div className="proof">
        <p>
          "Ut nulla eu labore occaecat culpa irure culpa velit anim Lorem
          voluptate ex officia. Laboris laborum enim ullamco id incididunt est
          incididunt elit non culpa non. Nulla pariatur deserunt sint ad veniam
          consequat ea labore id ut dolore."
          <span className="signature">~Robert S.</span>
        </p>
      </div>
    </StyledProof>
  );
}
