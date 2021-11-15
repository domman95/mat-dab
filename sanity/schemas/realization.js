export default {
  name: 'realization',
  title: 'Realizacje',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł projektu',
      type: 'string',
      description: 'wpisz tytuł swojej realizacji',
    },
    {
      name: 'content',
      title: 'Opis projektu',
      type: 'text',
      description: 'opisz swój projekt w kilku zdaniach',
    },
    {
      name: 'image',
      title: 'Zdjęcia',
      type: 'array',
      description: 'dodaj tyle zdjęć ile potrzebujesz',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
