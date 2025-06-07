import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a Nevela" />
    </div>
  );
}

export default App;
