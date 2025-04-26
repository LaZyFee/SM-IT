import { NavLink, Outlet } from "react-router-dom";
import { FaChartPie, FaHome } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { TbArrowBigLeftLines } from "react-icons/tb";
export const Main = () => {
  const menuItems = [
    {
      name: "Overview",
      icon: FaHome,
      path: "/",
    },
    {
      name: "Transactions",
      icon: LuArrowUpDown,
      path: "/transactions",
    },
    {
      name: "Budgets",
      icon: FaChartPie,
      path: "/budgets",
    },
    {
      name: "Pots",
      icon: RiMoneyDollarBoxLine,
      path: "/pots",
    },
    {
      name: "Recurring Bills",
      icon: GoNote,
      path: "/bills",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="min-h-screen w-64 bg-[#1c1b1f] text-white p-4 flex flex-col justify-between rounded-r-xl">
        <div>
          <h1 className="text-white text-2xl font-bold px-2 mb-6">finance</h1>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-e-full transition-all ${
                        isActive
                          ? "bg-white text-black"
                          : "text-gray-400 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          className={`text-lg ${
                            isActive ? "text-teal-500" : "text-gray-400"
                          }`}
                        />
                        <span className="text-base">{item.name}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Minimize Menu */}
        <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer px-2 py-3 text-sm">
          <TbArrowBigLeftLines /> Minimize Menu
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};
