import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../mocks/AsyncMock";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOneProduct(id)
      .then((prod) => {
        setDetail(prod);
      })
      .catch((error) => {
        console.error("Error trayendo el producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <>{loading ? <Loader /> : <ItemDetail detail={detail} />}</>;
};

export default ItemDetailContainer;
