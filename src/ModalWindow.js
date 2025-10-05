import React, { useState, useCallback, useEffect } from 'react';
import './ModalWindow.css';

const ModalWindow = ({ show, onClose, children }) => {
  const [isRendered, setIsRendered] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (show) {
      setIsRendered(true);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      document.removeEventListener('keydown', handleKeyDown);
      return () => clearTimeout(timer);
    }
  }, [show, handleKeyDown]);

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!isRendered) return null;

  return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <span className="close-icon"></span>
        </button>

        {children}

      </div>
    </div>
  );
};

export default ModalWindow;
