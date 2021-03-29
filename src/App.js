import React from 'react';
import './App.css';

import Formulario from './components/formulario/formulario.component';
import Modal from './components/modal/modal.component';

const App = () => {
  return (
    <div className="App">
      <Formulario />
      <Modal show={true} />
    </div>
  );
}

export default App;
