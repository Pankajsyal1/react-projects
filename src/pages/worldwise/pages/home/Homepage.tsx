import { Link } from "react-router-dom";
import PageNav from "../../components/nav/page-nav/PageNav";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-12">
        <PageNav />

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-tight tracking-tight">
              You travel the world.
              <br />
              WorldWise keeps track of your adventures.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              A world map that tracks your footsteps into every city you can
              think of. Never forget your wonderful experiences, and show your
              friends how you have wandered the world.
            </p>
            <Link
              to="login"
              className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.3em] text-slate-900 shadow-xl shadow-white/30 transition hover:-translate-y-0.5"
            >
              Start tracking now
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-400/30 via-indigo-400/20 to-purple-400/20 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
              <img
                src="/world-wise/img-2.jpg"
                alt="City view"
                className="h-full w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
