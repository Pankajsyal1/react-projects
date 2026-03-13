import Map from "../components/map/Map";
import Sidebar from "../components/sidebar/Sidebar";
import User from "../components/user/User";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex h-screen flex-col gap-6 p-6 lg:flex-row">
        <Sidebar />
        <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 shadow-2xl">
          <Map />
          <User />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
