import moment from 'moment';

const INITIAL_STATE = {
    data: moment().format('yyyy-MM-DD'),
    nome: '',
    email: '',
    assunto: '',
    msgErro: '',
    msgSucesso: ''
}

const TYPE_CONTATO = 'TYPE_CONTATO';
export const TYPE_CONTATO_SET_DATA = TYPE_CONTATO +'_SET_DATA';
export const TYPE_CONTATO_SET_NOME = TYPE_CONTATO +'_SET_NOME';
export const TYPE_CONTATO_SET_EMAIL = TYPE_CONTATO +'_SET_EMAIL';
export const TYPE_CONTATO_SET_ASSUNTO = TYPE_CONTATO +'_SET_ASSUNTO';
export const TYPE_CONTATO_SET_MSG_SUCESSO = TYPE_CONTATO +'_SET_MSG_SUCESSO';
export const TYPE_CONTATO_SET_MSG_ERRO = TYPE_CONTATO +'_SET_MSG_ERRO';
export const TYPE_CONTATO_LIMPAR = TYPE_CONTATO +'_LIMPAR';

export default function(state = INITIAL_STATE, acao){
    switch(acao.type){
        case TYPE_CONTATO_SET_DATA: return {...state, data: acao.value};
        case TYPE_CONTATO_SET_NOME: return {...state, nome: acao.value};
        case TYPE_CONTATO_SET_EMAIL: return {...state, email: acao.value};
        case TYPE_CONTATO_SET_ASSUNTO: return {...state, assunto: acao.value};
        case TYPE_CONTATO_SET_MSG_SUCESSO: return {...state, msgSucesso: acao.value};
        case TYPE_CONTATO_SET_MSG_ERRO: return {...state, msgErro: acao.value};
        case TYPE_CONTATO_LIMPAR: return {...INITIAL_STATE};
        default: return state;
    }
}