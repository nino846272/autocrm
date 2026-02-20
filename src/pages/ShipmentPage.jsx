import React, { useState } from "react";
import { Plus, Edit, Trash2, Check } from "lucide-react";

export default function ShipmentPage() {
  const [shipments] = useState([
    {
      id: 1,
      client: "Иванов Иван Иванович",
      product: "Масло моторное 5W-30",
      quantity: 2,
      price: "3 500 сом",
      total: "7 000 сом",
      type: "official",
      date: "28.01.2026",
    },
    {
      id: 2,
      client: "Петров Петр Петрович",
      product: "Фильтр масляный",
      quantity: 4,
      price: "850 сом",
      total: "3 400 сом",
      type: "official",
      date: "29.01.2026",
    },
    {
      id: 3,
      client: "Сидоров Сидор Сидорович",
      product: "Свечи зажигания (комплект)",
      quantity: 1,
      price: "2 200 сом",
      total: "2 200 сом",
      type: "china",
      date: "30.01.2026",
    },
  ]);

  const totalShipments = shipments.length;
  const totalAmount = shipments.reduce((sum, s) => {
    const amount = parseInt(s.total.replace(/\D/g, ""));
    return sum + amount;
  }, 0);

  const handleEdit = (id) => {
    console.log("Edit shipment:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete shipment:", id);
  };

  const handleAddShipment = () => {
    console.log("Add new shipment");
  };

  const TypeBadge = ({ type }) => {
    if (type === "official") {
      return (
        <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
          <Check className="w-4 h-4" /> Офиц.
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
        <span className="font-semibold">×</span> Кит.
      </span>
    );
  };

  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-white text-3xl font-bold mb-2">Отгрузки</h1>
          <p className="text-gray-400">Управление отгрузками товаров</p>
        </div>
        <button
          onClick={handleAddShipment}
          className="flex items-center gap-2 bg-blue-600 hover:opacity-95 text-white font-semibold px-4 py-2 rounded-lg"
        >
          <Plus size={18} />
          Добавить отгрузку
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-800 rounded-lg p-4">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Всего отгрузок
          </span>
          <span className="block text-4xl font-bold text-white">
            {totalShipments}
          </span>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Общая сумма
          </span>
          <span className="block text-4xl font-bold text-emerald-500">
            {totalAmount.toLocaleString()} сом
          </span>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-4">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-slate-700">
              <th className="py-4 px-4">Клиент</th>
              <th className="py-4 px-4">Товар</th>
              <th className="py-4 px-4">Кол-во</th>
              <th className="py-4 px-4">Цена</th>
              <th className="py-4 px-4">Сумма</th>
              <th className="py-4 px-4">Тип</th>
              <th className="py-4 px-4">Дата</th>
              <th className="py-4 px-4 text-right">Действия</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment, idx) => (
              <tr
                key={shipment.id}
                className={`text-gray-200 ${
                  idx < shipments.length - 1 ? "border-b border-slate-700" : ""
                }`}
              >
                <td className="py-4 px-4">{shipment.client}</td>
                <td className="py-4 px-4">{shipment.product}</td>
                <td className="py-4 px-4">{shipment.quantity}</td>
                <td className="py-4 px-4">{shipment.price}</td>
                <td className="py-4 px-4 font-medium">{shipment.total}</td>
                <td className="py-4 px-4">
                  <TypeBadge type={shipment.type} />
                </td>
                <td className="py-4 px-4">{shipment.date}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => handleEdit(shipment.id)}
                      className="text-gray-300 hover:text-white"
                      title="Редактировать"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(shipment.id)}
                      className="text-red-500 hover:opacity-90"
                      title="Удалить"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
