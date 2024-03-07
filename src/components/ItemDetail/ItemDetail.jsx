import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, img, category, price, description, stock}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width:300}}/>
       <p>{category}</p>
       <p>{description}</p>
       <h1>{price}</h1>
       <p>{stock}</p>
       <ItemCount initial={1} stock={20} />
    </article>
  )
}

export default ItemDetail