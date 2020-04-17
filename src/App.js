import React, { useState } from 'react';
import Modal from './components/Modal';


function App() {
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  }

  const handleClose = () => {
    setModal(false);
  }
  return (
    <div className="App">
      <button className="btnOpenModal" onClick={handleOpen}>Open Modal </button>
      {modal ? (
        <Modal onClose={handleClose}>
         {/* Conteúdo que irá aparecer dentro do corpo do modal */}

        </Modal>
      ) : null}
    </div>
  );
}

export default App;
