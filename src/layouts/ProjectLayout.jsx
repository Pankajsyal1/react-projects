import { Outlet, useNavigate } from "react-router-dom";
import Button from "../pages/advanced-filter/components/common/Button";

const ProjectLayout = ({ children }) => {
    const navigate = useNavigate();

    return (
        <>
            <button className="bg-slate-800 px-4 py-2 rounded-md mb-5" onClick={() => navigate(-1)}>⇦ Back</button>
            {children}
            <Outlet /> {/* Ensures child routes render */}
        </>
    );
};

export default ProjectLayout;
