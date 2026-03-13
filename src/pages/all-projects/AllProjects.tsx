import AppHeading from "../../components/common/AppHeading"
import Section from "../home/components/Section"
import ProjectLinks from "./components/ProjectsLinks"

const Projects = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50" />
      <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]" />
      <div className="absolute bottom-0 -left-16 h-80 w-80 rounded-full bg-amber-200/40 blur-[140px]" />

      <div className="relative container mx-auto px-6 pt-24 pb-12">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-end">
          <div className="space-y-4">
            <AppHeading sno={1} title="Explore modern React builds" />
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg -mt-6">
              A curated collection of UI experiments, feature builds, and polished
              product-style interfaces.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-900/5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              What you get
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
              <span className="rounded-2xl bg-slate-100 px-3 py-2 text-center">Fast UI</span>
              <span className="rounded-2xl bg-slate-100 px-3 py-2 text-center">Clean UX</span>
              <span className="rounded-2xl bg-slate-100 px-3 py-2 text-center">Reusable</span>
              <span className="rounded-2xl bg-slate-100 px-3 py-2 text-center">Modern</span>
            </div>
          </div>
        </div>

        <Section title={"React Projects"}>
          <ProjectLinks />
        </Section>
      </div>
    </div>
  )
}

export default Projects
