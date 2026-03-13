import type { ButtonHTMLAttributes } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
};

const BackButton = ({ label = "Back to Projects" }: BackButtonProps) => {
    const navigate = useNavigate();
    return (
        <Button
            type="button"
            onClick={() => navigate(-1)}
            className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-900/20"
        >
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180 transition-transform group-hover:-translate-x-0.5"
            >
                <path
                    d="M1 6H11M11 6L6 1M11 6L6 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Button>
    );
};

export default BackButton;
