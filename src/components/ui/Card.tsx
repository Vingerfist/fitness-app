import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}