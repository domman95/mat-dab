import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import { FiSend } from 'react-icons/fi';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 7rem auto 2rem;

  label {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  input,
  textarea {
    padding: 2rem;
    background-color: #4b4b4b;
    font-size: 1.6rem;
    border: 2px dotted var(--lightOrange);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    margin-bottom: 2rem;
    color: var(--white);
  }

  .errorsMessage {
    font-size: 1.2rem;
    background-color: pink;
    margin-bottom: 1rem;
    padding: 1.5rem 1rem;
    border-radius: 0.4rem;
    color: #ff0f0f;
  }

  input {
    height: 4rem;
  }

  textarea {
    min-height: 16rem;
  }

  .agreed {
    position: relative;
    display: grid;
    grid-template-columns: 3rem 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 2rem;
    height: 5rem;
    cursor: pointer;
    font-size: 1.2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .agreed input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: relative;
    margin-right: 3rem;
    height: 3rem;
    width: 3rem;
    background-color: #4b4b4b;
    border: 2px dotted var(--lightOrange);
    border-radius: 0.5rem;
  }

  .agreed:hover input ~ .checkmark {
    background-color: #8b8b8b;
  }

  .agreed input:checked ~ .checkmark {
    background-color: var(--lightOrange);
  }

  .agreed input:focus ~ .checkmark,
  input:focus,
  textarea:focus {
    outline: 2px solid var(--darkOrange);
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .agreed input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 0.9rem;
    top: 0.4rem;
    width: 0.9rem;
    height: 1.5rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .submit {
    --size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--size);
    letter-spacing: 0.05rem;
    border: 2px solid var(--lightOrange);
    background-color: var(--backgroundColor);
    color: var(--white);
    margin: 0 auto;
    padding: 0.7rem 1.8rem;
    border-radius: 2.5rem;
    box-shadow: var(--shadow);
    cursor: pointer;

    svg {
      margin-left: 1rem;
      width: var(--size);
      height: var(--size);
    }
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Form() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email =
        'Adres e-mail jest niezbędny do prawidłowego przetworzenia Twojej wiadomości!';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Niepoprawny format adresu e-mail!';
    }

    if (!values.message) {
      errors.message = 'Wpisz treść swojej wiadomości!';
    } else if (values.message.length < 10) {
      errors.message = 'Twoja wiadomość nie moze być krótsza niz 10 znaków!';
    }

    if (!values.name) {
      errors.name = 'Wpisz swoje imię!';
    } else if (!/^[a-z A-Z]{0,20}$/g.test(values.name)) {
      errors.name =
        'Imię nie moze być dłuzsze niz 20 znaków i moze zawierać tylko litery wraz z polskimi znakami.';
    }

    if (!values.checkbox) {
      errors.checkbox =
        'Zgoda na przetwazanie Twoich danych osobowych jest konieczne!';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      checkbox: false,
    },
    validate,
    onSubmit: (data) => {
      console.log(data);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...data,
        }),
      })
        .then(() => {
          alert('Wiadomość została wysłana!');
        })
        .catch((error) => console.log(error));
    },
  });
  return (
    <StyledForm
      onSubmit={formik.handleSubmit}
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field">
      <input type="hidden" name="contact" />
      <input type="hidden" name="bot-field" />

      <label htmlFor="name">Twoje imię:</label>
      {formik.touched.name && formik.errors.name && (
        <p className="errorsMessage">{formik.errors.name}</p>
      )}
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        id="name"
        name="name"
        type="text"
        placeholder="wpisz swoje imię..."
      />

      <label htmlFor="email">Twój adres e-mail:</label>
      {formik.touched.email && formik.errors.email && (
        <p className="errorsMessage">{formik.errors.email}</p>
      )}
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        id="email"
        name="email"
        type="email"
        placeholder="wpisz swój e-mail..."
      />

      <label htmlFor="message">Twoja wiadomość:</label>
      {formik.touched.message && formik.errors.message && (
        <p className="errorsMessage">{formik.errors.message}</p>
      )}
      <textarea
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.message}
        id="message"
        name="message"
        type="text"
        placeholder="wpisz treść wiadomości..."
      />

      {formik.touched.checkbox && formik.errors.checkbox && (
        <p className="errorsMessage">{formik.errors.checkbox}</p>
      )}

      <label className="agreed">
        <input
          type="checkbox"
          id="checkbox"
          value={formik.values.checkbox}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className="checkmark"></span>
        wyrażam zgodę na przetważanie moich danych osobowych w postaci imienia
        oraz adresu e-mail w celu otrzymania odpowiedzi na złożone zapytanie
      </label>

      <button type="submit" className="submit">
        wyślij wiadomość
        <FiSend />
      </button>
    </StyledForm>
  );
}
