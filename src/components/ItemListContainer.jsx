import { useEffect, useState } from "react";
import { getAllProducts } from "../mocks/AsyncMock";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
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
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>{categoryId ? `${categoryId}` : "Bienvenido a Nevela"}</h1>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
