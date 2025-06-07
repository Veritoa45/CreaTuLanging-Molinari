import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div className="list">
      {data.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
