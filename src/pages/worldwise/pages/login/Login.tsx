import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import PageNav from "../../components/nav/page-nav/PageNav";
import { useAuth } from "../../contexts/FakeAuthContext";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/world-wise/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-20 pt-12">
        <PageNav />

        <form
          className="mx-auto w-full max-w-xl rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-black tracking-tight">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-300">
            Use the demo account to explore the app.
          </p>

          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-black uppercase tracking-[0.3em] text-slate-400"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-xs font-black uppercase tracking-[0.3em] text-slate-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            <div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
