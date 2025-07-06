const OrderId = ({ orderId }) => {
  return (
    <div className="orderId">
      <h2>Su compra se realizó con éxito</h2>
      <h3>Su número de orden es {orderId}</h3>
      <h5>Gracias por su compra! ❤</h5>
    </div>
  );
};

export default OrderId;
