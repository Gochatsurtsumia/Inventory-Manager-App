import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { getProducts, addProduct, deleteProduct } from "../services/api";

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Inventory Manager</h1>
      <ProductForm onAdd={addProduct} onRefresh={fetchProducts} />
      <ProductList
        products={products}
        onDelete={deleteProduct}
        onRefresh={fetchProducts}
      />
    </div>
  );
}
