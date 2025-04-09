import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Router";
import "./App.css";
function App() {
  return (
    <div className="bg-white text-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
