import React from 'react';
import { connect } from 'react-redux';

import { CursoFormulario } from './formulario';
import { CursoListagem } from './lista';

class CursoCRUD extends React.Component {
    render() {
        const { msgSucesso, msgErro } = this.props;

        return (
            <div>
                {msgSucesso ?
                    <div className="alert alert-success" role="alert">
                        <strong>Parabéns</strong> {msgSucesso}
                    </div>
                    : null
                }

                {msgErro ?
                    <div className="alert alert-danger" role="alert">
                        <strong>Ops!</strong> {msgErro}
                    </div>
                    : null
                }
                <div className="row border-bottom">
                    <div className="col-md-6">
                        <CursoFormulario />
                    </div>
                    <div className="col-md-6">
                        <CursoListagem
                            isAdmin={true} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = store => ({
    msgErro: store.curso.msgErro,
    msgSucesso: store.curso.msgSucesso
});

const conectado = connect(mapStoreToProps, null)(CursoCRUD);

export { conectado as CursoCRUD }