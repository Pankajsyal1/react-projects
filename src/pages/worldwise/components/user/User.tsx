import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/FakeAuthContext";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  function handleClick() {
    logout();
    navigate("/world-wise");
  }

  return (
    <div className="absolute right-6 top-6 flex items-center gap-3 rounded-full border border-white/20 bg-white/90 px-3 py-2 text-slate-900 shadow-lg">
      <img
        src={user.avatar}
        alt={user.name}
        className="h-8 w-8 rounded-full object-cover"
      />
      <span className="text-xs font-bold">Welcome, {user.name}</span>
      <button
        onClick={handleClick}
        className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-white"
        type="button"
      >
        Logout
      </button>
    </div>
  );
}

export default User;
