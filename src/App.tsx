import { Outlet, RouterProvider } from "react-router";
import router from "@router";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="font-gothic">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
