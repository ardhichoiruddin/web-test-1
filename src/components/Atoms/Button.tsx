import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  color?: "primary" | "secondary" | "danger" | "success" | "default";
}

const Button: FC<ButtonProps> = ({
  size = "md",
  color = "default",
  children,
  ...props
}) => {
  const sizeClasses: { [key in NonNullable<ButtonProps["size"]>]: string } = {
    sm: "",
    md: "pt-[6px] pr-[24px] pb-[6px] pl-[24px] text-base",
    lg: "",
    xl: "",
    xxl: "",
  };

  const colorClasses: { [key in NonNullable<ButtonProps["color"]>]: string } = {
    primary: "",
    secondary: "",
    danger: "",
    success: "",
    default: "bg-white text-[#4A77FF] hover:bg-gray-100",
  };

  const baseClasses =
    "rounded-[8px] font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition font-semibold";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
