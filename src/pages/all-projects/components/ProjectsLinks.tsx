import { Link } from "react-router-dom";
import { allProjects } from "../data/projects";
import { motion } from "framer-motion";

const ProjectLinks = () => {
  return (
    <div className="space-y-16 sm:space-y-20">
      {allProjects.map((category, index) => (
        <div key={index}>
          <div className="flex items-baseline gap-3 mb-6">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary">
              {category.type}
            </h3>
            <div className="h-[1px] flex-grow bg-primary/10" />
          </div>

          <div className="flex flex-wrap gap-3">
            {category.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
                viewport={{ once: true }}
                className="w-full lg:w-[calc(50%-0.375rem)]"
              >
                <Link
                  to={project.path}
                  className="group flex w-full items-center justify-between gap-4 rounded-[1.75rem] border border-white/70 bg-white/80 px-4 py-4 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.5)] transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white no-underline sm:gap-6 sm:px-6 sm:py-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 shadow-inner transition group-hover:bg-primary/10 sm:h-12 sm:w-12">
                      <span className="text-base sm:text-lg">.</span>
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 sm:text-[10px]">
                        {category.type}
                      </p>
                      <h4 className="mt-2 text-base font-black text-dark tracking-tight group-hover:text-primary transition-colors sm:text-lg">
                        {project.title}
                      </h4>
                      <p className="text-xs font-medium text-secondary sm:text-sm">
                        Explore this modern {category.type.toLowerCase().slice(0, -1)} project implementation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase tracking-widest text-dark/50 group-hover:text-primary sm:text-[10px]">
                      View Project
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-dark/5 bg-white transition-all group-hover:bg-primary group-hover:border-primary sm:h-9 sm:w-9">
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
