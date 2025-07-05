import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src="/404.png" alt="404" />
      <Link to={"/"}>
        <button className="btn">VOLVER</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
