import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline" | "light";
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  type = "button",
  children,
  className = "",
}: ButtonProps) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
