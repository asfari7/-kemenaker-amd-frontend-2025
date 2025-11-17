import useFetch from "../hooks/useFecth";
import useMutation from "../../../Root-Folder/src/hooks/useMutation";
import { getProduct, deleteProduct } from "../services/productServices";

const ProductList = () => {
  const { data, loading, error } = useFetch(getProduct);
  const { mutate: remove } = useMutation(deleteProduct);

  const handleDelete = async (id) => {
    const result = await remove(id);
    if (result) {
      alert("Product berhasil dihapus!");
    }
  };

  if (loading) return <p>Memuat data produk...</p>;
  if (error) return <p>Terjadi kesalahan saat memuat data produk.</p>;

  console.log(data.products);

  return (
    <section className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Product Data</h2>
      </div>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-2 px-3 border">ID</th>
            <th className="py-2 px-3 border">Name</th>
            <th className="py-2 px-3 border">Price</th>
            <th className="py-2 px-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-3 border">{item.id}</td>
              <td className="py-2 px-3 border">{item.title}</td>
              <td className="py-2 px-3 border">
                ${item.price.toLocaleString()}
              </td>
              <td className="py-2 px-3 border">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 hover:cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductList;
