export default {
  name: 'socials',
  title: 'Social Media',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa portalu społecznościowego',
      type: 'string',
      description: 'podaj nazwę portalu społecznościowego',
    },
    {
      name: 'slug',
      title: 'Nazwa skrócona',
      type: 'slug',
      description: 'wygeneruj nazwę skróconą',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => `${input.toLowerCase()}/matdab`,
      },
    },
    {
      name: 'url',
      title: 'Link do profilu',
      type: 'url',
      description: 'wklej pełny link do profilu',
    },
  ],
};
