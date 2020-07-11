import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import { CursoCRUD } from '../../componentes/cursos/crud';

export const CursoPage = props => {

    return (
        <div className="container">
            <Cabecalho titulo="Cursos" subtitulo="cadastro de cursos"/>
            <CursoCRUD/>
        </div>
    );
}