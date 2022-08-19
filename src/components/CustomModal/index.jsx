import React from 'react';

const CustomModal = ({ id, modalIcon, modalTitle, modalDescription }) => {
  return (
    <>
      <label htmlFor={id} className="btn modal-button">{modalIcon}</label>
      <input type="checkbox" id={id} aria-label={modalTitle} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-xl">
          <h3 className="font-bold text-lg">{modalTitle}</h3>
          <p className="py-4 text-left whitespace-pre-wrap">{modalDescription}</p>
          <div className="modal-action">
            <label htmlFor={id} className="btn">Ok</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;