import { joinClassNames } from "../utils";
import { Button } from "./Button";
import { NavItem } from "./NavItem";

const styles = {
  base: "flex flex-col gap-4 absolute top-0 left-0 z-40 p-4 w-screen h-screen bg-white",
  mediaQueries: {
    md: "md:static md:inline-flex md:flex-row md:gap-12 md:items-center md:bg-inherit md:w-auto md:h-auto md:p-0",
  },
};

interface NavMenuProps {
  active: boolean;
  closeMenu: () => void;
}

export const NavMenu = ({ active, closeMenu }: NavMenuProps) => {
  return (
    <ul
      className={joinClassNames(
        "navMenu",
        styles.base,
        styles.mediaQueries.md,
        active ? "" : "hidden"
      )}
    >
      <NavItem onClick={closeMenu} href="/">
        Home
      </NavItem>
      <NavItem onClick={closeMenu} href="/login">
        Login
      </NavItem>
      <NavItem onClick={closeMenu} href="/signup">
        <Button variant="SMALL_PRIMARY">Post a Task</Button>
      </NavItem>
    </ul>
  );
};
