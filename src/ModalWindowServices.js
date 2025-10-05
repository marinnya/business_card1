import React from 'react';
import './ModalWindowServices.css';

const ModalWindowServices = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <span className="close-icon"></span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWindowServices;