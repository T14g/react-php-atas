import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { toggleModal } from './redux/ata/ata.actions';

import Formulario from './components/formulario/formulario.component';
import Modal from './components/modal/modal.component';

const App = ({ showModal, toggleModal }) => {
  return (
    <div className="App">
      <Formulario />
      <Modal show={showModal} toggle={toggleModal} />
    </div>
  );
}

const mapStateToProps = state => ({
  showModal: state.ata.showModal
})

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
