import cart from "./assets/carrito.png"
import "./CartWidget.css";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useCart ()
    return (
       <Link to='/cart' className="btn btn-outline-success my-custom-btn" style={{displey: totalQuantity> 0 ? 'block' : 'none'}}>
            <img src={cart} alt="cart-widget" className="cart-icon"/>
            {totalQuantity}
        </Link>
    )
}
export default CartWidget;