import { Outlet } from "react-router-dom";
import AppNav from "../nav/app-nav/AppNav";
import Logo from "../logo/Logo";

function Sidebar() {
  return (
    <aside className="flex w-full max-w-xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl lg:h-full lg:w-[26rem]">
      <Logo />
      <AppNav />
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
      <footer className="mt-auto text-xs uppercase tracking-[0.3em] text-slate-500">
        © {new Date().getFullYear()} WorldWise Inc.
      </footer>
    </aside>
  );
}

export default Sidebar;
