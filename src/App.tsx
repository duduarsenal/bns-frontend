import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { ISidebarProps } from "./@types/sidebar";

function App() {
  const [sidebar, setSideBar] = useState<ISidebarProps>({
    page: "",
    status: false,
  });

  return (
    <main className="flex justify-between">
      <SideBar status={sidebar.status} page={sidebar.page} />
      <div /> {/* Div fantasma para colocar o conteudo para direita e sidebar na esquerda */}
      <Outlet context={setSideBar} />
    </main>
  );
}

export default App;
