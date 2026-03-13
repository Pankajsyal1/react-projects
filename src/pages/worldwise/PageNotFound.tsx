import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <h1 className="text-4xl font-black">Page not found</h1>
      <p className="mt-3 text-sm text-slate-300">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/world-wise"
        className="mt-6 rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.3em] text-slate-900 shadow-lg"
      >
        Back home
      </Link>
    </div>
  );
}
