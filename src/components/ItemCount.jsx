import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count > stock) {
      setCount(stock > 0 ? stock : 1);
    }
  }, [stock]);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    onAdd(count);
  };

  return (
    <div>
      <div className="counter">
        <div className="btnAdd" onClick={restar}>
          <Icon
            icon="fluent:line-horizontal-1-16-filled"
            width="20"
            height="20"
          />
        </div>
        <span className="box">{count}</span>
        <div className="btnAdd" onClick={sumar}>
          <Icon icon="fluent:add-12-filled" width="20" height="20" />
        </div>
      </div>
      <button className="btn" disabled={stock === 0} onClick={comprar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
