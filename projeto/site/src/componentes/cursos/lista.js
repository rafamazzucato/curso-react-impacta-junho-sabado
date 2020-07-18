import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getListaCursos,
    selecionarCurso,
    excluirCurso
} from '../../actions/curso'

const CursoListagem = props => {
    const {getListaCursos, selecionarCurso, excluirCurso} = props;

    useEffect(() => {
        getListaCursos();
    }, [getListaCursos]);

    const exibirLinhas = () => {
        //retorna a lista de props se existir
        const cursos = props.cursos || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>

                {props.isAdmin ?
                    <td>
                        <button className="btn btn-success mr-2"
                            onClick={() => selecionarCurso(curso)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => excluirCurso(curso._id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                :
                    <>
                        <td>{curso.cargaHoraria}</td>
                        <td>{curso.preco}</td>
                        <td>{curso.categoria}</td>
                    </>
                }
            </tr>
        ));
    }
    return (
        <div>
            <h3>Lista de Cursos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        {props.isAdmin ? <th></th> :
                            <>
                                <th>Carga horária</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                            </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    )
}

const mapStoreToProps = store => ({
    cursos: store.curso.cursos
});

const mapActionsToProps = dispatch => bindActionCreators({
    getListaCursos,
    excluirCurso,
    selecionarCurso
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(CursoListagem);

export { conectado as CursoListagem};