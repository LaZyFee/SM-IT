export const OverviewHeader = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div className="rounded-2xl bg-black text-white py-5 px-8">
      <h5 className="text-sm opacity-50">Current Balance</h5>
      <h2 className="text-3xl">$4,836.00</h2>
    </div>
    <div className="bg-white rounded-md py-5 px-8">
      <h5 className="text-sm opacity-50">Income</h5>
      <h2 className="text-3xl font-bold">$3,814.25</h2>
    </div>
    <div className="bg-white rounded-md py-5 px-8">
      <h5 className="text-sm opacity-50">Expenses</h5>
      <h2 className="text-3xl font-bold">$1,700.50</h2>
    </div>
  </div>
);
