import { PieChart, Pie, Cell } from "recharts";
import { FaCaretRight } from "react-icons/fa6";

const data = [
  { name: "Entertainment", value: 50 },
  { name: "Bills", value: 750 },
  { name: "Dining Out", value: 75 },
  { name: "Personal Care", value: 100 },
];

const COLORS = ["#146C94", "#19A7CE", "#F4A261", "#6C5B7B"];
const total = data.reduce((acc, item) => acc + item.value, 0);
const limit = 975;

export const BudgetsChart = () => (
  <div className="bg-white p-2 rounded-xl w-full">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-lg font-semibold text-gray-800">Budgets</h4>
      <button className="flex items-center text-sm text-gray-500 hover:underline">
        See Details <FaCaretRight className="ml-1" />
      </button>
    </div>

    {/* Chart and Labels */}
    <div className="flex flex-col sm:flex-row items-center gap-2">
      {/* Donut Chart */}
      <div className="relative w-48 h-48">
        <PieChart width={192} height={192}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xl font-bold">${total}</p>
          <p className="text-xs text-gray-500">of ${limit} limit</p>
        </div>
      </div>

      {/* Labels */}
      <div className="flex flex-col gap-3 text-sm text-gray-800 w-full">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-stretch justify-between">
            <div className="flex items-stretch gap-2 w-full">
              <span
                className="w-1 self-stretch rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <div className="flex flex-col justify-center">
                <span className="text-gray-500">{item.name}</span>
                <span className="font-semibold">${item.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
