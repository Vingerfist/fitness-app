type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
  };
  
  export default function Button({
    children,
    variant = "primary",
  }: ButtonProps) {
    return (
      <button
        className={`rounded-xl px-5 py-3 font-semibold transition-all duration-200 ${
          variant === "primary"
            ? "bg-black text-white hover:opacity-90"
            : "border border-gray-300 bg-white hover:bg-gray-100"
        }`}
      >
        {children}
      </button>
    );
  }