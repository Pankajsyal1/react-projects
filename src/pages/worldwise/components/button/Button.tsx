import type { ReactNode, MouseEvent } from "react";

type ButtonType = "primary" | "back" | "position" | "default";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  htmlType?: "button" | "submit" | "reset";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.3em] transition";

const styles: Record<ButtonType, string> = {
  primary:
    "bg-white text-slate-900 shadow-lg shadow-white/30 hover:-translate-y-0.5",
  back:
    "border border-white/40 text-white hover:border-white hover:text-white/90",
  position:
    "absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-slate-900 shadow-xl shadow-white/30",
  default: "bg-slate-800 text-white",
};

function Button({
  children,
  onClick,
  type = "default",
  htmlType = "button",
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[type]} ${className ?? ""}`}
      type={htmlType}
    >
      {children}
    </button>
  );
}

export default Button;
