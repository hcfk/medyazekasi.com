import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <div
      className={className}
      style={{
        animationDelay: delay > 0 ? `${delay}s` : undefined,
      }}
    >
      {children}
    </div>
  );
}
