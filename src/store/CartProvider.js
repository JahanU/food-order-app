import CartContext from "./cart-context"
import React, { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        let updatedItems;
        const updatedTotalPrice = (action.item.price * action.item.amount) + state.totalPrice;
        const itemInCartIndex = state.items.findIndex((item) => item.id === action.item.id);
        const itemInCart = state.items[itemInCartIndex];

        if (itemInCart) { // just inc the amount
            const updateItem = {
                ...itemInCart,
                amount: action.item.amount + itemInCart.amount // set new amount
            };
            updatedItems = [...state.items];
            updatedItems[itemInCartIndex] = updateItem;
        }
        else { // new item, seeing for first time
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    else if (action.type === 'REMOVE') {
        let updatedItems;
        const itemInCartIndex = state.items.findIndex((item) => item.id === action.id);
        const itemInCart = state.items[itemInCartIndex];
        const updatedTotalPrice = state.totalPrice - itemInCart.price;

        // decrement
        if (itemInCart.amount > 1) {
            const updateItem = {
                ...itemInCart,
                amount: itemInCart.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[itemInCartIndex] = updateItem;
        }
        // decrement until amount = 0, then remove
        else if (itemInCart.amount === 1) {
            updatedItems = [...state.items];
            updatedItems.splice(itemInCartIndex, 1);
        }

        console.log(updatedItems);
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
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
        totalPrice: cartState.totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}