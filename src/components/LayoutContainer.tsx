import { PropsWithChildren } from "react";

export const LayoutContainer = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`max-w-4xl mx-auto w-full ${className}`}>{children}</div>
  );
};
