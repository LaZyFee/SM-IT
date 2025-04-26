import { BudgetsChart } from "../HomePageComponents/BudgetsChart";
import { OverviewHeader } from "../HomePageComponents/OverviewHeader";
import { PotsSection } from "../HomePageComponents/PotsSection";
import { RecurringBills } from "../HomePageComponents/RecurringBills";
import { Transactions } from "../HomePageComponents/Transactions";

export const Home = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-semibold mb-6">Overview</h1>
    <OverviewHeader />

    {/* Responsive container */}
    <div className="flex flex-col lg:flex-row gap-6 mt-6">
      {/* Left Column */}
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        <PotsSection />
        <Transactions />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 w-full lg:w-1/3">
        <BudgetsChart />
        <RecurringBills />
      </div>
    </div>
  </div>
);
