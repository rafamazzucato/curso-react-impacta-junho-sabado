const mod1 = require('./modulo1');
const {exibirMensagem}  = require('./modulo2');

mod1('Meu primeiro módulo');
exibirMensagem('Meu segundo módulo');

// const
// let
// var

// var v = 'variavel que existe no escopo global, ou seja, todos podem visualizar e alterar ela';
// let l = 'variavel que existe dentro de um escopo, ou seja, sómente dentro daquele escopo a variavel poderá ser acessada e alterada'
// const c = 'constanta que existe dentro de um escopo';

// const f = function(x){
//     v = 'alterar o v';
//     for(let i = 0; i < 10000000000; i++){
//         if(i === 3){
//             console.log(3);
//             break;
//         }
//     }

//     console.log(i);
// }

// const obj = {
//     teste : 'teste',
//     funcao : () => {}
// }

// const {funcao} = obj

// if( true && true && true && true){
//     if(){
//         if(){

//         }
//     }
// }