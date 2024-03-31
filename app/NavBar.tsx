"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineBug } from "react-icons/ai";
import { useSession, signOut, signIn } from "next-auth/react";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  const pathname = usePathname();

  const session = useSession();

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
            className={classNames({
              "text-zinc-900": link.href === pathname,
              "text-zinc-500": link.href !== pathname,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {session?.status === "loading" && <div>Loading...</div>}
      {session?.status === "unauthenticated" && (
        <button onClick={() => signIn()}>Sign In</button>
      )}
      {session?.status === "authenticated" && (
        <>
          <div>{session?.data?.user?.name}</div>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
