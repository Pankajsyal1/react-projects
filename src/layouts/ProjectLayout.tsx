import { Outlet, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import BackButton from "../components/BackButton";

type ProjectLayoutProps = {
    children?: ReactNode;
};

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
    const navigate = useNavigate();
    const content = children ?? <Outlet />;

    return (
        <div>
            <div className="container flex flex-col gap-3 sm:gap-4">
                <div className="relative rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl shadow-primary/5 backdrop-blur sm:p-8">
                    <div className="absolute -top-8 right-6 hidden h-20 w-20 rounded-full bg-primary/20 blur-2xl sm:block" />
                    <div className="mb-4">
                        <BackButton onClick={() => navigate(-1)} />
                    </div>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ProjectLayout;
