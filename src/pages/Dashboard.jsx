import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  Users,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Plus,
} from "lucide-react";

const StatCard = ({ icon: Icon, title, value, subtitle, trend }) => (
  <div className="bg-slate-800 rounded-lg p-6 flex items-start justify-between">
    <div>
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <p className="text-white text-3xl font-bold">{value}</p>
      <p className="text-gray-500 text-xs mt-2">{subtitle}</p>
    </div>
    <div
      className={`p-3 rounded-lg ${trend === "up" ? "bg-emerald-500/20" : trend === "down" ? "bg-red-500/20" : "bg-amber-500/20"}`}
    >
      {Icon && (
        <Icon
          className={`w-6 h-6 ${trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-amber-400"}`}
        />
      )}
    </div>
  </div>
);

const QuickActionButton = ({ icon: Icon, label, color }) => (
  <button
    className={`${color} text-white font-semibold py-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
  >
    {Icon && <Icon className="w-5 h-5" />}
    {label}
  </button>
);

export default function Dashboard() {
  const incomeExpensesChartRef = useRef(null);
  const incomeCategoriesChartRef = useRef(null);
  const incomeExpensesChartInstance = useRef(null);
  const incomeCategoriesChartInstance = useRef(null);
  useEffect(() => {
    if (incomeExpensesChartRef.current) {
      const ctx = incomeExpensesChartRef.current.getContext("2d");

      if (incomeExpensesChartInstance.current) {
        incomeExpensesChartInstance.current.destroy();
      }

      incomeExpensesChartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Доход",
              data: [],
              borderColor: "#10b981",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
              pointBackgroundColor: "#10b981",
              pointBorderColor: "#10b981",
              pointRadius: 5,
              pointHoverRadius: 7,
            },
            {
              label: "Расходы",
              data: [],
              borderColor: "#ef4444",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
              pointBackgroundColor: "#ef4444",
              pointBorderColor: "#ef4444",
              pointRadius: 5,
              pointHoverRadius: 7,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                color: "#d1d5db",
                font: {
                  size: 12,
                },
                padding: 20,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(209, 213, 219, 0.1)",
              },
              ticks: {
                color: "#9ca3af",
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#9ca3af",
              },
            },
          },
        },
      });
    }

    return () => {
      if (incomeExpensesChartInstance.current) {
        incomeExpensesChartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (incomeCategoriesChartRef.current) {
      const ctx = incomeCategoriesChartRef.current.getContext("2d");

      if (incomeCategoriesChartInstance.current) {
        incomeCategoriesChartInstance.current.destroy();
      }

      incomeCategoriesChartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [],
          datasets: [
            {
              label: "Доход",
              data: [],
              backgroundColor: "#3b82f6",
              borderRadius: 8,
              borderSkipped: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(209, 213, 219, 0.1)",
              },
              ticks: {
                color: "#9ca3af",
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#9ca3af",
              },
            },
          },
        },
      });
    }

    return () => {
      if (incomeCategoriesChartInstance.current) {
        incomeCategoriesChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">Обзор деятельности автосервиса</p>
      </div>

      {/* Recent Activity Section */}
      <div className="mb-8">
        <h2 className="text-white text-lg font-semibold mb-4">
          Недавняя активность
        </h2>
        <div className="space-y-2">
          {/* Активности будут добавлены из БД */}
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          title="Всего клиентов"
          value="0"
          subtitle=""
          trend="neutral"
        />
        <StatCard
          icon={AlertCircle}
          title="Должников"
          value="0"
          subtitle=""
          trend="warning"
        />
        <StatCard
          icon={TrendingUp}
          title="Доход за месяц"
          value="0 сом"
          subtitle=""
          trend="up"
        />
        <StatCard
          icon={TrendingDown}
          title="Расход за месяц"
          value="0 сом"
          subtitle=""
          trend="down"
        />
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-white text-lg font-semibold mb-4">
          Быстрые действия
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickActionButton
            icon={Plus}
            label="Добавить клиента"
            color="bg-blue-600"
          />
          <QuickActionButton
            icon={Plus}
            label="Добавить товар"
            color="bg-emerald-600"
          />
          <QuickActionButton
            icon={Plus}
            label="Добавить отгрузку"
            color="bg-purple-600"
          />
          <QuickActionButton
            icon={Plus}
            label="Добавить расход"
            color="bg-orange-600"
          />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Income and Expenses Chart */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">Доходы и расходы</h3>
          <div className="relative h-64">
            <canvas ref={incomeExpensesChartRef}></canvas>
          </div>
        </div>

        {/* Income by Categories Chart */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">Доход по категориям</h3>
          <div className="relative h-64">
            <canvas ref={incomeCategoriesChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
