import {combineReducers}  from 'redux';

import contatoReducer from './contato';
import cursoReducer from './curso';

const reducers = combineReducers({
    contato: contatoReducer,
    curso: cursoReducer
});

export default reducers;