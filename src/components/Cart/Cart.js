import React from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal/Modal';

export default function Cart(props) {

    const cartItems = <ul className={styles['cart-items']}>{[
        { id: 'c1', name: 'Sushi', price: '$10.00', quantity: 1 },
    ].map(item => <li key={item.id}>{item.name}</li>)}</ul>;

    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}

            <div className={styles.total}>
                <span>Total Amount</span>
                <span>£30</span>
            </div>

            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}


