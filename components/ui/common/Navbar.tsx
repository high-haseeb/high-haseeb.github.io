'use client'
import useHoveredLinkStore, { NavLink } from "@/components/stores/NavbarStore";
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
        <NavItem title="blog" href="/blog" pathname={pathname} />
        <NavItem title="contact" href="/contact" pathname={pathname} />
      </div>
    </div>
  );
};
const NavItem = ({ title, href, pathname }: { title: NavLink; href: string; pathname: string; }) => {
  const setHoveredLink = useHoveredLinkStore(state => state.setHoveredLink);
  return (
    <Link href={href} onMouseEnter={() => setHoveredLink(title)} onMouseLeave={()=> setHoveredLink(undefined)}>
      <div className={ `cursor-pointer hover:text-lime-400 ${href === pathname ? "text-lime-400" : ""}` }>{title}</div>
    </Link>
  );
};

export default Navbar;
