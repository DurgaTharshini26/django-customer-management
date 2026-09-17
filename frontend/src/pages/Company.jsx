import { useNavigate } from "react-router-dom";

function Company() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-gray-200 flex items-center justify-center p-6">

      <div className="max-w-6xl w-full">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 text-transparent bg-clip-text">
            Cyber Company Dashboard
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Modern control center for your data system
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

          <div className="bg-[#111a2e] p-5 rounded-xl border border-white/10 hover:scale-105 transition">
            <p className="text-gray-400">System Modules</p>
            <h2 className="text-2xl font-bold text-indigo-300">1</h2>
          </div>

          <div className="bg-[#111a2e] p-5 rounded-xl border border-white/10 hover:scale-105 transition">
            <p className="text-gray-400">Customers</p>
            <h2 className="text-2xl font-bold text-cyan-300">Active</h2>
          </div>

          <div className="bg-[#111a2e] p-5 rounded-xl border border-white/10 hover:scale-105 transition">
            <p className="text-gray-400">System Status</p>
            <h2 className="text-2xl font-bold text-emerald-300">Online</h2>
          </div>

        </div>

        {/* MAIN CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* CUSTOMERS */}
          <div className="bg-[#111a2e]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:scale-105 transition">

            <h2 className="text-2xl font-semibold text-cyan-300">
              Customers Engine
            </h2>

            <p className="text-gray-400 mt-2">
              Full lifecycle management of customer records.
            </p>

            <button
              onClick={() => navigate("/customers")}
              className="mt-5 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 hover:opacity-90"
            >
              Open Module
            </button>

          </div>

          {/* QUICK ACTION */}
          <div className="bg-[#111a2e]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:scale-105 transition">

            <h2 className="text-2xl font-semibold text-emerald-300">
              Quick Deploy
            </h2>

            <p className="text-gray-400 mt-2">
              Instantly add a new customer entry.
            </p>

            <button
              onClick={() => navigate("/customers/new")}
              className="mt-5 px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-90"
            >
              + Create
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Company;