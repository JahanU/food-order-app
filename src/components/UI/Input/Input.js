import React, { forwardRef } from 'react';
import style from './Input.module.css';

// need ForwardRef in child component to emit to parent
// or for Parent to see what the child component is doing
const Input = forwardRef((props, ref) => {

    return (
        <div className={style.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;