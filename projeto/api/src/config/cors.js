// exporta uma função que recebe request, response e next
module.exports = (_, response, next) => {
    // adiciona nos headers do response que todas as origens estão permitidas
    response.header("Access-Control-Allow-Origin", "*"); 

    // adiciona nos headers do response que somente estes metodos HTTP estão permitidos
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); 

    // adiciona nos headers do response que somente estes headers estão permitidos
    response.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    
    // chama o next para dar continuidade na requisição
    next();
}