import React, { useState } from "react";

const ModalPopup = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Content Goes Here</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPopup;
