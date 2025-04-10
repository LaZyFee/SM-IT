import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

export const Main = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};
