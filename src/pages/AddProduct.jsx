import { useState } from "react";
import { createProduct } from "../services/productServices";
import useMutation from "../hooks/useMutation";

export default function AddProductForm() {
  const { mutate, loading, error } = useMutation(createProduct);
  const [form, setForm] = useState({ name: "", price: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await mutate(form);

    if (result) {
      alert("Product berhasil ditambahkan!");
      setForm({ name: "", price: "", description: "" });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter product name"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Price (Rp)</label>
          <input
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="50000"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            rows="4"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Write product description..."
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={() => setForm({ name: "", price: "", description: "" })}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
