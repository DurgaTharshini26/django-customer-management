import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: ""
  });

  // FETCH EXISTING DATA
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/customers/${id}/`)
      .then(res => {
        setFormData({
          first_name: res.data.first_name || "",
          last_name: res.data.last_name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          address: res.data.address || ""
        });
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/customers/${id}/`, formData)
      .then(() => {
        navigate("/customers");
      })
      .catch(err => console.log(err));
  };

  if (loading) {
    return <h3 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h3>;
  }

  return (
  <div style={styles.body}>
    <div style={styles.container}>
      <div style={styles.card}>

        {/* HEADER */}
        <div style={styles.header}>
          <h2 style={styles.title}>Edit Customer</h2>
          <p style={styles.subtitle}>Update existing record details</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div style={styles.group}>
            <label style={styles.label}>First Name</label>
            <input
              name="first_name"
              value={formData.first_name || ""}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Last Name</label>
            <input
              name="last_name"
              value={formData.last_name || ""}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Email</label>
            <input
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Phone</label>
            <input
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Address</label>
            <textarea
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>

          <div style={styles.btnGroup}>
            <button type="submit" style={styles.saveBtn}>
              Update
            </button>

            <button
              type="button"
              style={styles.cancelBtn}
              onClick={() => navigate("/customers")}
            >
              Cancel
            </button>
          </div>

        </form>

      </div>
    </div>
  </div>
);
}
const styles = {
  body: {
    background: "#0a0f1c",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },

  container: {
    width: "100%",
    maxWidth: "520px"
  },

  card: {
    background: "rgba(17, 26, 46, 0.95)",
    padding: "28px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 35px rgba(0,0,0,0.5)",
    backdropFilter: "blur(10px)"
  },

  header: {
    marginBottom: "18px"
  },

  title: {
    color: "#22d3ee",
    fontSize: "22px",
    marginBottom: "4px"
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "13px"
  },

  group: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "14px"
  },

  label: {
    color: "#cbd5e1",
    fontSize: "13px",
    marginBottom: "6px"
  },

  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#0a0f1c",
    color: "#fff",
    outline: "none"
  },

  textarea: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#0a0f1c",
    color: "#fff",
    minHeight: "90px",
    outline: "none"
  },

  btnGroup: {
    display: "flex",
    gap: "12px",
    marginTop: "18px"
  },

  saveBtn: {
    flex: 1,
    background: "linear-gradient(90deg, #6366f1, #22d3ee)",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  cancelBtn: {
    flex: 1,
    background: "#1f2937",
    color: "#cbd5e1",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer"
  }
};

export default EditCustomer;