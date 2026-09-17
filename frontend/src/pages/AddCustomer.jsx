import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/api/customers/", form)
      .then(() => {
        navigate("/customers"); // go back to list
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center p-6 text-gray-200">

      <div className="w-full max-w-lg bg-[#111a2e]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md">

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-cyan-300 mb-1">
          Add New Customer
        </h1>

        <p className="text-gray-400 mb-6 text-sm">
          Create a new customer record in system
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="first_name"
            placeholder="First Name"
            value={form.first_name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] border border-white/10 focus:border-cyan-400 outline-none"
          />

          <input
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] border border-white/10 focus:border-cyan-400 outline-none"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] border border-white/10 focus:border-cyan-400 outline-none"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] border border-white/10 focus:border-cyan-400 outline-none"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#0a0f1c] border border-white/10 focus:border-cyan-400 outline-none"
          />

          {/* BUTTONS */}
          <div className="flex gap-3 pt-2">

            <button
              type="submit"
              className="flex-1 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 hover:opacity-90"
            >
              Save Customer
            </button>

            <button
              type="button"
              onClick={() => navigate("/customers")}
              className="flex-1 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddCustomer;