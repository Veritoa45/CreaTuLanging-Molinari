import { useEffect, useState } from "react";
import { getAllProducts } from "../mocks/AsyncMock";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((respuesta) => setData(respuesta))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>{props.saludo}</h1>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
