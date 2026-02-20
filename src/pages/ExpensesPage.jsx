import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function ExpensesPage() {
  const [expenses] = useState([
    {
      id: 1,
      description: "Коммунальные платежи",
      amount: 15000,
      date: "28.01.2026",
    },
    {
      id: 2,
      description: "Зарплата сотрудникам",
      amount: 250000,
      date: "25.01.2026",
    },
    {
      id: 3,
      description: "Закупка расходных материалов",
      amount: 32500,
      date: "15.01.2026",
    },
    {
      id: 4,
      description: "Аренда помещения",
      amount: 85000,
      date: "01.01.2026",
    },
  ]);

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const currentMonthExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  const handleEdit = (id) => {
    console.log("Edit expense:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete expense:", id);
  };

  const handleAddExpense = () => {
    console.log("Add new expense");
  };

  return (
    <div className="bg-slate-900 min-h-screen p-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-white text-3xl font-bold mb-2">Расходы</h1>
          <p className="text-gray-400">Учет расходов автосервиса</p>
        </div>
        <button
          onClick={handleAddExpense}
          className="flex items-center gap-2 bg-blue-600 hover:opacity-95 text-white font-semibold px-4 py-2 rounded-lg"
        >
          <Plus size={18} />
          Добавить расход
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-800 rounded-lg p-4">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Расходы за текущий месяц
          </span>
          <span className="block text-4xl font-bold text-red-500">
            {currentMonthExpenses.toLocaleString()} сом
          </span>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <span className="block text-xs uppercase text-slate-400 tracking-wide mb-2">
            Всего расходов
          </span>
          <span className="block text-4xl font-bold text-white">
            {totalExpenses.toLocaleString()} сом
          </span>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-4">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-slate-700">
              <th className="py-4 px-4">Описание</th>
              <th className="py-4 px-4">Сумма</th>
              <th className="py-4 px-4">Дата</th>
              <th className="py-4 px-4 text-right">Действия</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, idx) => (
              <tr
                key={expense.id}
                className={`text-gray-200 ${
                  idx < expenses.length - 1 ? "border-b border-slate-700" : ""
                }`}
              >
                <td className="py-4 px-4">{expense.description}</td>
                <td className="py-4 px-4 text-red-500 font-medium">
                  {expense.amount.toLocaleString()} сом
                </td>
                <td className="py-4 px-4">{expense.date}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => handleEdit(expense.id)}
                      className="text-gray-300 hover:text-white"
                      title="Редактировать"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(expense.id)}
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
