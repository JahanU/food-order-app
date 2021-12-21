import React, { useContext } from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

export default function Cart(props) {

    const ctx = useContext(CartContext);
    const totalPrice = ctx.totalPrice.toFixed(2);

    const increaseQuantityHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 })
    };

    const decreaseQuantityHandler = (id) => {
        console.log(id)
        ctx.removeItem(id);
    };

    return (
        <Modal onClose={props.onCloseCart}>
            <ul className={styles['cart-items']}>
                {ctx.items.map(item =>
                    <CartItem
                        key={item.id}
                        {...item}
                        onAdd={increaseQuantityHandler.bind(null, item)}
                        onRemove={decreaseQuantityHandler.bind(null, item.id)}
                    >
                    </CartItem>)}
            </ul>


            <div className={styles.total}>
                <span>Total Amount</span>
                <span>£ {totalPrice}</span>
            </div>

            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                {ctx.items.length > 0 && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}


