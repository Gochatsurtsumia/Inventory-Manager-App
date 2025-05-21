const API = "https://inventory-manager-app-mfne.onrender.com/products";

export const getProducts = async () => {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to add product");
  return await res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete product");
};
