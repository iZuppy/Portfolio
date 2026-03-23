import clsx from "clsx";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

export default function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md tracking-wide",
        {
          "bg-surface-2 text-fg-2 border border-line": variant === "default",
          "bg-accent/10 text-accent border border-accent/15": variant === "accent",
          "text-fg-4": variant === "muted",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
