import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { Button, Input, Icon } from "..";

type AppWrapperProps = HTMLAttributes<HTMLElement>;

const AppWrapper = ({ className, ...props }: AppWrapperProps) => {
  return (
    <html
      lang="en"
      className={cx(
        className,
        "bg-black-950",
        "text-black-100",
        "antialiased px-3 md:px-0",
      )}
    >
      <body className="max-w-screen-xl m-[0_auto]">{props.children}</body>
    </html>
  );
};

type AppHeaderProps = React.HTMLAttributes<HTMLElement>;

const AppHeader = ({ children }: AppHeaderProps) => (
  <header className="w-full grid gap-9 grid-cols-12 h-20 items-center justify-between">
    {children}
  </header>
);

type AppComponent = {
  (props: React.ComponentProps<typeof AppWrapper>): JSX.Element;
  Header: (props: React.ComponentProps<typeof AppWrapper>) => JSX.Element;
};

const App = AppWrapper as AppComponent;
App.Header = AppHeader;

export { App };
