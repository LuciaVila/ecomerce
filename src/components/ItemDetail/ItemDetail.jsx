import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../../Context/CartContext";

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
  const { addItem, isInCart } = useCart();

  const handleAdd = (count) => {
    console.log("Agregar al carrito")
    const productObj = {
      id, name, price, quantity: count
    }
    addItem(productObj)
  }

  return (
    <article>
      <h1>{name}</h1>
      <img src={img} style={{ width: 300 }} />
      <p>{category}</p>
      <p>{description}</p>
      <h1>{price}</h1>
      <p>{stock}</p>

      {isInCart(id) ? (
        <Link to='/cart' className="btn btn-outline-success">Comprar</Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
      )}

    </article>
  )
}

export default ItemDetail