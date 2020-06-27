// requisita o módulo HTTP do Node.js
const http = require('http');

// cria a função que vai tratar as requisições do servidor de forma genérica
const requisicaoPadrao = (_, resposta) => {
    resposta.writeHead(200, { 'Content-Type': 'text/html'});
    resposta.write('<h1>Texto a ser exibido no browser</h1>');
    resposta.end();
}

// cria o servidor com o tratamento das requisições feitas pela nossa aplicação
const server = http.createServer(requisicaoPadrao);

// roda o servidor na porta 3000 e ao concluir a subida, informa via função anônima
server.listen(4000, _ => {
    console.log('Servidor no ar na porta 4000');
});