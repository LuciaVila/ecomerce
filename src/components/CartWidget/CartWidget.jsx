import cart from "./assets/carrito1.png"
const CarWidget = () => {
    return (
        <div className="cart-button-container">
            <img src={cart} alt="cart-widget" className="cart-icon" width={50} />
            0
        </div>
    )
}
export default CarWidget;