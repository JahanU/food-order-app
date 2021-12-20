import React, { useContext } from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

export default function Cart(props) {

    const ctx = useContext(CartContext);
    const totalAmount = ctx.totalAmount.toFixed(2);

    const addToCartHandler = (item) => {

    };

    const removeFromCartHandler = (id) => {

    };

    return (
        <Modal onClose={props.onCloseCart}>


            <ul className={styles['cart-items']}>
                {ctx.items.map(item =>
                    <CartItem
                        key={item.id}
                        {...item}
                        onRemove={removeFromCartHandler.bind(null, item.id)}
                        onAdd={addToCartHandler.bind(null, item)}
                    >
                    </CartItem>)}
            </ul>


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


