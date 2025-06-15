import { useEffect, useState } from "react";
import { getAllProducts } from "../mocks/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getAllProducts()
      .then((respuesta) => {
        if (categoryId) {
          setData(
            respuesta.filter((prod) => prod.categoria.includes(categoryId))
          );
        } else {
          setData(respuesta);
        }
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <>
      <h1>{categoryId ? `${categoryId}` : "Bienvenido a Nevela"}</h1>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
