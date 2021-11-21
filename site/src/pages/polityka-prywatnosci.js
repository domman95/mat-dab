import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 2rem 2rem;
  min-height: 84vh;

  .privateSection {
    text-align: left;
    padding: 2rem;
  }

  .privateSection h1 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }

  .privateSection h2 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }

  .privateSection .context {
    font-size: 1.6rem;

    a {
      color: var(--white);
      text-decoration: underline;
    }
  }
`;

export default function PrivatePolicy() {
  return (
    <Layout>
      <Container>
        <div className="privateSection">
          <h1>Polityka prywatności</h1>
          <p className="context">
            Niniejsza polityka prywatności i plików cookies opisuje zasady
            postępowania z danymi osobowymi oraz wykorzystywania plików cookies
            i innych technologii w ramach strony internetowej{' '}
            <a href="https://matdabmeblenawymiar.pl">
              https://matdabmeblenawymiar.pl
            </a>{' '}
            Administratorem strony jest Mateusz Dąbrowski, prowadzący
            działalność gospodarczą pod firmą Mateusz Dąbrowski Meble Na Wymiar
            z siedzibą w Sosnowcu 41-219, ul. Dworska 40/1 wpisany do Centralnej
            Ewidencji i Informacji o Działalności Gospodarczej, posługujący się
            numerem NIP 6443456512 Kontakt z administratorem możliwy pod adresem
            e-mail{' '}
            <a href="mailto:matdab.meblenawymiar@gmail.com">
              matdab.meblenawymiar@gmail.com
            </a>
          </p>
        </div>
        <div className="privateSection">
          <h2>§1 Definicje</h2>
          <p className="context">
            1.Na potrzeby niniejszej polityki prywatności, przyjmuje się
            następujące znaczenie poniższych pojęć:
            <br />
            a) Administrator – Mateusz Dąbrowski, prowadzący działalność
            gospodarczą pod firmą Adam Romański z siedzibą w Sosnowcu 41-219,
            ul. Dworska 40/1 wpisany do Centralnej Ewidencji i Informacji o
            Działalności Gospodarczej, posługujący się numerem NIP 6443456512
            <br />
            b) Strona – strona internetowa dostępna pod adresem{' '}
            <a href="https://matdabmeblenawymiar.pl">
              https://matdabmeblenawymiar.pl
            </a>{' '}
            <br />
            c) Użytkownik – każdy podmiot, który korzysta ze Strony.
          </p>
        </div>
        <div className="privateSection">
          <h2>§2 Inspektor Ochrony Danych</h2>
          <p className="context">
            Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora
            Ochrony Danych.
            <br />
            <br />W sprawach dotyczących przetwarzania danych, w tym danych
            osobowych, należy kontaktować się bezpośrednio z Administratorem.
          </p>
        </div>
        <div className="privateSection">
          <h2>§3 Dane osobowe</h2>
          <p className="context">
            1. Użytkownik może przekazywać swoje dane osobowe Administratorowi
            za pomocą formularza dostępnego na Stronie.
            <br />
            2. Administratorem danych osobowych Użytkownika jest Administrator.
            <br />
            3. Dane przekazane Administratowi w ramach formularza przetwarzane
            są w celu uzyskania odpowiedzi na zadane pytanie.
            <br />
            4. Administrator gwarantuje poufność wszelkich przekazanych mu
            danych osobowych.
            <br />
            5. Podanie danych jest zawsze dobrowolne, ale niezbędne do podjęcia
            przez Użytkownika akcji, do której przeznaczony jest dany formularz.
            <br />
            6. Administrator nie udostępnia przekazanych mu danych jakimkolwiek
            podmiotom trzecim.
          </p>
        </div>
        <div className="privateSection">
          <h2>§4 Sposób przetwarzania danych osobowych</h2>
          <p className="context">
            1. Dane osobowe nie będą przekazywane poza Unię Europejską, chyba że
            zostały opublikowane na skutek indywidualnego działania Użytkownika
            (np. wprowadzenie komentarza lub wpisu), co sprawi, że dane będą
            dostępne dla każdej osoby odwiedzającej serwis.
            <br />
            2. Dane osobowe nie będą wykorzystywane do zautomatyzowanego
            podejmowania decyzji (profilowania).
            <br />
            3. Dane osobowe nie będą odsprzedawane podmiotom trzecim.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
