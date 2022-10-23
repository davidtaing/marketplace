import { MdMenu, MdClose } from "react-icons/md";

interface HamburgerMenuProps {
  active: boolean;
  toggleActive: () => void;
}

export const HamburgerMenu = ({ active, toggleActive }: HamburgerMenuProps) => {
  return (
    <div className="hamburgerMenu h-7 w-7" onClick={toggleActive}>
      {active ? (
        <MdClose className="w-full h-full" />
      ) : (
        <MdMenu className="w-full h-full" />
      )}
    </div>
  );
};
