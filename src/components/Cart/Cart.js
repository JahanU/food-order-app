import React, { useContext } from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';

export default function Cart(props) {

    const ctx = useContext(CartContext);
    const totalAmount = ctx.totalAmount.toFixed(2);

    return (
        <Modal onClose={props.onCloseCart}>

            <div className={styles['cart-items']}>
                <ul>
                    {ctx.items.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>

            <div className={styles.total}>
                <span>Total Amount</span>
                <span>£ {totalAmount}</span>
            </div>

            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                {ctx.items.length > 0 && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}


