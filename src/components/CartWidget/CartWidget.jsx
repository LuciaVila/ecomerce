import cart from "./assets/carrito.png"
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)
    return (
       <Link to='/cart' className="btn btn-outline-success my-custom-btn" style={{displey: totalQuantity> 0 ? 'block' : 'none'}}>
            <img src={cart} alt="cart-widget" className="cart-icon"/>
            {totalQuantity}
        </Link>
    )
}
export default CartWidget;