// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import ClientsPage from "./pages/ClientsPage";
import ShipmentPage from "./pages/ShipmentPage";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-50 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/shipments" element={<ShipmentPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
