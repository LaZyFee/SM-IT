import { FaCaretRight } from "react-icons/fa6";

export const Transactions = () => (
  <div className="bg-white p-5 rounded-2xl">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-xl font-semibold">Transactions</h4>
      <button className="flex items-center text-sm text-gray-600">
        View All
        <FaCaretRight />
      </button>{" "}
    </div>
    <ul className="space-y-4 text-sm">
      {[
        { name: "Emma Richardson", amount: "+$75.50", date: "19 Aug 2024" },
        { name: "Savory Bites Bistro", amount: "-$55.50", date: "18 Aug 2024" },
        { name: "Daniel Carter", amount: "-$42.30", date: "18 Aug 2024" },
        { name: "Sun Park", amount: "+$120.00", date: "17 Aug 2024" },
        { name: "Urban Services Hub", amount: "-$65.00", date: "17 Aug 2024" },
      ].map((txn) => (
        <li key={txn.name} className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>{txn.name}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className={`font-medium text-end ${
                txn.amount.startsWith("+") ? "text-green-600" : "text-red-500"
              }`}
            >
              {txn.amount}
            </div>
            <p className="opacity-50">{txn.date}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
