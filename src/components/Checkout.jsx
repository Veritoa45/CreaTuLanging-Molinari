import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";

const Checkout = () => {
  const [comprador, setComprador] = useState({});
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const DatosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !comprador.nombre ||
      !comprador.apellido ||
      !comprador.email ||
      !comprador.email2
    ) {
      alert("Por favor, complete todos los campos.");
    } else if (comprador.email !== comprador.email2) {
      alert("Los emails no coinciden");
    } else {
      let order = {
        buyer: comprador,
        items: cart,
        total: totalPrice(),
        date: serverTimestamp(),
      };
      const ventas = collection(db, "orders");
      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch((error) => {
          console.error("Error al crear la orden:", error);
        });
    }
  };

  return (
    <>
      {orderId ? (
        <div>Su orden es la número {orderId}</div>
      ) : (
        <div className="checkout">
          <h2 className="subtitle"> Complete sus datos</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre"
              onChange={DatosComprador}
            />
            <input
              type="text"
              name="apellido"
              placeholder="Ingrese su apellido"
              onChange={DatosComprador}
            />
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email"
              onChange={DatosComprador}
            />
            <input
              type="email"
              name="email2"
              placeholder="Confirme su email"
              onChange={DatosComprador}
            />
            <button type="submit" className="btn">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
