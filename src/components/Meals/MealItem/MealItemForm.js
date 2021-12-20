import React, { useContext, useRef, useState } from 'react'
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';
import CartContext from '../../../store/cart-context';

export default function MealItemForm(props) {

    const cartContext = useContext(CartContext);
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = parseInt(amountInputRef.current.value.trim());
        if (enteredAmount.length === 0 || enteredAmount <= 0) {
            return setAmountIsValid(false);
        }

        const item = {
            ...props.meal,
            amount: enteredAmount,
        }
        cartContext.addItem(item);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef} // need ForwardRef in child component since Input is a custom Component
                label='Amount'
                input={{
                    id: 'amount_' + (props.id),
                    type: 'number',
                    value: props.amount,
                    min: '1',
                    max: '30',
                    step: '1',
                    defaultValue: '1',
                }} />

            <button>+ Add</button>
            {!amountIsValid && <span>Amount is invalid, try again!</span>}
        </form>
    );
}

