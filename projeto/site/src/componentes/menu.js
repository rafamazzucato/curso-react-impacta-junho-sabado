import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Menu = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                ABC Courses
            </Link>
            <button className="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cursos">Cursos ({props.totalCursos})</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contato</Link>
                    </li>
                </ul> 
            </div>
        </nav>
    );
}

const mapStoreToProps = store => ({
    totalCursos : store.curso.cursos.length
});

const conectado = connect(mapStoreToProps, null)(Menu);

export { conectado as Menu};