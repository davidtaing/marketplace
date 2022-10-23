import { MdMenu, MdClose } from "react-icons/md";
import { joinClassNames } from "../utils";

interface HamburgerMenuProps {
  active: boolean;
  toggleActive: () => void;
  className?: string;
}

export const HamburgerMenu = ({
  active,
  toggleActive,
  className,
}: HamburgerMenuProps) => {
  return (
    <div
      className={joinClassNames("hamburgerMenu h-7 w-7 z-50", className ?? "")}
      onClick={toggleActive}
    >
      {active ? (
        <MdClose className="w-full h-full" />
      ) : (
        <MdMenu className="w-full h-full" />
      )}
    </div>
  );
};
