import React from "react";
import { Plus, Edit, Trash2, Check } from "lucide-react";

const sampleProducts = [
  { id: 1, name: "Масло моторное 5W-30", price: "3 500 сом", type: "official" },
  { id: 2, name: "Фильтр масляный", price: "850 сом", type: "official" },
  {
    id: 3,
    name: "Свечи зажигания (комплект)",
    price: "2 200 сом",
    type: "china",
  },
  {
    id: 4,
    name: "Тормозные колодки передние",
    price: "4 500 сом",
    type: "official",
  },
  { id: 5, name: "Антифриз 5л", price: "1 200 сом", type: "china" },
];

function TypeBadge({ type }) {
  if (type === "official") {
    return (
      <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
        <Check className="w-4 h-4" /> Официальный
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
      <span className="font-semibold">×</span> Китайский
    </span>
  );
}

export default function ShipmentsPage() {
  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-white text-3xl font-bold mb-2">Товары</h1>
          <p className="text-gray-400">Управление товарами автосервиса</p>
        </div>

        <div>
          <button className="flex items-center gap-2 bg-blue-600 hover:opacity-95 text-white font-semibold px-4 py-2 rounded-lg">
            <Plus className="w-4 h-4" /> Добавить товар
          </button>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-4">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-slate-700">
              <th className="py-4 px-4">Название</th>
              <th className="py-4 px-4">Цена</th>
              <th className="py-4 px-4">Тип товара</th>
              <th className="py-4 px-4">Действия</th>
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((p, idx) => (
              <tr
                key={p.id}
                className={`text-gray-200 ${idx < sampleProducts.length - 1 ? "border-b border-slate-700" : ""}`}
              >
                <td className="py-4 px-4">{p.name}</td>
                <td className="py-4 px-4">{p.price}</td>
                <td className="py-4 px-4">
                  <TypeBadge type={p.type} />
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3 justify-end">
                    <button className="text-gray-300 hover:text-white">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:opacity-90">
                      <Trash2 className="w-5 h-5" />
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
