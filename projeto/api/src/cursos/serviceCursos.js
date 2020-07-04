const schemaCursos = require("./schemaCursos")

schemaCursos.methods(['get', 'post', 'put', 'delete']);
schemaCursos.updateOptions({ new: true, runValidators: true });

module.exports = schemaCursos;