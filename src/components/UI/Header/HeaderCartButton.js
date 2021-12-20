import { useContext } from 'react';

import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

export default function HeaderCartButton(props) { // .onClick

    const ctx = useContext(CartContext);
    const numberOfCartItems = ctx.items.reduce((prev, curr) => {
        return curr + prev.amount
    }, 0);

    return (
        <button className={styles.button} onClick={props.cartOnClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}
