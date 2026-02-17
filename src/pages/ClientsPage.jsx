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
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-white mb-2">Клиенты</h1>
          <p className="text-slate-400 text-sm">
            Управление клиентами и должниками
          </p>
        </div>
        <button
          onClick={handleAddClient}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
        >
          <Plus size={18} />
          Добавить клиента
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Всего клиентов
          </span>
          <span className="block text-4xl font-bold text-slate-200">
            {totalClients}
          </span>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Должников
          </span>
          <span className="block text-4xl font-bold text-red-500">
            {debtors}
          </span>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Общая сумма долга
          </span>
          <span className="block text-4xl font-bold text-red-500">
            {totalDebt.toLocaleString()} сом
          </span>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-950">
            <tr>
              <th className="px-4 py-4 text-left text-xs uppercase font-semibold text-slate-400 tracking-wider border-b border-slate-700">
                Имя
              </th>
              <th className="px-4 py-4 text-left text-xs uppercase font-semibold text-slate-400 tracking-wider border-b border-slate-700">
                Телефон
              </th>
              <th className="px-4 py-4 text-center text-xs uppercase font-semibold text-slate-400 tracking-wider border-b border-slate-700">
                Долг
              </th>
              <th className="px-4 py-4 text-right text-xs uppercase font-semibold text-slate-400 tracking-wider border-b border-slate-700">
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className={`border-b border-slate-700 transition-colors ${
                  client.status === "debtor" ? "bg-red-950 bg-opacity-10" : ""
                }`}
              >
                <td className="px-4 py-4 text-slate-200">
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
                <td className="px-4 py-4 text-slate-200">{client.phone}</td>
                <td className="px-4 py-4 text-center">
                  {client.debt > 0 ? (
                    <span className="text-red-500 font-medium">
                      {client.debt.toLocaleString()} сом
                    </span>
                  ) : (
                    <span className="text-slate-500">—</span>
                  )}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleEdit(client.id)}
                      className="p-2 hover:bg-slate-700 rounded-md transition-colors text-slate-300 hover:text-slate-100"
                      title="Редактировать"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="p-2 hover:bg-red-950 hover:bg-opacity-30 rounded-md transition-colors text-slate-300 hover:text-red-500"
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
