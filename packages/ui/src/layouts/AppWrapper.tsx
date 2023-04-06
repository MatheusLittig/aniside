import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";

type AppWrapperProps = HTMLAttributes<HTMLElement>;

const AppWrapper = ({ className, ...props }: AppWrapperProps) => {
  return (
    <html
      lang="en"
      className={cx(className, "bg-black", "text-gray-200", "antialiased")}
    >
      <body>{props.children}</body>
    </html>
  );
};

export { AppWrapper };
