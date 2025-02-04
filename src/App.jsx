import { Outlet } from "react-router";
import { Header } from "./components/layout";

function App() {
  return (
    <div className="font-gothic">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
