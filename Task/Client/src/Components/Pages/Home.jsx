import { FaCaretRight } from "react-icons/fa6";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-6">Overview</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-black text-white py-5 px-8">
          <h5 className="text-sm">Current Balance</h5>
          <h2 className="text-3xl">$5000.00</h2>
        </div>
        <div className="bg-slate-200 rounded-2xl py-5 px-8">
          <h5 className="text-sm">Income</h5>
          <h2 className="text-3xl">$3814.25.00</h2>
        </div>
        <div className="bg-slate-200 rounded-2xl py-5 px-8">
          <h5 className="text-sm">Expense</h5>
          <h2 className="text-3xl">$1700.25</h2>
        </div>
      </div>
      <div className="flex my-5 gap-5">
        <div className="flex flex-col bg-slate-400">
          <div className=" rounded-2xl p-5">
            <div className="flex justify-between">
              <h4 className="text-xl">pots</h4>
              <p className="text-md flex gap-1 items-center">
                See Details <FaCaretRight />
              </p>
            </div>
            <div className="flex">
              <div className="bg-fuchsia-50 flex gap-5 p-5">
                <RiMoneyDollarBoxLine className="text-5xl" />
                <div className="flex flex-col">
                  <p className="text-sm">Total Saved</p>
                  <div className="text-xl font-bold">$850</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-l-3 border-l-blue-700 p-3 rounded">
            <p className="text-sm">Savings</p>
            <p className="text-md font-bold">$159</p>
          </div>
          <div className="border-l-3 border-l-blue-400 p-3 rounded">
            <p className="text-sm">Gift</p>
            <p className="text-md font-bold">$40</p>
          </div>
          <div className="border-l-3 border-l-red-700 p-3 rounded">
            <p className="text-sm">Concert Ticket</p>
            <p className="text-md font-bold">$110</p>
          </div>
          <div className="border-l-3 border-l-orange-700 p-3 rounded">
            <p className="text-sm">New Laptop</p>
            <p className="text-md font-bold">$10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
