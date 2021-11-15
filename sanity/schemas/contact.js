export default {
  name: 'contact',
  title: 'Dane kontaktowe',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Typ (np. facebook, phone, email)',
      type: 'string',
      description: 'Nie ruszać bez uzgodnienia z dostawcą strony!'
    },
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
