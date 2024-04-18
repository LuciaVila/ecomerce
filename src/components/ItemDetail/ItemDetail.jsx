import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../../Context/CartContext";
import { useNotification } from "../../Context/Notification";

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
  const { addItem, isInCart } = useCart();
  const {setNotification} = useNotification();

  const handleAdd = (count) => {
    console.log("Agregar al carrito")
    const productObj = {
      id, name, price, quantity: count
    }
    addItem(productObj)
    setNotification("success", `Se agregaron ${count} de ${name}`)
  };

  return (
    <article>
      <h1>{name}</h1>
      <img src={img} style={{ width: 300 }} />
      <p>Categoria: {category}</p>
      <p>Descripcion: {description}</p>
      <h1>{price}</h1>
      <p>{stock}</p>

      {isInCart(id) ? (
        <Link to='/cart' className="btn btn-outline-success">Comprar</Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
      )}

    </article>
  );
}

export default ItemDetail