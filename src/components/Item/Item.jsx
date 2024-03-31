import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, category, img }) => {

    return (
        <article key={id} className="CardItem">
            <header className="Header">
                <h1>{name}</h1>
            </header>
            <picture>
                <img src={img} className="ItemImg" style={{ width: 200 }} />
            </picture>
            <section>
                <p className="Info">Categoria: {category}</p>
                <p className="Info">$ {price}</p>
            </section>
            <Link to={`/item/${id}`} className="btn btn-outline-success">Ver Detalle</Link>
        </article>
    )
}
export default Item 