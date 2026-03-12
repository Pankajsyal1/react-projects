import { Outlet, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

type ProjectLayoutProps = {
    children?: ReactNode;
};

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
    const navigate = useNavigate();

    return (
        <div className="pt-32 pb-20">
            <button
                className="group flex items-center gap-3 bg-white border border-dark/5 px-6 py-3 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 mb-12 cursor-pointer border-none"
                onClick={() => navigate(-1)}
            >
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary transition-all">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180 group-hover:-translate-x-0.5 transition-transform">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark group-hover:text-white" />
                    </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-dark group-hover:text-primary transition-colors">
                    Back to Projects
                </span>
            </button>
            <div className="relative">
                {children}
                <Outlet />
            </div>
        </div>
    );
};

export default ProjectLayout;
