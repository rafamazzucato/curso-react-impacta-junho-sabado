import React from 'react';

import { Cabecalho } from '../componentes/cabecalho';
import { ContatoListagem } from '../componentes/contato/lista';

export const ResponderContatos = props => {
    return (
        <div className="container">
            <Cabecalho titulo="Contatos a responder" subtitulo={"Listagem de contatos para envio"}/>
            <ContatoListagem/>
        </div>
    );
}