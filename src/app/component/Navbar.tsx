"use client";
import { poppins } from "@/assets/font";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <section className="navbar bg-gray-100">
      <nav className="navbar-menu">
        <div className="container mx-auto p-4 ">
          <div className="flex justify-between gap-4">
            <div className="navbar-logo">
              <Link href="/">
                <h3 className="font-bold text-4lg md:text-4xl text-orange-400">
                  StarBlogIndo
                </h3>
              </Link>
            </div>
            <div className="navbar-menu hidden md:flex justify-between gap-4 text-gray-600">
              <Link href="/">
                <p className={`${poppins.className} text-xl font-semibold`}>
                  Home
                </p>
              </Link>
              <Link href="/category/feature">
                <p className={`${poppins.className} text-xl font-semibold`}>
                  Categories
                </p>
              </Link>

              <Link href="/about">
                <p className={`${poppins.className} text-xl font-semibold`}>
                  About
                </p>
              </Link>
            </div>
            <div></div>

            <DropdownMenu>
              <DropdownMenuTrigger className="block md:hidden">
                <a
                  href="#"
                  id="menu"
                  className="hover:text-[#b6895b] text-black md:hidden"
                >
                  <Menu />{" "}
                </a>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <Link href="/" className={`hover:text-[#b6895b]`}>
                    Home
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/about" className="hover:text-[#b6895b]">
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link
                    href="/category/feature"
                    className="hover:text-[#b6895b] "
                  >
                    Category
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
