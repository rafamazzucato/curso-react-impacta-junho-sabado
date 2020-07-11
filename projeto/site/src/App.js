import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap/dist/js/bootstrap.min';
//import 'jquery/dist/jquery.min';
//import 'popper.js/dist/umd/popper.min';

import { Menu } from './componentes/menu';
import { Rotas } from './componentes/rotas';

function App() {
  return (
    <div>
      <Menu/>
      <Rotas/>
    </div>
  );
}

export default App;