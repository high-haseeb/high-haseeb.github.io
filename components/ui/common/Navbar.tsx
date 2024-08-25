'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed left-0 top-0 w-screen px-16 py-10 text-4xl">
      <div className="flex h-full w-full gap-6">
        <NavItem title="home" href="/" pathname={pathname}/>
        <NavItem title="about me" href="/about" pathname={pathname} />
        <NavItem title="projects" href="/projects" pathname={pathname} />
      </div>
    </div>
  );
};
const NavItem = ({ title, href, pathname }: { title: string; href: string; pathname: string; }) => {
  console.log(href, pathname)
  return (
    <Link href={href}>
      <div className={ `cursor-pointer hover:text-lime-400 ${href === pathname ? "text-lime-400" : ""}` }>{title}</div>
    </Link>
  );
};

export default Navbar;
