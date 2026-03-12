import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const baseClasses =
    "group inline-flex items-center gap-2.5 rounded-lg border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

const Button = ({ className = "", children, ...props }: ButtonProps) => {
    return (
        <button className={`${baseClasses} ${className}`.trim()} {...props}>
            {children}
        </button>
    );
};

export default Button;
