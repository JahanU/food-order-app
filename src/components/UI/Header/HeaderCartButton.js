import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

export default function HeaderCartButton(props) { // .onClick

    const ctx = useContext(CartContext);
    const [cartCss, setCartCss] = useState(`${styles.button}`);

    const numberOfCartItems = ctx.items.reduce((prev, curr) => {
        return prev + curr.amount;
    }, 0);


    useEffect(() => {
        if (numberOfCartItems === 0) {
            return;
        }
        setCartCss(`${styles.button} ${styles.bump}`);

        const timer = setTimeout(() => {
            setCartCss(`${styles.button}`);
        }, 300); // bump animation is 300ms

        return () => clearTimeout(timer);
    }, [numberOfCartItems]);


    return (
        <button className={cartCss} onClick={props.cartOnClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}
