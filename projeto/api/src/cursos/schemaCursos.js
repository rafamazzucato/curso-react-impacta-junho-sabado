const restful = require('node-restful');

const schemaCursos = new restful.mongoose.Schema({
    codigo: { type: Number, required: true },
    descricao: { type: String, required: true },
    cargaHoraria: { type: Number, required: true, min: 4 },
    preco: { type: Number, default: 0, min: 0 },
    categoria: {type: String, uppercase: true,
        enum:['INFORMATICA', 'ENGENHARIA', 'ADMINISTRACAO', 'REDES']
    }
});

module.exports = restful.model('cursos', schemaCursos);