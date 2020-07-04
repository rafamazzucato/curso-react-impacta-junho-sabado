const restful = require('node-restful');

const schemaContato = new restful.mongoose.Schema({
    data: { type: Date, required: true},
    nome: { type: String, required: true },
    email: {type: String, required: true},
    assunto: { type: String, required: true }
});

module.exports = restful.model('contato', schemaContato);