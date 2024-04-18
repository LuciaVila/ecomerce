import { useEffect, useState } from "react"
import ItemList from "../ItemLIst/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../Context/Notification";
import { db } from "../../services/firebase/Index"
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const { setNotification } = useNotification();

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef)
            .then((response) => {
                console.log(response)
                const products = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
                setProducts(products);
            })
            .catch((error) => {
                setNotification("danger", `No es posible cargar los productos`);
                console.log(error)
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId, setNotification])

    if (loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer