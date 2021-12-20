import React from 'react'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop}>

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
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    )
}

export default Modal;