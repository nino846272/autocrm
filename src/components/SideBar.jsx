import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Users,
  Truck,
  DollarSign,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SideBarStyle.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      color: "text-blue-400",
    },
    {
      id: "products",
      label: "Товары",
      icon: Package,
      path: "/products",
      color: "text-green-400",
    },
    {
      id: "clients",
      label: "Клиенты",
      icon: Users,
      path: "/clients",
      color: "text-purple-400",
    },
    {
      id: "shipments",
      label: "Отгрузки",
      icon: Truck,
      path: "/shipments",
      color: "text-yellow-400",
    },
    {
      id: "expenses",
      label: "Расходы",
      icon: DollarSign,
      path: "/expenses",
      color: "text-red-400",
    },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.path);
    navigate(item.path);
  };

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-900 text-white shadow-2xl border-r border-gray-800">
      {/* Заголовок */}
      <div className="p-6 border-b border-gray-800">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
            CRM для СТО
          </h1>
          <p className="text-gray-400 text-sm animate-slideIn">Автосервис</p>
        </div>
      </div>
      {/* Основное меню */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
              activeItem === item.path
                ? "bg-gray-800 shadow-lg border-l-4 border-blue-500"
                : "hover:bg-gray-800/50 text-gray-300"
            } animate-menuItem`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div
              className={`p-2 rounded-lg ${activeItem === item.path ? "bg-gray-700" : "bg-gray-800"} transition-all duration-300 group-hover:rotate-12`}
            >
              <item.icon
                className={`w-5 h-5 transition-all duration-300 ${item.color} ${activeItem === item.path ? "scale-110" : ""}`}
              />
            </div>

            <span
              className={`font-medium transition-all duration-300 ${activeItem === item.path ? "text-white" : "text-gray-300"}`}
            >
              {item.label}
            </span>

            {activeItem === item.path && (
              <div className="ml-auto w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            )}
          </button>
        ))}
      </nav>
      {/* Футер с кнопкой выхода */}
      <div className="p-4 border-t border-gray-800 space-y-4">
        {/* Кнопка выхода */}
        <p className="text-center text-gray-500 text-sm animate-pulse-slow">
          © 2026 CRM System
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
