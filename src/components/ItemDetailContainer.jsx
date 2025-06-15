import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../mocks/AsyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id)
      .then((prod) => {
        setDetail(prod);
      })
      .catch((error) => {
        console.error("Error trayendo el producto:", error);
      });
  }, [id]);

  return (
    <>
      <ItemDetail detail={detail} />
    </>
  );
};

export default ItemDetailContainer;
