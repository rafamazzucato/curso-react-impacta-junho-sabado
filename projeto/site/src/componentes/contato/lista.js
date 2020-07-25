import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getListaContatos,
    excluirContato
} from '../../actions/contato';
import moment from 'moment';

const ContatoListagem = props => {
    const {getListaContatos, excluirContato} = props;

    useEffect(() => {
        getListaContatos();
    }, [getListaContatos]);

    const exibirLinhas = () => {
        //retorna a lista de props se existir
        const contatos = props.contatos || [];
        return contatos.map(contato => (
            <tr key={contato._id}>
                <td>{moment(contato.data).format('DD/MM/YYYY HH:mm')}</td>
                <td>{contato.nome}</td>
                <td>{contato.email}</td>
                <td>{contato.assunto}</td>
                <td>
                    <button className="btn btn-danger"
                    onClick={() => excluirContato(contato._id)}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button></td>
            </tr>
        ));
    }
    return (
        <div>
            <h3>Lista de contatos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Assunto</th>
                        <th></th>
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
    contatos: store.contato.lista
});

const mapActionsToProps = dispatch => bindActionCreators({
    getListaContatos,
    excluirContato
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(ContatoListagem);

export { conectado as ContatoListagem };