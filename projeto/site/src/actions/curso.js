import axios from 'axios';
import {
    TYPE_CURSOS_SET_LIST,
    TYPE_CURSOS_SET_MSG_ERRO,
    TYPE_CURSOS_SET_MSG_SUCESSO,
    TYPE_CURSOS_SET_FORM,
    TYPE_CURSOS_LIMPAR,
    TYPE_CURSOS_SELECIONAR
} from '../reducers/curso';

const URL = 'http://localhost:3200/api/cursos';

export const getListaCursos = () => {
    return async dispatch => {
        try {
            const result = await axios.get(URL);
            if (result.data) {
                return dispatch({
                    type: TYPE_CURSOS_SET_LIST,
                    value: result.data
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export const excluirCurso = _id => {
    return async dispatch => {
        if (window.confirm('Deseja realmente excluir o curso selecionado')) {
            try {
                await axios.delete(URL + '/' + _id);
                dispatch(getListaCursos());
                dispatch(setMsgSucesso('Curso deletado com sucesso'));
            } catch (e) {
                console.log(e);
                dispatch(setMsgErro('Erro ao deletar curso'));
            }
        }
    }
}

export const setMsgErro = msg => ({
    type: TYPE_CURSOS_SET_MSG_ERRO,
    value: msg
});

export const setMsgSucesso = msg => ({
    type: TYPE_CURSOS_SET_MSG_SUCESSO,
    value: msg
});

export const setInputForms = evento => {
    const type = (TYPE_CURSOS_SET_FORM + evento.target.id).toUpperCase();

    return {
        type,
        value: evento.target.value
    };
}

export const limpar = e => {
    if(e){
        e.preventDefault();
    }

    return {
        type: TYPE_CURSOS_LIMPAR,
    };
};

export const salvarCurso = (e, _id, codigo, descricao, cargaHoraria, preco, categoria) => {
    return async dispatch => {
        e.preventDefault();
        try {
            if (!codigo || !descricao || !cargaHoraria || !preco || !categoria) {
                dispatch(setMsgErro("Favor preencher todos os campos"));
                return;
            }

            const body = { codigo, descricao, cargaHoraria, preco, categoria };
            let msg = '';
            if (_id) {
                await axios.put(URL + "/" + _id, body);
                msg = "atualizado";
            } else {
                await axios.post(URL, body);
                msg = "cadastrado";
            }

            dispatch(limpar());
            dispatch(getListaCursos());
            dispatch(setMsgSucesso(`Curso ${msg} com sucesso!`));
        } catch (e) {
            console.log(e)
            dispatch(setMsgErro("Ocorreu erro ao salvar curso"));
        }
    }
}

export const selecionarCurso = curso => ({
    type: TYPE_CURSOS_SELECIONAR,
    payload: curso
})