import { Link } from "react-router-dom";

const NoExistProduct = () => {
  return (
    <div className="noProducts">
      <img src="/oops.png" alt="Producto no encontrado" className="oops" />
      <Link to={"/"} className="btn">
        Volver
      </Link>
    </div>
  );
};

export default NoExistProduct;
