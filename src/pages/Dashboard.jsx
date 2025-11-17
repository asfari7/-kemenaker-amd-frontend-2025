import { useState } from "react";
import ProductList from "../components/ProductList";
import { getProduct } from "../services/productServices";
import useFetch from "../hooks/useFecth";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useFetch(getProduct);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>Error loading dashboard data.</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-3">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <button className="w-full py-2 px-3 border rounded hover:bg-gray-50">
          Dashboard
        </button>
        <button className="w-full py-2 px-3 border rounded hover:bg-gray-50">
          Add Product
        </button>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Logout
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="text-lg font-semibold">Total Products</p>
            <p className="text-2xl font-bold mt-2">{data?.total}</p>
          </div>
        </section>

        <ProductList />
      </main>
    </div>
  );
}
