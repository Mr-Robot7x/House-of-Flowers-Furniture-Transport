import React from "react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "light"
  | "whatsapp"
  | "white";

type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const buttonVariants: Record<ButtonVariant, string> = {
  default: "bg-gradient-to-t ts from-[#be007e] to-[#E40076] text-white",
  destructive: "ts bg-red-500 text-white hover:bg-red-600",
  outline:
    "border border-[#6e9d31] text-[#6e9d31] hover:bg-[#6e9d31] hover:text-white hover:border-transparent",
  secondary:
    "bg-[#f0f0f0] border border-transparent hover:border-neutral-300 transition-all",
  ghost: "hover:bg-[#f0f0f0]",
  light:
    "bg-gradient-to-t from-[#6e9d31] to-[#8CC63E] ts hover:bg-[#287094]/80 text-white",
  whatsapp: "bg-green-500 text-white ts",
  white:
    "bg-white text-[#023246] hover:bg-[#287094] hover:text-white hover:border-transparent",
};

const buttonSizes: Record<ButtonSize, string> = {
  default: "py-3 px-6 rounded-full",
  sm: "py-2 px-4 rounded-full",
  lg: "h-11 rounded-md px-8",
  icon: "h-12 w-12 rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];

  return (
    <button
      className={`inline-flex text-lg transition-all items-center justify-center whitespace-nowrap font-medium active:scale-95 ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
