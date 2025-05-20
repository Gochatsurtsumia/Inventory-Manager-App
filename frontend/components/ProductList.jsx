import React from "react";

export default function ProductList({ products, onDelete, onRefresh }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Prod Code</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.ProductCode}</td> {/* fixed from p.sku */}
            <td>{p.quantity}</td>
            <td>${p.price.toFixed(2)}</td>
            <td>{p.location}</td>
            <td>
              <button onClick={() => onDelete(p.id).then(onRefresh)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
