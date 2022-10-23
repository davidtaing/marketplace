import { joinClassNames } from "../utils";

enum Styles {
  SMALL = "rounded-md px-3 py-2",
  PRIMARY = "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-gray-50",
}

export const SmallButton = (
  props: React.ComponentPropsWithoutRef<"button">
) => {
  return (
    <button
      {...props}
      className={joinClassNames(Styles["SMALL"], Styles["PRIMARY"])}
    />
  );
};
