import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../service/firebase";
import NoExistProduct from "./NoExistProduct";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const coleccionProductos = collection(db, "productos");
    const docRef = doc(coleccionProductos, id);
    getDoc(docRef)
      .then((prod) => {
        if (prod.data()) {
          setDetail({
            id: prod.id,
            ...prod.data(),
          });
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error trayendo el producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : !error ? (
        <ItemDetail detail={detail} />
      ) : (
        <NoExistProduct />
      )}
    </>
  );
};

export default ItemDetailContainer;
