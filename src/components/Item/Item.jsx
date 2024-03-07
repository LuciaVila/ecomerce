import "./Item.css"; 
import {Link} from "react-router-dom";

const Item =({id, name, price, category, img}) =>{
   
    return (
        <article key={id} className="item  my-custom-class">
            <h1 className="title">{name}</h1>
            <img src= {img} className="img" style={{width:200}}/>
            <p className="category">Categoria: {category}</p>
            <h1 className="price">$ {price}</h1>
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </article>
    )
}
export default Item 