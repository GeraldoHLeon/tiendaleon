import React, { useState, useContext } from "react";
import Item from "./components/Item";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
const [Cart, setCart] = useState([]);


console.log("carrito:", Cart)

const addProduct = (item, cantidad) => {
    if (isInCart(item.id)){
        setCart(Cart.map(product => {
            return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product
        }));
    } else {
        setCart([...Cart, { ...item, cantidad}]);
    }
}

const totalPrice = () => {
    return Cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
}

const totalProducts = () => Cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad,0);

const clearCart = () => setCart([]);
const isInCart = (id) => Cart.find(product => product.id === id) ? true : false;
const removeProduct = (id) => setCart(Cart.filter(product => product.id !== id));

 return(
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        Cart
    }}>
        {children}
    </CartContext.Provider>
 )

}

export default CartProvider