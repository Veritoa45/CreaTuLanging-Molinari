import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const coleccionProductos = categoryId
      ? query(
          collection(db, "productos"),
          where("categoria", "array-contains", categoryId)
        )
      : collection(db, "productos");
    getDocs(coleccionProductos)
      .then((res) => {
        const listaProductos = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(listaProductos);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
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
