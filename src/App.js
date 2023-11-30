import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Views/Homepage/Homepage";
import FormProducts from "../src/Components/FormProducts/FormProducts";
import PageProducts from "../src/Components/PageProducts/PageProducts";
import UserProfile from "../src/Components/UserProfile/UserProfile";
import Admin from "../src/Components/Admin/Admin";
import EditProduct from "../src/Components/Admin/EditProduct";
import CartAlt from "../src/Components/Cart/CartAlt";
import Favorites from "../src/Components/Favorites/Favorites";
import ProductDetailAlt from "../src/Components/ProductDetail/ProductDetailsAlt";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<FormProducts />} />
          <Route path="/products" element={<PageProducts />} />
          <Route path="/product/:id" element={<ProductDetailAlt />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/cart/*" element={<CartAlt />} />
          <Route path="/admin/editproduct/:id" element={<EditProduct />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
