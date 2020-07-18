
const INITIAL_STATE = {
    cursos: [],
    msgSucesso: '',
    msgErro: '',
    _id: null,
    codigo: 0,
    descricao: '',
    cargaHoraria: 0,
    preco: 0,
    categoria: 'INFORMATICA'
}

const TYPE_CURSOS = 'TYPE_CURSOS';
export const TYPE_CURSOS_SET_LIST = TYPE_CURSOS + '_SET_LIST';
export const TYPE_CURSOS_SET_MSG_SUCESSO = TYPE_CURSOS + '_SET_MSG_SUCESSO';
export const TYPE_CURSOS_SET_MSG_ERRO = TYPE_CURSOS + '_SET_MSG_ERRO';
export const TYPE_CURSOS_SET_FORM = TYPE_CURSOS + '_SET_';
export const TYPE_CURSOS_LIMPAR = TYPE_CURSOS + '_LIMPAR';
export const TYPE_CURSOS_SELECIONAR = TYPE_CURSOS + '_SELECIONAR';

export default function (state = INITIAL_STATE, acao) {
    console.log(acao);
    switch (acao.type) {
        case TYPE_CURSOS_SET_LIST: return { ...state, cursos: acao.value };
        case TYPE_CURSOS_SET_MSG_SUCESSO: return { ...state, msgSucesso: acao.value, msgErro: '' };
        case TYPE_CURSOS_SET_MSG_ERRO: return { ...state, msgErro: acao.value, msgSucesso: '' };
        case TYPE_CURSOS_SET_FORM + 'CODIGO': return { ...state, codigo: acao.value };
        case TYPE_CURSOS_SET_FORM + 'DESCRICAO': return { ...state, descricao: acao.value };
        case TYPE_CURSOS_SET_FORM + 'CARGAHORARIA': return { ...state, cargaHoraria: acao.value };
        case TYPE_CURSOS_SET_FORM + 'PRECO': return { ...state, preco: acao.value };
        case TYPE_CURSOS_SET_FORM + 'CATEGORIA': return { ...state, categoria: acao.value };
        case TYPE_CURSOS_LIMPAR: return { ...INITIAL_STATE, cursos: state.cursos };
        case TYPE_CURSOS_SELECIONAR: return {
            ...state,
            _id: acao.payload._id,
            codigo: acao.payload.codigo,
            descricao: acao.payload.descricao,
            cargaHoraria: acao.payload.cargaHoraria,
            preco: acao.payload.preco,
            categoria: acao.payload.categoria,
            msgSucesso: '',
            msgErro: ''
        }
        default: return state;
    }
}