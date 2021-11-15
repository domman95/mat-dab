export default {
  name: 'proof',
  title: 'Opinie klientów',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Treść opinii',
      type: 'text',
      description: 'Wklej opinię od klienta'
    },
    {
      name: 'author',
      title: 'Nazwa klienta',
      type: 'string',
      description: 'Wpisz nazwę klienta'
    }
  ]
}