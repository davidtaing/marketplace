import Link from "next/link";

interface NavItemProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const NavItem = ({ children, href, onClick }: NavItemProps) => {
  return (
    <li onClick={onClick}>
      <Link href={href}>
        <a className="align-middle">{children}</a>
      </Link>
    </li>
  );
};
