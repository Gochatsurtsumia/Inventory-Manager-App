import React, { useState } from "react";

export default function ProductForm({ onAdd, onRefresh }) {
  const [form, setForm] = useState({
    name: "",
    ProductCode: "",
    quantity: "",
    price: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...form,
        quantity: Number(form.quantity),
        price: Number(form.price),
      };
      await onAdd(dataToSend);
      setForm({
        name: "",
        ProductCode: "",
        quantity: "",
        price: "",
        location: "",
      });
      onRefresh();
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        placeholder="Product Code"
        value={form.ProductCode}
        onChange={(e) => setForm({ ...form, ProductCode: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />
      <input
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
