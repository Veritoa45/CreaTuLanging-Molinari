import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ErrorPage from "./components/ErrorPage";
import CartContainer from "./components/CartContainer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="Bienvenidos a Nevela" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
