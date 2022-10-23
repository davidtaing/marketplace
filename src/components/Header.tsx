import Link from "next/link";
import { joinClassNames } from "../utils";

import { LayoutContainer } from "./LayoutContainer";

const BUTTON = "rounded-md px-3 py-2";
const PRIMARY_BUTTON =
  "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-gray-50";

const NavMenu = () => {
  return (
    <ul className="inline-flex gap-12 items-center">
      <li>
        <Link href="/">
          <a className="align-middle">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a className="align-middle">Login</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a className="align-middle">
            <button className={joinClassNames(BUTTON, PRIMARY_BUTTON)}>
              Post a Task
            </button>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export const Header = () => {
  return (
    <header className="p-4">
      <LayoutContainer className="flex justify-between items-center">
        <span className="text-xl font-medium align-middle">
          <Link href="/">
            <a className="align-middle">marketplace</a>
          </Link>
        </span>
        <NavMenu />
      </LayoutContainer>
    </header>
  );
};
