import { joinClassNames } from "../../utils";

interface CategoryFilterButton {
  category: string;
  active: boolean;
  onClick: () => void;
}

export const CategoryFilterButton = ({
  category,
  active,
  onClick,
}: CategoryFilterButton) => {
  const classes = active
    ? "bg-gray-800 text-sky-50 border-gray-500"
    : "border-gray-500 hover:bg-gray-800 hover:text-sky-50";
  const defaultClassNames = "border rounded px-2 py-1";
  const classNames = joinClassNames(defaultClassNames, classes);
  return (
    <button key={category} className={classNames} onClick={onClick}>
      {category}
    </button>
  );
};
