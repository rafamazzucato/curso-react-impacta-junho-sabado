import React from 'react';

import { Cabecalho } from '../componentes/cabecalho';
import { CursoListagem } from '../componentes/cursos/lista';

export const HomePage = props => {
    return (
        <div className="container">
            <Cabecalho titulo="ABC Cursos" subtitulo={"seja bem vindo, ao maior site de cursos do Brasil"}/>
            <CursoListagem isAdmin={false}/>
        </div>
    );
}