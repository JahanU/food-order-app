import CartContext from "./cart-context"
import React, { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        console.log(action)

        const updatedItems = [...state.items, action.item];
        const updatedTotalAmount = (action.item.price * action.item.amount) + state.totalAmount;
        console.log(updatedTotalAmount);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    else if (state.type === 'REMOVE') {
        const updatedItems = state.items.filter(item => item.id !== action.id);
        const updatedTotalAmount = (action.item.price * action.item.amount) - state.totalAmount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

export default function CartProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}