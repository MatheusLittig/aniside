import { HTMLAttributes } from "react";
import { splitProps } from "@aniside/helpers";
import { cva, VariantProps } from "class-variance-authority";

const className = cva(
  "text-black-100 flex items-center justify-center rounded px-3 py-1",
  {
    variants: {
      type: {
        primary:
          "bg-denim-700 border border-1 border-denim-700 hover:bg-transparent hover:text-denim-700",
        secondary:
          "bg-red-500 border border-1 border-red-500 hover:bg-transparent hover:text-red-500",
      },
      size: { sm: "h-10", md: "h-9", lg: "h-12" },
    },
    defaultVariants: {
      type: "primary",
      size: "md",
    },
  },
);

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof className>;

const Button = ({ children, ...props }: ButtonProps) => {
  const [variants, rest] = splitProps(props, ["type", "size"]);

  return (
    <button className={className(variants)} {...rest}>
      {children}
    </button>
  );
};

export { Button };
