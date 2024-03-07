import cart from "./assets/carrito.png"
import "./CartWidget.css";

const CarWidget = () => {
    return (
       <div className="btn btn-outline-success my-custom-btn">
            <img src={cart} alt="cart-widget" className="cart-icon"/>
            <span className="cart-number">0</span>
        </div>
    )
}
export default CarWidget;