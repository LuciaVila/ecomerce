import { createContext, useContext, useState } from "react"
export const CartContext= createContext({
    cart:[],
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [setTotalQuantity] = useState(0);
    console.log(cart);

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]);
            setTotalQuantity(prev => prev + productToAdd.quantity);
        } else {
            console.error('El producto ya fue agregado');
        }
    };

    const removeItem = (id) => {
        const removedProduct= cart.find(prod => prod.id === id)
        if(removedProduct){
            setTotalQuantity(prev=> prev - removedProduct.quantity);
        }

        const cartUpdated =cart.filter(prod=>prod.id !==id);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
    };

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext);
  };
