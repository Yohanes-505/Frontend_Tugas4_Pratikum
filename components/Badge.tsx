import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "soft" | "accent";
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}
