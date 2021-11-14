import React from 'react';
import styled from 'styled-components';
import Button from './button';

const StyledGallery = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 100px auto;
  max-width: 1200px;

  .gallery {
    margin-bottom: 40px;

    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  img {
    border-radius: var(--radius);
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: var(--shadow);

    &:nth-last-child(1) {
      margin: 0;
    }
  }
`;

export default function RealizationGallery() {
  return (
    <StyledGallery>
      <div className="gallery">
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
          alt=""
        />
      </div>
      <Button link="realizacje">zobacz wszystkie realizacje</Button>
    </StyledGallery>
  );
}
