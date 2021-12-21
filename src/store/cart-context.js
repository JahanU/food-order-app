import React, { createContext } from 'react'

const CartContext = createContext({
    items: [],
    totalPrice: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
});


export default CartContext;