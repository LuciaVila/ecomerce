import { useCart } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom"


const Cart = () => {
    const { cart, clearCart, getTotal, totalQuantity} = useCart();
    const total = getTotal()

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="btn btn-outline-success">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={clearCart} className="btn btn-outline-success" >Limpiar carrito</button>
            <Link to='/checkout' className="btn btn-outline-success">Terminar compra</Link>
        </div>
    )
}
 export default Cart 