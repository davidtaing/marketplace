import Link from "next/link";
import { joinClassNames } from "../utils";
import { Button } from "./Button";

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
      <li onClick={closeMenu}>
        <Link href="/">
          <a className="align-middle">Home</a>
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link href="/login">
          <a className="align-middle">Login</a>
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link href="/signup">
          <a className="align-middle">
            <Button variant="SMALL_PRIMARY">Post a Task</Button>
          </a>
        </Link>
      </li>
    </ul>
  );
};
