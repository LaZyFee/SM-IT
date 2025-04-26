import { FaCaretRight } from "react-icons/fa6";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

export const PotsSection = () => (
  <div className="bg-white rounded-2xl p-4">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-xl font-semibold">Pots</h4>
      <button className="flex items-center text-sm text-gray-600">
        See Details
        <FaCaretRight />
      </button>
    </div>
    <div className="flex justify-around">
      <div className="bg-fuchsia-50 flex items-center gap-5 p-2 rounded-xl w-1/2">
        <RiMoneyDollarBoxLine className="text-4xl text-purple-600" />
        <div>
          <p className="text-sm opacity-50">Total Saved</p>
          <p className="text-2xl font-bold">$850</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Savings", value: "$159", color: "border-l-blue-700" },
          { label: "Gift", value: "$40", color: "border-l-blue-400" },
          { label: "Concert Ticket", value: "$110", color: "border-l-red-700" },
          { label: "New Laptop", value: "$10", color: "border-l-orange-700" },
        ].map((item) => (
          <div
            key={item.label}
            className={`pl-3 border-l-4 ${item.color}  bg-gray-50 rounded`}
          >
            <p className="text-sm opacity-50">{item.label}</p>
            <p className="font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
