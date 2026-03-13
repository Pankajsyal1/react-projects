import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/world-wise/logo.png"
        alt="WorldWise logo"
        className="h-10 rounded-xl"
      />
      <span className="text-lg font-black uppercase tracking-[0.2em] text-white">
        WorldWise
      </span>
    </Link>
  );
}

export default Logo;
