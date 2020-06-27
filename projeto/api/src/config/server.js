const port = 3200;

const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({ extended:true }));
server.use(bodyParser.json());

server.use('/', (requisicao, resposta, next) => {
    resposta.write('Meu servidor de API da plataforma de cursos');
    resposta.end();
});

server.listen(port, _ => console.log(`Servidor no ar na porta ${port}`));

module.exports = server;