import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import OrderId from "./OrderId";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const finalizarCompra = (datosForm) => {
    let order = {
      buyer: {
        nombre: datosForm.nombre,
        apellido: datosForm.apellido,
        telefono: datosForm.telefono,
        email: datosForm.email,
      },
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
  };

  return (
    <>
      {orderId ? (
        <OrderId orderId={orderId} />
      ) : (
        <div className="checkout">
          <h2 className="subtitle"> Complete sus datos</h2>
          <form className="form" onSubmit={handleSubmit(finalizarCompra)}>
            <input
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre"
              {...register("nombre", {
                required: "Por favor, ingrese su nombre.",
                minLength: {
                  value: 4,
                  message: "El nombre debe tener al menos 4 caracteres.",
                },
              })}
            />
            {errors.nombre && (
              <span className="error">{errors.nombre.message}</span>
            )}
            <input
              type="text"
              placeholder="Ingrese su apellido"
              {...register("apellido", {
                required: "Por favor, ingrese su apellido.",
                minLength: {
                  value: 2,
                  message: "El apellido debe tener al menos 2 caracteres.",
                },
              })}
            />
            {errors.apellido && (
              <span className="error">{errors.apellido.message}</span>
            )}
            <input
              type="text"
              placeholder="Ingrese su teléfono"
              {...register("telefono", {
                required: "Por favor, ingrese su número de teléfono.",
                minLength: {
                  value: 10,
                  message: "El teléfono debe tener al menos 10 dígitos.",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "El teléfono solo debe contener números.",
                },
              })}
            />
            {errors.telefono && (
              <span className="error">{errors.telefono.message}</span>
            )}
            <input
              type="email"
              placeholder="Ingrese su mail"
              {...register("email", {
                required: "Por favor, ingrese su mail.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Ingrese un mail válido.",
                },
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}

            <input
              type="email"
              placeholder="Confirme su mail"
              {...register("email2", {
                required: "Por favor, confirme su mail.",
                validate: {
                  IdemMail: (email2) =>
                    email2 === getValues().email || "Los correos no coinciden.",
                },
              })}
            />
            {errors.email2 && (
              <span className="error">{errors.email2.message}</span>
            )}

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
