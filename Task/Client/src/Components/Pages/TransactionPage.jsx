import { useForm } from "react-hook-form";
import { format } from "date-fns";

function TransactionPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      date: format(new Date(data.date), "yyyy-MM-dd"),
    };
    console.log(formattedData);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-4">
      <div className="max-w-md w-full p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-200">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Add Transaction
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Amount Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Amount</span>
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              {...register("amount", {
                required: "Amount is required",
                valueAsNumber: true,
              })}
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.amount.message}
              </p>
            )}
          </div>

          {/* Date Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Date</span>
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Transaction Type Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Transaction Type</span>
            </label>
            <select
              {...register("type", {
                required: "Transaction type is required",
              })}
              className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select type</option>
              <option value="withdraw">Withdraw</option>
              <option value="deposit">Deposit</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionPage;
