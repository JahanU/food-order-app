import CartContext from "./cart-context"

export default function CartProvider(props) {

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: (item) => {
            cartContext.items.push(item);
            cartContext.totalAmount += item.price;
        },

        removeItem: (item) => {
            cartContext.splice(cartContext.items.indexOf(item), 1);
            cartContext.totalAmount -= item.price;
        }
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}