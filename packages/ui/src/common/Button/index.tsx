import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const className = cva(
  "text-gray-100 flex items-center justify-center rounded-md px-2 py-1",
  {
    variants: {
      type: {
        primary:
          "bg-blue-500 border border-1 border-blue-500 hover:bg-transparent hover:text-blue-500",
        secondary:
          "bg-red-500 border border-1 border-red-500 hover:bg-transparent hover:text-red-500",
      },
      size: { sm: "h-7", md: "h-9", lg: "h-12" },
    },
    defaultVariants: {
      type: "primary",
      size: "md",
    },
  },
);

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof className>;

const Button = ({ children, type, ...props }: ButtonProps) => {
  return (
    <button className={className({ type })} {...props}>
      {children}
    </button>
  );
};

export { Button };
