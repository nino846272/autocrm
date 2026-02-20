// клиенты
import React, { useState } from "react";
import { Plus, Edit, Trash2, AlertCircle } from "lucide-react";
export default function ClientsPage() {
  const [clients] = useState([
    {
      id: 1,
      name: "Иванов Иван Иванович",
      phone: "+996 (700) 123-45-67",
      debt: 15000,
      status: "debtor",
    },
    {
      id: 2,
      name: "Петров Петр Петрович",
      phone: "+996 (701) 234-56-78",
      debt: 0,
      status: "active",
    },
    {
      id: 3,
      name: "Сидоров Сидор Сидорович",
      phone: "+996 (702) 345-67-89",
      debt: 8500,
      status: "debtor",
    },
    {
      id: 4,
      name: "Козлов Андрей Михайлович",
      phone: "+996 (703) 456-78-90",
      debt: 25000,
      status: "debtor",
    },
    {
      id: 5,
      name: "Смирнова Елена Александровна",
      phone: "+996 (704) 567-89-01",
      debt: 0,
      status: "active",
    },
  ]);

  const totalClients = clients.length;
  const debtors = clients.filter((c) => c.status === "debtor").length;
  const totalDebt = clients.reduce((sum, c) => sum + c.debt, 0);

  const handleEdit = (id) => {
    console.log("Edit client:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete client:", id);
  };

  const handleAddClient = () => {
    console.log("Add new client");
  };

  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-white text-3xl font-bold mb-2">Клиенты</h1>
          <p className="text-gray-400">Управление клиентами и должниками</p>
        </div>
        <button
          onClick={handleAddClient}
          className="flex items-center gap-2 bg-blue-600 hover:opacity-95 text-white font-semibold px-4 py-2 rounded-lg"
        >
          <Plus size={18} />
          Добавить клиента
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800 rounded-lg p-4">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Всего клиентов
          </span>
          <span className="block text-4xl font-bold text-white">
            {totalClients}
          </span>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Должников
          </span>
          <span className="block text-4xl font-bold text-red-500">
            {debtors}
          </span>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Общая сумма долга
          </span>
          <span className="block text-4xl font-bold text-red-500">
            {totalDebt.toLocaleString()} сом
          </span>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-4">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-slate-700">
              <th className="py-4 px-4">Имя</th>
              <th className="py-4 px-4">Телефон</th>
              <th className="py-4 px-4">Долг</th>
              <th className="py-4 px-4 text-right">Действия</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, idx) => (
              <tr
                key={client.id}
                className={`text-gray-200 ${
                  idx < clients.length - 1 ? "border-b border-slate-700" : ""
                } ${client.status === "debtor" ? "bg-red-950 bg-opacity-10" : ""}`}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {client.status === "debtor" && (
                      <AlertCircle
                        size={18}
                        className="text-red-500 flex-shrink-0"
                      />
                    )}
                    <span>{client.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">{client.phone}</td>
                <td className="py-4 px-4">
                  {client.debt > 0 ? (
                    <span className="text-red-500 font-medium">
                      {client.debt.toLocaleString()} сом
                    </span>
                  ) : (
                    <span className="text-slate-500">—</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => handleEdit(client.id)}
                      className="text-gray-300 hover:text-white"
                      title="Редактировать"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
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
