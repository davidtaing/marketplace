import { PropsWithChildren } from "react";
import { joinClassNames } from "../utils";

enum Styles {
  BASE = "max-w-4xl mx-auto w-full",
}

export const LayoutContainer = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={joinClassNames(Styles["BASE"], className ?? "")}>
      {children}
    </div>
  );
};
