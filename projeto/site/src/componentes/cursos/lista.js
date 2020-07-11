import React from 'react';

export const CursoListagem = props => {

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
                            onClick={() => props.editar(curso)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => props.excluir(curso._id)}>
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