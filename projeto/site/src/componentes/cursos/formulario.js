import React from 'react';

export const CursoFormulario = props => {

    const {codigo, 
        descricao,
        cargaHoraria,
        preco,
        categoria,
        atualizaState,
        salvar,
        limpar,
        isAlteracao} = props;

    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className="form-group row">
                    <label htmlFor="codigo"
                        className="col-sm-3 col-form-label">
                        Código:
                 </label>
                    <div className="col-sm-9">
                        <input type="number"
                            className="form-control" id="codigo"
                            value={codigo}
                            onChange={atualizaState} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="descrição"
                        className="col-sm-3 col-form-label">
                        Descrição:
                 </label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="descricao"
                            value={descricao}
                            onChange={atualizaState} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cargaHoraria"
                        className="col-sm-3 col-form-label">
                        Carga Horária:</label>
                    <div className="col-sm-9">
                        <input type="number"
                            className="form-control" id="cargaHoraria"
                            value={cargaHoraria}
                            onChange={atualizaState} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="preco"
                        className="col-sm-3 col-form-label">
                        Preço:</label>
                    <div className="col-sm-9">
                        <input type="number"
                            className="form-control" id="preco"
                            value={preco}
                            onChange={atualizaState} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="categoria"
                        className="col-sm-3 col-form-label">Categoria:</label>
                    <div className="col-sm-9">
                        <select className="form-control" id="categoria"
                            value={categoria}
                            onChange={atualizaState} >
                            <option>INFORMATICA</option>
                            <option>ENGENHARIA</option>
                            <option>ADMINISTRACAO</option>
                            <option>REDES</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={salvar}>
                        {isAlteracao ? "Atualizar" : "Adicionar"}
                    </button>

                    <button className="btn btn-secondary ml-3 mb-3"
                        onClick={limpar}>
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    );
}