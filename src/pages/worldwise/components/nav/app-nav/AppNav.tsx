import { NavLink } from "react-router-dom";

const baseLink =
  "flex-1 rounded-2xl px-4 py-2 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 transition";

function AppNav() {
  return (
    <nav>
      <ul className="flex gap-2 rounded-2xl bg-slate-800/60 p-2">
        <li className="flex-1">
          <NavLink
            to="cities"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-white text-slate-900 shadow"
                  : "hover:text-white"
              }`
            }
          >
            Cities
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink
            to="countries"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-white text-slate-900 shadow"
                  : "hover:text-white"
              }`
            }
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
