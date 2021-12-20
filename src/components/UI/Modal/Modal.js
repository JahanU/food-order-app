import React from 'react'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

// Using Context would make this modal very specific and not reusable.
// Props (and chaining) helps with this

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClose}>

        </div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {

    const portalElement = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    )
}

export default Modal;