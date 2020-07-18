import {combineReducers}  from 'redux';

import contatoReducer from './contato';

const reducers = combineReducers({
    contato: contatoReducer
});

export default reducers;