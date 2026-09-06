type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "ghost";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-black text-white hover:opacity-90",

    secondary:
      "border border-gray-300 bg-white text-black hover:bg-gray-100",

    success:
      "bg-green-600 text-white hover:bg-green-700",

    danger:
      "bg-red-600 text-white hover:bg-red-700",

    ghost:
      "bg-transparent text-black hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl
        px-5
        py-3
        font-semibold
        transition-all
        duration-200
        ${variants[variant]}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}