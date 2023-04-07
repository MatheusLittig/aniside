import { splitProps } from "@aniside/helpers";
import { VariantProps, cva, cx } from "class-variance-authority";

const wrapperClassName = cva(
  "rounded relative flex items-center justify-between gap-2 px-3",
  {
    variants: {
      type: {
        filled: ["bg-black-900 placeholder:text-black-600"],
        transparent: ["bg-transparent"],
      },
    },

    defaultVariants: {
      type: "filled",
    },
  },
);

type InputWrapperProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof wrapperClassName>;

const InputWrapper = ({
  className: _className,
  ...props
}: InputWrapperProps) => {
  const [variants, rest] = splitProps(props, ["type"]);

  return (
    <div className={cx(wrapperClassName(variants), _className)} {...rest} />
  );
};

const inputClassname = cva(
  "outline-none w-full placeholder:text-black-600 flex items-center justify-between gap-1 bg-transparent",
  {
    variants: {
      size: {
        sm: ["h-6"],
        md: ["h-8"],
        lg: ["h-12"],
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

type InputFieldProps = React.HtmlHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputClassname>;

const InputField = ({ className, ...props }: InputFieldProps) => {
  const [variants, rest] = splitProps(props, ["size"]);

  return (
    <input className={cx(inputClassname(variants), className)} {...rest} />
  );
};

type InputLabelProps = React.HTMLAttributes<HTMLLabelElement>;

const InputLabel = ({ className, ...props }: InputLabelProps) => {
  return <label className={cx(className, "text-sm")} {...props} />;
};

type InputComponent = {
  (props: React.ComponentProps<typeof InputWrapper>): JSX.Element;
  Field: (props: React.ComponentProps<typeof InputField>) => JSX.Element;
  Label: (props: React.ComponentProps<typeof InputLabel>) => JSX.Element;
};

const Input = InputWrapper as InputComponent;
Input.Field = InputField;
Input.Label = InputLabel;

export { Input };
