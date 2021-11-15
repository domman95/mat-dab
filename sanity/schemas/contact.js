export default {
  name: 'contact',
  title: 'Dane kontaktowe',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa',
      type: 'string',
      description: 'wpisz rodzaj kontaktu (np. numer telefonu, e-mail)',
    },
    {
      name: 'value',
      title: 'Wartość',
      type: 'string',
      description: 'np. numer telefonu, adres e-mail',
    },
  ],
};
