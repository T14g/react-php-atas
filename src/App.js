import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { toggleModal } from './redux/ata/ata.actions';

import Formulario from './components/formulario/formulario.component';
import Modal from './components/modal/modal.component';

const App = ({ showModal, toggleModal, modalData }) => {
  return (
    <div className="App">
      <Formulario />
      <Modal show={showModal} toggle={toggleModal} modalData={modalData} />
    </div>
  );
}

const mapStateToProps = state => ({
  showModal: state.ata.showModal,
  modalData: state.ata.modalData
})

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
