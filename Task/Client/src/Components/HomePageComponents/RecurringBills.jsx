import { FaCaretRight } from "react-icons/fa6";

const billsData = [
  { name: "Paid Bills", amount: "$190.00", color: "#198754" },
  { name: "Total Upcoming", amount: "$194.98", color: "#f4a261" },
  { name: "Due Soon", amount: "$59.98", color: "#19A7CE" },
];

export const RecurringBills = () => (
  <div className="bg-white p-5 rounded-2xl w-full max-w-md">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-lg font-semibold text-gray-800">Recurring Bills</h4>
      <button className="flex items-center text-sm text-gray-500">
        See Details <FaCaretRight className="ml-1" />
      </button>
    </div>

    <ul className="flex flex-col gap-3">
      {billsData.map((bill, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-50 rounded-xl p-4 relative overflow-hidden"
        >
          <span
            className="absolute left-0 top-0 bottom-0 w-1 rounded-s-xl"
            style={{ backgroundColor: bill.color }}
          ></span>

          <span className="text-gray-600">{bill.name}</span>
          <span className="font-semibold text-gray-800">{bill.amount}</span>
        </li>
      ))}
    </ul>
  </div>
);
