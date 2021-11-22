import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.div`
  width: 100%;
  height: 76vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
  }
`;

export default function Admin() {
  const isBrowser = typeof window === 'object';

  useEffect(() => {
    if (!isBrowser) return null;
    if (isBrowser) {
      navigate('https://matdab.sanity.studio/desk', { replace: true });
    }
  }, []);

  return (
    <Layout>
      <Container>
        <h2>Jesteś przenoszony na stronę swojego dostawcy treści!</h2>
      </Container>
    </Layout>
  );
}
