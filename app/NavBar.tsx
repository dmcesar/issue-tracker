import Link from "next/link";
import React from "react";
import { AiOutlineBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 p-5 mb-5 border-b justify-between items-center">
      <Link href="/">
        <AiOutlineBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
