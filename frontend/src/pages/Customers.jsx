import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/customers/")
      .then(res => setCustomers(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/customers/delete/${id}/`)
      .then(() => {
        setCustomers(prev => prev.filter(c => c.id !== id));
      });
  };

  // FILTER (frontend only)
  const filtered = customers.filter(c =>
    (c.first_name + " " + c.last_name + c.email)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-gray-200 p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

        <div>
          <h1 className="text-3xl font-bold text-cyan-300">
            Customers Module
          </h1>
          <p className="text-gray-400 text-sm">
            Manage your customer database
          </p>
        </div>

        <div className="flex gap-3">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl bg-[#111a2e] border border-white/10 focus:outline-none focus:border-cyan-400"
          />

          {/* ADD BUTTON */}
          <button
            onClick={() => navigate("/customers/new")}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 hover:opacity-90"
          >
            + Add
          </button>

        </div>
      </div>

      {/* GRID */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No customers found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {filtered.map(c => (
            <div
              key={c.id}
              className="bg-[#111a2e]/80 border border-white/10 rounded-2xl p-5 hover:scale-[1.03] transition duration-200"
            >

              {/* NAME */}
              <h2 className="text-xl font-semibold text-emerald-300">
                {c.first_name} {c.last_name}
              </h2>

              {/* INFO */}
              <div className="text-sm text-gray-400 mt-2 space-y-1">
                <p>📧 {c.email}</p>
                <p>📞 {c.phone}</p>
                <p>📍 {c.address}</p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => navigate(`/customers/edit/${c.id}`)}
                  className="flex-1 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(c.id)}
                  className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Customers;