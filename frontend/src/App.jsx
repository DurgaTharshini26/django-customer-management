import { BrowserRouter, Routes, Route } from "react-router-dom";

import Company from "./pages/Company";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Company />}
        />

        <Route
          path="/customers"
          element={<Customers />}
        />

        <Route
          path="/customers/new"
          element={<AddCustomer />}
        />

        <Route
          path="/customers/edit/:id"
          element={<EditCustomer />}
        />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;