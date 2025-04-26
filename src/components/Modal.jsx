import React from "react";
import '../Modal.css'

function Modal({isOpen, handleToggle, children}) {
    if (!isOpen) return null;

    return (
        <div className="modal-container">
            <div className="modal-content">
                {children}
                <button type="button" onClick={handleToggle}>Close</button>
            </div>
        </div>
    )
}

export default Modal;