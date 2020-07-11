import React, {useState, useEffect} from 'react';
import { Cabecalho } from '../componentes/cabecalho';
import { CursoListagem } from '../componentes/cursos/lista';

import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export const HomePage = props => {

    const [cursos, setCursos] = useState([]);

    useEffect(()=>{
        const getCursos = async _ => {
            const result = await axios.get(URL);
            if(result.data){
                setCursos(result.data);
            }
        }

        getCursos();
    }, [setCursos]);

    return (
        <div className="container">
            <Cabecalho titulo="ABC Cursos" subtitulo="seja bem vindo, ao maior site de cursos do Brasil"/>
            <CursoListagem cursos={cursos} isAdmin={false}/>
        </div>
    );
}