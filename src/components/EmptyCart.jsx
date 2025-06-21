import { Link } from "react-router-dom";
import emptyCart from "../../public/emptyCart.png";

const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <h2>Tu carrito está vacío</h2>
      <img src={emptyCart} alt="Carrito Vacío" />
      <Link to={"/"} className="btn">
        Agregar productos
      </Link>
    </div>
  );
};

export default EmptyCart;
