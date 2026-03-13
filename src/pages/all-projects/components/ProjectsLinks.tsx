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
                  className="group p-8 rounded-[2rem] bg-white border border-dark/5 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 no-underline h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-xl mb-6 group-hover:bg-primary/10 transition-colors">
                      🚀
                    </div>
                    <h4 className="text-xl font-black text-dark tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-secondary text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      Explore this modern {category.type.toLowerCase().slice(0, -1)} project implementation.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-dark/40 group-hover:text-primary">
                      View Project
                    </span>
                    <div className="w-8 h-8 rounded-full border border-dark/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-0.5 transition-transform">
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
