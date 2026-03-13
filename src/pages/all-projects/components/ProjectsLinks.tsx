import { Link } from "react-router-dom";
import { allProjects } from "../data/projects";
import { motion } from "framer-motion";

const ProjectLinks = () => {
  return (
    <div className="space-y-24">
      {allProjects.map((category, index) => (
        <div key={index}>
          <div className="flex items-baseline gap-4 mb-10">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary">
              {category.type}
            </h3>
            <div className="h-[1px] flex-grow bg-primary/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  to={project.path}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.6)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white no-underline"
                >
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
                  <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                      {category.type}
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 shadow-inner transition group-hover:bg-primary/10">
                      <span className="text-xl">�</span>
                    </div>
                    <h4 className="mt-6 text-xl font-black text-dark tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-secondary text-sm font-medium leading-relaxed group-hover:opacity-100 transition-all duration-500">
                      Explore this modern {category.type.toLowerCase().slice(0, -1)} project implementation.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-dark/50 group-hover:text-primary">
                      View Project
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dark/5 bg-white transition-all group-hover:bg-primary group-hover:border-primary">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark group-hover:text-white" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectLinks;
