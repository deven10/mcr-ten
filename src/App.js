import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Navbar } from "./components/Navbar";
import { InventoryDashboard } from "./pages/InventoryDashboard";
import { Departments } from "./pages/Departments";
import { ProductsList } from "./pages/ProductsList";
import { SingleProduct } from "./pages/SingleProduct";
import { AddNewProduct } from "./pages/AddNewProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<InventoryDashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products-list" element={<ProductsList />} />
        <Route path="/product/:productID" element={<SingleProduct />} />
        <Route path="/new-product" element={<AddNewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
