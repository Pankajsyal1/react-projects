import type { ButtonHTMLAttributes } from "react";
import Button from "./Button";

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
};

const BackButton = ({ label = "Back to Projects", ...props }: BackButtonProps) => {
    return (
        <Button {...props}>
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/15 text-white transition-all group-hover:bg-white/25">
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
            </span>
            <span className="transition-colors group-hover:text-white">{label}</span>
        </Button>
    );
};

export default BackButton;
