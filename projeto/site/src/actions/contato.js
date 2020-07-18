import axios from 'axios';
import {
    TYPE_CONTATO_SET_DATA,
    TYPE_CONTATO_SET_NOME,
    TYPE_CONTATO_SET_EMAIL,
    TYPE_CONTATO_SET_ASSUNTO,
    TYPE_CONTATO_SET_MSG_SUCESSO,
    TYPE_CONTATO_SET_MSG_ERRO,
    TYPE_CONTATO_LIMPAR
} from '../reducers/contato';

const URL = 'http://localhost:3200/api/contatos';

export const setData = value => ({
    type: TYPE_CONTATO_SET_DATA,
    value: value
});

export const setNome = value => ({
    type: TYPE_CONTATO_SET_NOME,
    value: value
});

export const setEmail = value => ({
    type: TYPE_CONTATO_SET_EMAIL,
    value: value
});

export const setAssunto = value => ({
    type: TYPE_CONTATO_SET_ASSUNTO,
    value: value
});

export const limpar = evento =>{
    if(evento){
        evento.preventDefault();
    }

    return {
        type: TYPE_CONTATO_LIMPAR
    }
}

export const setMsgSucesso = msg => ({
    type: TYPE_CONTATO_SET_MSG_SUCESSO,
    value: msg
});

export const setMsgErro = msg => ({
    type: TYPE_CONTATO_SET_MSG_ERRO,
    value: msg
});

export const adicionarContato = (evento, data, nome, email, assunto) => {
    return async dispatch => {
        try{
            if(evento){
                evento.preventDefault();
            }

            if(!data || !nome || !email || !assunto){
                dispatch(setMsgErro("Favor preencher todos os campos"));
                return;
            }

            const body = {data,
                nome,
                email,
                assunto};

            await axios.post(URL, body);
            
            dispatch(limpar());
            return dispatch(setMsgSucesso(`Contato cadastrado com sucesso!`));
        }catch(e){
            console.log(e);
            dispatch(setMsgErro('Erro ao cadastrar contato'));
        }
    }
}