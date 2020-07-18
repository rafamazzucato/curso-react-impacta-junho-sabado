import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import { ContatoFormulario } from '../../componentes/contato/formulario';

export const ContatoPage = props => {

    return (
        <div className="container">
            <Cabecalho titulo="Contato" subtitulo="entre em contato conosco" />
            <ContatoFormulario />
        </div>
    );
}