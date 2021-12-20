import React from 'react'
import styles from './Cart.module.css'

export default function functionName(props) {

    const cartItems = <ul className={styles['cart-items']}>{[
        { id: 'c1', name: 'Sushi', price: '$10.00', quantity: 1 },
    ].map(item => <li>{item.name}</li>)}</ul>;

    return (
        <div>
            {cartItems}

            <div className={styles.total}>
                <span>Total Amount</span>
                <span>£30</span>
            </div>

            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </div>
    )
}


