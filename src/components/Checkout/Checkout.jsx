import { useState } from "react"
import { useCart } from '../../Context/CartContext.jsx';
import { db } from "../../services/firebase/Index.js"
import CheckoutForm from "./CheckoutForm";

import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: "Lucia",
                    lastName: "Vila",
                    phone: "123456789",
                    address: "Yerbal",
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            };

            const ids = cart.map((item) => item.id);

            const productRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids)))
            const { docs } = productsAddedFromFirestore;

            const outOfStock = [];
            const batch = writeBatch(db)

            docs.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDB >= prodQuantity) {

                    batch.update(doc.ref, { stock: stockDB - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                clearCart();
                setOrderId(orderAdded.id);
                console.log("orderRef:", orderRef);
                console.log("orderAdded:", orderAdded);

            } else {
                console.log("Hay productos que estan fuera de stock");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Se está generando su orden</h1>
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} ></CheckoutForm>
        </>
    )

}

export default Checkout