import Error from "../../public/404.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={Error} alt="404" />
      <Link to={"/"}>
        <button className="btn">VOLVER</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
