import { TaskCategory } from "../../types";
import { CategoryFilterButton } from "./CategoryFilterButton";

interface CategoryFilterGroupProps {
  categories: TaskCategory[];
  filter: TaskCategory;
  setFilter: (category: TaskCategory) => void;
}

export const CategoryFilterGroup = ({
  categories,
  filter,
  setFilter,
}: CategoryFilterGroupProps) => {
  return (
    <>
      {categories.map((category) => (
        <CategoryFilterButton
          key={category}
          category={category}
          active={category === filter}
          onClick={() => setFilter(category)}
        />
      ))}
    </>
  );
};
