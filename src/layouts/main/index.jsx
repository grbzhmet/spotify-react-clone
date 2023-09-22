import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";

export default function MainLayout() {
  return (
    <div className="w-100 mx-auto flex">
      <SideBar />
      <main className="flex-1 px-2 py-3 ml-2 bg-neutral-900 rounded-lg min-h-screen">
        <Outlet />
      </main>
      
    </div>
  )
}