import React from 'react';

import { CursoFormulario } from './formulario';
import { CursoListagem } from './lista';

import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class CursoCRUD extends React.Component {

    constructor(props){
        super(props);
        this.getCursos = this.getCursos.bind(this);
        this.excluirCurso = this.excluirCurso.bind(this);
        this.atualizaState = this.atualizaState.bind(this);
        this.limpar = this.limpar.bind(this);
        this.salvar = this.salvar.bind(this);
        this.preencherCurso = this.preencherCurso.bind(this);
    }

    estadoInicial = {
        _id: null,
        codigo: 0,
        descricao : '',
        cargaHoraria: 0,
        preco: 0,
        categoria: 'ADMINISTRACAO'
    }

    state = {...this.estadoInicial, cursos: []}

    async componentDidMount(){
        this.getCursos();
    }

    async getCursos(){
        try{
            const result = await axios.get(URL);
            if(result.data){
                this.setState({cursos: result.data})
            }
        }catch(e){
            console.log(e);
        }
    }

    async excluirCurso(_id){
        if(window.confirm('Deseja realmente excluir o curso selecionado')){
            try{
                await axios.delete(URL+'/'+_id);
                await this.getCursos();
                alert('Curso deletado com sucesso');
            }catch(e){
                console.log(e);
            }
        }
    }

    atualizaState(e){
        this.setState({[e.target.id]: e.target.value});
    }

    limpar(evento){
        evento.preventDefault();
        this.setState(this.estadoInicial);
    }

    async salvar(evento){
        evento.preventDefault();
        try{
            const {_id, codigo, descricao, cargaHoraria, preco, categoria} = this.state;

            if(!codigo || !descricao || !cargaHoraria || !preco || !categoria){
                alert("Favor preencher todos os campos");
                return;
            }

            const body = {codigo, descricao, cargaHoraria, preco, categoria};
            let msg = '';
            if(_id){
                await axios.put(URL+"/"+_id, body);
                msg = "atualizado";
            }else{
                await axios.post(URL, body);
                msg = "cadastrado";
            }
            
            await this.getCursos();
            alert(`Curso ${msg} com sucesso!`);
            this.limpar(evento);
        }catch(e){
            console.log(e)
        }
    }

    preencherCurso(curso){
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria,
        });
    }

    render() {
        const {_id, cursos, codigo, descricao, cargaHoraria, preco, categoria} = this.state;

        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoFormulario
                        codigo={codigo}
                        descricao={descricao}
                        cargaHoraria={cargaHoraria}
                        preco={preco}
                        categoria={categoria}

                        isAlteracao={_id ? true : false}
                        atualizaState={this.atualizaState}
                        salvar={this.salvar}
                        limpar={this.limpar}
                    />
                </div>
                <div className="col-md-6">
                    <CursoListagem 
                        cursos={cursos} 
                        excluir={this.excluirCurso}
                        editar={this.preencherCurso}/>
                </div>
            </div>
        )
    }
}