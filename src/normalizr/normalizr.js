const { normalize, schema } = require('normalizr');
const Container = require('../controllers/contenedorProd.js')

const data = {
    '1': { id: 1, type: 'author' },
    '2': { id: 2, type: 'message' }
  };
  
  const messageSchema = new schema.Entity('messages');
  const authorSchema = new schema.Entity('authors');
  const valuesSchema = new schema.Values(
    {
      authors: authorSchema,
      messages: messageSchema
    },
    (input, parent, key) => `${input.type}s`
  );
  
  const normalizedData = normalize(data, valuesSchema);

console.log(JSON.stringify(normalizedData, null, 2))
