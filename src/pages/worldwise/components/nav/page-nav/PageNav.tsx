import { NavLink } from "react-router-dom";
import Logo from "../../logo/Logo";

const baseLink =
  "text-xs font-black uppercase tracking-[0.3em] text-slate-300 transition hover:text-white";

function PageNav() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />

      <ul className="flex items-center gap-6">
        <li>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? "text-white" : ""}`
            }
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="product"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? "text-white" : ""}`
            }
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="login"
            className={({ isActive }) =>
              `rounded-full bg-white/90 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 shadow-lg transition hover:-translate-y-0.5 ${
                isActive ? "ring-2 ring-white/40" : ""
              }`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
