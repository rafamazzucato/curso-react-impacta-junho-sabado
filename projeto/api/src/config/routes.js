const {Router} = require('express');

module.exports = server => {
    const router = Router()

    server.use('/api', router);

    const serviceCursos = require('../cursos/serviceCursos');
    serviceCursos.register(router, '/cursos');

    const serviceContato = require('../contato/serviceContato');
    serviceContato.register(router, '/contatos');
}