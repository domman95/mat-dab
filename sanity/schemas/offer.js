export default {
  name: 'offer',
  title: 'Oferowane usługi',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa usługi',
      type: 'string',
      description: 'wpisz nazwę oferowanej usługi',
    },
    {
      name: 'content',
      title: 'Opis usługi',
      type: 'text',
      description: 'opisz w kilku zdaniach oferowaną usługę',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      description: 'Jedno zdjęcie przedstawiające oferowaną usługę',
    },
  ],
};
