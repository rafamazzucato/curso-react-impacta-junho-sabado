const schemaContato = require("./schemaContato")

schemaContato.methods(['get', 'post', 'delete']);
schemaContato.updateOptions({ new: true, runValidators: true });

module.exports = schemaContato;