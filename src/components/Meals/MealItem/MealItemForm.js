import React from 'react'
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';

export default function MealItemForm(props) {

    return (
        <form className={styles.form}>

            <Input label='Amount'
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
        </form>
    );
}

