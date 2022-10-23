import { joinClassNames } from "../utils";

const Styles = {
  sizes: {
    small: "rounded-md px-3 py-2",
    medium: "rounded-md px-4 py-3",
  },
  function: {
    primary:
      "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-gray-50",
    secondary:
      "border border-slate-500 hover:bg-slate-500 hover:text-gray-50 active:bg-slate-600 active:text-gray-50 text-slate-900",
  },
} as const;

const Variants = {
  SMALL_PRIMARY: joinClassNames(Styles.sizes.small, Styles.function.primary),
  SMALL_SECONDARY: joinClassNames(
    Styles.sizes.small,
    Styles.function.secondary
  ),
} as const;

interface ButtonProps<T extends keyof typeof Variants>
  extends React.ComponentPropsWithoutRef<"button"> {
  variant: T;
}

export function Button<T extends keyof typeof Variants>({
  variant,
  ...props
}: ButtonProps<T>) {
  return <button {...props} className={Variants[variant]} />;
}
