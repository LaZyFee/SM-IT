import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layouts/Main";
import { Home } from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import TransactionPage from "../Pages/TransactionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/transactions",
        element: <TransactionPage />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
