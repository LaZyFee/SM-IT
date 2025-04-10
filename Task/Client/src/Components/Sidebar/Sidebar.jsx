import { FaChartPie, FaHome } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { Home } from "../Pages/Home";

export const Sidebar = () => {
  const menuitems = [
    {
      name: "Overview",
      icons: <FaHome />,
      path: "/",
    },
    {
      name: "Transaction",
      icons: <LuArrowUpDown />,
      path: "/",
    },
    {
      name: "Budgets",
      icons: <FaChartPie />,
      path: "/",
    },
    {
      name: "Posts",
      icons: <RiMoneyDollarBoxLine />,
      path: "/",
    },
    {
      name: "Recurring Bills",
      icons: <GoNote />,
      path: "/",
    },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mx-5">
        {/* Page content here */}
        <Home />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <h1 className="text-3xl font-semibold">finance</h1>

          {menuitems.map((menu) => (
            <li className="flex gap-2">
              {menu.icons} {menu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
