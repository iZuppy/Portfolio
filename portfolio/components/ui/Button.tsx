import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  external,
  children,
  className,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer",
    {
      "bg-accent text-black hover:bg-accent-dim": variant === "primary",
      "bg-surface text-fg border border-line hover:bg-surface-2 hover:border-line-2": variant === "secondary",
      "text-fg-2 hover:text-fg": variant === "ghost",
      "text-xs px-3.5 py-2": size === "sm",
      "text-sm px-5 py-2.5": size === "md",
      "text-base px-6 py-3": size === "lg",
    },
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
